define(['jqueryui','board'],function(jui, b){
    var _sort=$('#work').sortable({
        cursor      :   'move',
        placeholder :   'sortPlaceholder',
        revert      :   300,
        opacity     :   0.7,
        stop      :   function() {
            var sorted = $('#work').sortable('toArray');
            b.c_all.models= _.sortBy(b.c_all.models,function(model){
                return sorted.indexOf(String(model.id));//数字转化为字符串进行index查找
            });
            console.log(sorted, b.c_all.models);
        }
    });
    return {
        _sort : _sort
    }
});