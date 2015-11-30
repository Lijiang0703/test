require.config({
	paths:{
		jquery:'jquery-2.1.3',
		underscore:'underscore-min',
		backbone:'backbone-min',
		bootstrap:'bootstrap.min',
		bootbox:'bootbox.min'
	},
	shim:{
		'underscore':{
			exports:'_'
		},
		'backbone':{
			deps:['underscore','jquery'],
			exports:'Backbone'
		},
		'bootstrap':{
			deps:['jquery'],
			exports:'bootstrap'
		},
		'bootbox':{
			deps:['jquery','bootstrap'],
			exports:'bootbox'
		}
	}
});
require(['jquery','board','bootbox'],function($,b,box){
	$(function(){
		var getstore=window.localStorage?localStorage.getItem("store"):Cookie.read("store");
		// console.log(getstore);
		$("#work").html(getstore);
	});
	$("#addimg").on('click',function(){
		var model = new b.m();
		b.c_img.add([model]);
	});
	$("#addtext").on('click',function(){
		var model = new b.m();
		b.c_text.add([model]);	
	});
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
});