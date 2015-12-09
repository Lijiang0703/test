define(['backbone',
	'text!tem_image.html',
	'text!tem_text.html',
	'text!tem_newimage.html',
	'text!tem_textedit.html',
	'edit'],function(){

	//获取模版
	var tpl_text 		= require('text!tem_text.html');
	var tpl_img 		= require('text!tem_image.html');
	var tpl_changeimg 	= require('text!tem_newimage.html');
	var tpl_textedit 	= require('text!tem_textedit.html');

	//显示图片属性
	var Vatt_img    = Backbone.View.extend({
		el:$('#pro_normal_choice'),
		template:_.template(tpl_changeimg),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.empty();
			for(var i=1;i<5;i++){
				this.$el.append(this.template({changesrc:i}));
			}
			return this;
		},
		Imgchange:function(_image){
			$('.newimg').on('click',function(e){
				if(_image.get('imgsrc') == e.target.src) return;
				else {
					_image.set('imgsrc',e.target.src);	
				}
			});
		}
	});

	//文字编辑样式
	var Vatt_text   = Backbone.View.extend({
		el:$('#pro_normal_choice'),
		template:_.template(tpl_textedit),
		initialize:function(){
			this.$el.html(this.template(this.model.toJSON()));
		}
	});

	var m           = Backbone.Model.extend({
		defaults:{
			textvalue	: "点击输入文字",
			imgsrc		: "img/1.jpg"
		}
	});

	var _v_img      = Backbone.View.extend({
		template:_.template(tpl_img),
		initialize:function(){
			this.render();
			that=this;
			this.model.on('change:imgsrc',function(){
			    var el=$(that.template(this.previousAttributes()));
                    //el.replaceWith(that.$el);

                //that.setElement(el);
			});
		},
		render:function(){
			var el=$(this.template(this.model.toJSON()));
            this.setElement(el);
				$('#work').append(this.$el);
				return this;
		},
		events:{
			'click .close'		:'close',
			'click .imgstyle'	:'do'
		},
		close:function(){
			this.$el.remove();
            this.model.collection.remove(this.model);//从collection中移除model
		},
		do:function(){
			//console.log(this.model.get('imgsrc'));
			var show  = new Vatt_img();
				show.Imgchange(this.model);
		}
	});

	var  _v_text    = Backbone.View.extend({
		template:_.template(tpl_text),
		initialize:function(){
			this.render();
		},
		render:function(){
			var el = $(this.template(this.model.toJSON()));
				this.setElement(el);
				$('#work').append(this.$el);
				return this; 
		},
		events:{
			'click .close'		: 'close',
			'click .textstyle'	: 'do'
		},
		close:function(){
			this.$el.remove();
            this.model.collection.remove(this.model);
		},
		do:function(){
            var do_text = new Vatt_text({model:this.model});
            this.model.set('textvalue',this.$el.children('div').html());
			this.model.set('callback',changetext(this.$el));
		}
	});

    var _c_all      = Backbone.Collection.extend({
        initialize:function(){
            this.on('add',function(model){
                if(model.get('type')=='img'){
                    new _v_img({model:model});
                }
                else {
                    new _v_text({model: model});
                }
            })
        }
    });
	var c_all       = new _c_all();

	return{
		c_all	:c_all,
		m     	: m
	}
});