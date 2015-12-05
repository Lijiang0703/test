// window.onload=function(){
// 	initTiny();
// }
function initTiny(){
	tinymce.init({
		selector:'#textdir',
		menu:{
			view:{title:'Edit',items:'cut,copy,paste'}
		},
		toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | code',
		height:300,
		statusbar:false,
		plugins:'code'
	});
}
var timer = null;
function changetext(obj){
	clearInterval(timer);
	timer = null;
	initTiny(); 
	if(!tinyMCE.activeEditor) return;
	tinyMCE.activeEditor.setContent(obj[0].innerHTML);  

	timer = setInterval(function(){
		var temp = tinyMCE.activeEditor.getContent();
			obj[0].innerHTML = temp;
	},10);
}