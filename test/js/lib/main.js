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
require(['jquery','board','bootbox','sort'],function($,b,box){
    var _Sort  = require('sort');
    var _id = 0;

	$(function(){
        //初始化tinymce
        initTiny();
        //json格式转化为数组
		var getstore = JSON.parse(window.localStorage?localStorage.getItem("store"):Cookie.read("store"));
        if(getstore == null)  return;
        for(var i=0;i<getstore.length;i++){
           _id=getstore[i].id;
            var model=new b.m(getstore[i]);
            b.c_all.add(model);
        }
	});

	$("#addimg").on('click',function(){
		_id++;
		var model = new b.m({id:_id,imgid:_id,type:'img'});
		 b.c_all.add(model);
	});
	$("#addtext").on('click',function(){
		_id++;
		var model = new b.m({id:_id,txtid:_id,type:'txt'});
		 b.c_all.add(model);
	});
	$("#work_save").on('click',function(){
        //本地保存的只能是字符串
        var source = JSON.stringify(b.c_all);
		if(window.localStorage){
			localStorage.removeItem("store");
			localStorage.setItem("store",source);
		}
		else{
			Cookie.write("store",source);
		}
        //模拟ajax数据请求
        //$.ajax({
        //    url:'/save',
        //    data:{_source:source},
        //    type:'post',
        //    success:function(e){
        //        if(e.success){
        //            alert('OK');
        //        }
        //        else{
        //            alert('no');
        //        }
        //    },
        //    error:function(){
        //        alert('again');
        //    }
        //});
	});
	$('#work_show').on('click',function(){
			bootbox.alert({
			title:'预览',
			message:$('#work').html()
		});
	});
});