require.config({
<<<<<<< HEAD
	// baseUrl:"ueditor",
	paths:{
		jquery:'jquery-2.1.3',
		underscore:'underscore-min',
		backbone:'backbone-min',
		bootstrap:'bootstrap.min',
		bootbox:'bootbox.min'
=======
	paths:{
		jquery:'jquery-2.1.3',
		underscore:'underscore-min',
		backbone:'backbone-min'
>>>>>>> 8177e5a6f87adc80ea3c18b390a6b84f5fcf2ee4
	},
	shim:{
		'underscore':{
			exports:'_'
		},
		'backbone':{
			deps:['underscore','jquery'],
			exports:'Backbone'
<<<<<<< HEAD
		},
		'bootstrap':{
			deps:['jquery'],
			exports:'bootbox'
		},
		'bootbox':{
			deps:['jquery','bootstrap'],
			exports:'bootbox'
=======
>>>>>>> 8177e5a6f87adc80ea3c18b390a6b84f5fcf2ee4
		}
	}
});

<<<<<<< HEAD
require(['jquery','board','bootbox'],function($,b,box){
	$(function(){
		var getstore=window.localStorage?localStorage.getItem("store"):Cookie.read("store");
		// console.log(getstore);
		$("#work").html(getstore);
	});

=======
require(['jquery','board'],function($,b){
>>>>>>> 8177e5a6f87adc80ea3c18b390a6b84f5fcf2ee4
	$("#addimg").on('click',function(){
		var model = new b.m();
		b.c_img.add([model]);
	});
	$("#addtext").on('click',function(){
		var model = new b.m();
		b.c_text.add([model]);	
	});
<<<<<<< HEAD
	$("#work_save").on('click',function(){
		var source=$('#work').html();
		if(window.localStorage){
			localStorage.removeItem("store");
			localStorage.setItem("store",source);
		}
		else{
			Cookie.write("store",source);
		}
	});
	$('#work_show').on('click',function(){
		var showsource=$('#work').html();
		showsource.replace('textstyle','textstyle_show');
		showsource.replace('animated','');
		console.log(showsource);
		bootbox.alert({
			title:'预览',
			message:showsource
		});
	});

=======
	// $("#work_show").on('click',function(){
	// 	elevent.fun({
	// 		ispreview:true
	// 	})	
	// });
>>>>>>> 8177e5a6f87adc80ea3c18b390a6b84f5fcf2ee4
});