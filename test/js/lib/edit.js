function changetext(obj){
	tinyMCE.activeEditor.setContent(obj.innerHTML);  
	setInterval(function(){
		var temp=tinyMCE.activeEditor.getContent();
		obj.innerHTML=temp;
	},10);
}