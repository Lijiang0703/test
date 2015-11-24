define(['jquery','board'],function($,B){
	function add(){
		this.type={
			isimgadd:false,
			istextadd:false,
			ispreview:false
		}
	}
	add.prototype={
		fun:function(type){
			var Type=$.extend(this.type,type);
			if(Type.istextadd){
				B.elements('istext');
				Type.istextadd=false;
			}
			if(Type.isimgadd){
				B.elements('isimg');	
				Type.isimgadd=false;
			}
			if(Type.ispreview){
				Type.ispreview=false;
			}
		}
	}
	return {
		add:add
	};
});