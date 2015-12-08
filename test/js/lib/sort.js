define(['jqueryui'],function(){
    $('#work').sortable({
        cursor      :   'move',
        placeholder :   'sortPlaceholder',
        revert      :   300,
        opacity     :   0.7,
        stop        :   function(){
            var sorted = $('#work').sortable('serialize',{attribure:'id'});
        }
    });
});