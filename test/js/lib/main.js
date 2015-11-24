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

require(['jquery','board'],function($,b){
	$("#addimg").on('click',function(){
		var model = new b.m();
		b.c_img.add([model]);
	});
	$("#addtext").on('click',function(){
		var model = new b.m();
		b.c_text.add([model]);	
	});
	// $("#work_show").on('click',function(){
	// 	elevent.fun({
	// 		ispreview:true
	// 	})	
	// });
});