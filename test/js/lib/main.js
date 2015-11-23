require.config({
	paths:{
		jquery:'jquery-2.1.3',
		underscore:'underscore-min',
		backbone:'backbone-min'
	},
	shim:{
		'underscore':{
			exports:'_'
		},
		'backbone':{
			deps:['underscore','jquery'],
			exports:'Backbone'
		}
	}
});

require(['jquery','add'],function($,a){
	var elevent=new a.add();
	// $('body').on('click',function(e){
	// 	var tar=e.target.id;
	// 	if(tar=='addimg'){
	// 		isimgadd:true
	// 	}
	// 	if(tar=='addtext'){
	// 		istextadd:true
	// 	}
	// })
	$("#addimg").on('click',function(){
		elevent.fun({
			isimgadd:true
		})	
	});
	$("#addtext").on('click',function(){
		elevent.fun({
			istextadd:true
		})	
	});
});