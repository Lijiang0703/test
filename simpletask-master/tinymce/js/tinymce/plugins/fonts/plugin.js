tinymce.PluginManager.add('fonts', function(editor){
    var data={};

    editor.addCommand('fonts', function(command,value) {
            showfontsdialog(value);
        // bootbox.prompt("What is your name?", function(result) {                
          // if (result === null) {                                             
            // //Example.show("Prompt dismissed");                              
          // } else {
           // // Example.show("Hi <b>"+result+"</b>");                          
          // }
        // });
            return ;
        // var bm = tinymce.activeEditor.selection.getBookmark();
        // tinymce.activeEditor.formatter.apply('fonts',{value:value*100});
        // tinymce.activeEditor.selection.moveToBookmark(bm);
        //console.log(SpaltenNode);
    });
    editor.on('init',function(){
        // tinymce.activeEditor.formatter.register('fonts', {
            // selector:'p',styles: {
                // 'fonts' : '%value'+'%'
             // }
        // });
    })
    update=function(){
        // var value=this.value();
        // console.log(value);     
        // value=Number(value);
        // data.value=value;
        //if(!_.isNumber(value)||value<=0) global.message('error','错误的数值');   
    };
    showfontsdialog=function(value){
         win = editor.windowManager.open({
                title: '字体管理',
                //data: data,
                // body: [
                    // {
                        // name: 'fonts',
                        // type: 'textbox',
                        // size: 40,
                        // autofocus: true,
                        // label: '行距(倍)',
                        // onchange: update,
                        // onkeyup: update
                    // }
                // ],
                width:800,
                height:500,
                tab:[
                    {
                        name:'font_addfav',
                        title:'字体收藏',
                        html:iFonts.getFontsFavHtml()
                    },
                    {
                        name:'font_set',
                        title:'字体命名',
                        html:iFonts.getFontsSetHtml()
                    }
                    // {
                        // name:'font_help',
                        // title:'帮助',
                        // html:'test2'
                    // }
                ],
                buttons: [
                    {text: 'Ok', subtype: 'primary', onclick: function() {
                        win.close();
                    }}
                ],
                nodrag:true
        })   
        console.log(win);  
        $('#modal_tab a').click(function (e) {
          e.preventDefault();
          $(this).tab('show');
        })
        if(value) $('#modal_tab a').eq(1).tab('show');
        else $('#modal_tab a:first').tab('show');
        iFonts.render_fav_list();
        iFonts.FontsDict.each(function(model){
            model.addView('iview',require('fonts/view/font'));
            if(model.id==value) model.iview.focus();
        })

    }


});