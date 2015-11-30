define(['backbone','text!template.tpl'],function(){
	var tpl = require('text!template.tpl');
	var tpl_text		= tpl.split('<br/>')[0];
	var tpl_img 		= tpl.split('<br/>')[1];
	var tpl_changeimg	= tpl.split('<br/>')[2];
	//获取模版
	
	//显示图片属性
	var Vatt_img=Backbone.View.extend({
		el:$('#pro_img'),
		template:_.template(tpl_changeimg),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.empty();
			for(var i=1;i<5;i++){
				this.$el.append(this.template({changesrc:i}));
			}
		},
		Imgchange:function(_image){
			$('.newimg').on('click',function(e){
				_image.src=e.target.src;
			});
		}
	});
	var Vatt_text=Backbone.View.extend({
		el:$('#pro_text')
	});
	//model
	var m=Backbone.Model.extend({
		defaults:{
			textvalue:"请输入文字",
			imgsrc:"img/1.jpg"
		}
	});
	var _v_img=Backbone.View.extend({
		el:$('#work'),
		template:_.template(tpl_img),
		events:{
			'click .imgstyle'	:'do',
			'click .close'		:'close'
		},
		do:function(e){
			var _image= e.target;
			var show  = new Vatt_img();
			show.Imgchange(_image);
		},
		add:function(model){
			this.$el.append(this.template(model.toJSON()));
		},
		close:function(e){
			var tar=e.target;
			$(tar).parent().remove();
		}
	});

	var  _v_text=Backbone.View.extend({
		el:$('#work'),
		template:_.template(tpl_text),
		add:function(model){
			this.$el.append(this.template(model.toJSON()));
		},
		events:{
			'click':'do'
		},
		do:function(e){
			var do_text= new Vatt_text();
			var _text=e.target;
		}
	});
	var v_img = new _v_img();
	var v_text= new _v_text();
	var c_img = new Backbone.Collection;
	var c_text= new Backbone.Collection;
	c_img.on("add", function(model) {
	  	v_img.add(model);
	});
	c_text.on("add",function(model){
	  	v_text.add(model);
	});

	return {
		v_img:v_img,
		v_text:v_text,
		c_img:c_img,
		c_text:c_text,
		m:m,
	}
});	