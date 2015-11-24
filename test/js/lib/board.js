define(['backbone','text!template.tpl'],function(){
	var tpl=require('text!template.tpl');
	var tpl_text=tpl.split('<br/>')[0];
	var tpl_img=tpl.split('<br/>')[1];
	var tpl_changeimg=tpl.split('<br/>')[2];
	//获取模版
	
	//显示图片属性
	var Vatt_img=Backbone.View.extend({
		el:$('#pro_img'),
		template:_.template(tpl_changeimg),
		initialize:function(){
			this.render();
		},
		render:function(){
			for(var i=1;i<5;i++){
				this.$el.append(this.template({changesrc:i}));
			}
		}
	});
	//model
	var m=Backbone.Model.extend({
		defaults:{
			textvalue:"请输入文字",
			imgsrc:"img/1.jpg"
			// textid:"txt"+textcount,
			// imgid:"img"+imgcount
		}
	});

	var _v_img=Backbone.View.extend({
		el:$('#work'),
		template:_.template(tpl_img),
		events:{
			'click .imgstyle':'do'
		},
		do:function(){
			var show=new Vatt_img();
		},
		add:function(model){
			this.$el.append(this.template(model.toJSON()));
		}
	});

	var  _v_text=Backbone.View.extend({
		el:$('#work'),
		template:_.template(tpl_text),
		add:function(model){
			this.$el.append(this.template(model.toJSON()));
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