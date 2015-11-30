tinymce.PluginManager.add('lineheight', function(editor){
    var data={};
    Items = [
        {text:'缺省(1.6倍)',data:'1.6'},
        {text:'0.5倍',data:'0.5'},
        {text:'1倍',data:'1'},
        {text:'1.5倍',data:'1.5'},
        {text:'2倍',data:'2'},
        {text:'2.5倍',data:'2.5'},
        {text:'3倍',data:'3'},
        {text:'自定义...',data:'custom'}
    ];
    editor.addCommand('lineheight', function(command,value) {
        if(value=='custom'){
            showlineheightdialog();
            return ;
        }
        var bm = tinymce.activeEditor.selection.getBookmark();
        tinymce.activeEditor.formatter.apply('lineheight',{value:value*100});
        tinymce.activeEditor.selection.moveToBookmark(bm);
        //console.log(SpaltenNode);
    });
    editor.on('init',function(){
        tinymce.activeEditor.formatter.register('lineheight', {
            selector:'p',styles: {
                'lineHeight' : '%value'+'%'
             }
        });
    })
    update=function(){
        // var value=this.value();
        // console.log(value);     
        // value=Number(value);
        // data.value=value;
        //if(!_.isNumber(value)||value<=0) global.message('error','错误的数值');   
    };
    showlineheightdialog=function(){
         win = editor.windowManager.open({
                title: '自定义行距',
                //data: data,
                body: [
                    {
                        name: 'lineheight',
                        type: 'textbox',
                        size: 40,
                        autofocus: true,
                        label: '行距(倍)',
                        onchange: update,
                        onkeyup: update
                    }
                ],
                onSubmit: function(e){
                    var data=e.data;
                    var value=data.lineheight;
                    value=Number(value);
                    if(!_.isNumber(value)||value<=0) global.message('error','错误的数值'); 
                    editor.execCommand('lineheight',false,value); 
                }
        })       
    }

            
    editor.addButton('lineheight', {
        text: '行距',
        type: 'splitbutton',
        icon:null,
        tooltip: '设定行距',
        menu: Items,
       // onshow: updateSpaltenStatus,
        onselect: function(e) {
           console.log(e.control.settings.data);
           editor.execCommand('lineheight',false,e.control.settings.data);
            //applyListFormat('OL', e.control.settings.data);
        },
        onclick: function() {
            showlineheightdialog();
           // updateSpaltenStatus();
           // editor.execCommand('spaltenchange',false,'cancel');
        }
    });
});