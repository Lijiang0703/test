define(['backbone','text!template.tpl'],function(){
	var tpl=require('text!template.tpl');
	var tpl_text=tpl.split('<br/>')[0];
	var tpl_img=tpl.split('<br/>')[1];
	console.log(tpl_text);
	function elements(obj){
		var m=Backbone.Model.extend({
			defaults:{
				textvalue:"请输入文字",
				imgsrc:"img/1.jpg"
			}
		});
		var  v_text=Backbone.View.extend({
			el:$('#work'),
			template:_.template(tpl_text),
			initialize:function(){
				this.render();
			},
			render:function(){
				this.$el.append(this.template(this.model.toJSON()));
				return this;
			}
		});
		var  v_img=Backbone.View.extend({
			el:$('#work'),
			template:_.template(tpl_img),
			initialize:function(){
				this.render();
			},
			render:function(){
				this.$el.append(this.template(this.model.toJSON()));
				return this;
			}
		});
		var M=new m;
		if(obj=='istext'){
			var V_text=new v_text({model:M});
		}
		if(obj=='isimg'){
			var V_img=new v_img({model:M});
		}
	}
	return {elements:elements}
});	