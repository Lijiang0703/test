require.config({
	paths:{
		jquery:'jquery-2.1.3',
		underscore:'underscore-min',
		backbone:'backbone-min',
		bootstrap:'bootstrap.min',
		bootbox:'bootbox.min',
        jqueryui:'jquery-ui'
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
		$("#work").html(getstore);
	});

	var img_id = 0;
	var	txt_id = 0;

	$("#addimg").on('click',function(){
		_imgid++;
		var model = new b.m({id:'img'+_imgid,imgid:_imgid,type:'img'});
		// b.c_img.add([model]);
		b.c_all.add(model);	
	});
	$("#addtext").on('click',function(){
		_txtid++;
		var model = new b.m({id:'txt'+_txtid,txtid:_txtid,type:'txt'});
		// b.c_text.add([model]);
		b.c_all.add(model);	
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
			bootbox.alert({
			title:'预览',
			message:$('#work').html()
		});
	});
});