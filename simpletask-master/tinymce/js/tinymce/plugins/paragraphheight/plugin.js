tinymce.PluginManager.add('paragraphheight', function(editor){
    Items = [
        {text:'缺省(1倍)',data:'1'},
        {text:'0.5倍',data:'0.5'},
        {text:'1倍',data:'1'},
        {text:'1.5倍',data:'1.5'},
        {text:'2倍',data:'2'},
        {text:'2.5倍',data:'2.5'},
        {text:'3倍',data:'3'},
        {text:'自定义...',data:'custom'}
    ];
    showparagraphdialog=function(){
         win = editor.windowManager.open({
                title: '自定义段落间距',
                //data: data,
                body: [
                    {
                        name: 'paragraphheight',
                        type: 'textbox',
                        size: 40,
                        autofocus: true,
                        label: '段落间距(倍)'
                        //onchange: update,
                        //onkeyup: update
                    }
                ],
                onSubmit: function(e){
                    var data=e.data;
                    var value=data.paragraphheight;
                    value=Number(value);
                    if(!_.isNumber(value)||value<=0) global.message('error','错误的数值'); 
                    editor.execCommand('paragraphheight',false,value); 
                }
        })       
    }
    editor.addCommand('paragraphheight', function(command,value) {
        if(value=="custom"){
            showparagraphdialog();
            return ;
        }
        var bm = tinymce.activeEditor.selection.getBookmark();
        value='0 0 '+value+'em';
        tinymce.activeEditor.formatter.apply('paragraphheight',{value:value});
        tinymce.activeEditor.selection.moveToBookmark(bm);
        //console.log(SpaltenNode);
    });
    editor.on('init',function(){
        tinymce.activeEditor.formatter.register('paragraphheight', {
            selector:'p',styles: {
                'margin' :'%value'
             }
        });
    })
    editor.addButton('paragraphheight', {
        text: '段落间距',
        type: 'splitbutton',
        icon:null,
        tooltip: '设定段落间距',
        menu: Items,
       // onshow: updateSpaltenStatus,
        onselect: function(e) {
           console.log(e.control.settings.data);
           editor.execCommand('paragraphheight',false,e.control.settings.data);
            //applyListFormat('OL', e.control.settings.data);
        },
        onclick: function() {
            showparagraphdialog();
           // updateSpaltenStatus();
           // editor.execCommand('spaltenchange',false,'cancel');
        }
    });
});