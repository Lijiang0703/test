define(['jquery','board'],function($,B){
	function add(){
		this.type={
			isimgadd:false,
			istextadd:false
		}
	}
	add.prototype={
		fun:function(type){
			var Type=$.extend(this.type,type);
			if(Type.istextadd){
				B.elements('istext');
				// $("#work").append('<input type="text" class="col-md-10 textstyle col-md-push-1" value="请输入文字"></input>');		
				Type.istextadd=false;
			}
			if(Type.isimgadd){
				B.elements('isimg');
				// $("#work").append("<img src='img/1.jpg'/ class='col-md-10 imgstyle col-md-push-1'>");	
				Type.isimgadd=false;
			}
		}
	}
	return {
		add:add
	};
});