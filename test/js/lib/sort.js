define(['jqueryui','board'],function(jui, b){
    //var b  = require('board');
    var arr=[];

    var _sort=$('#work').sortable({
        cursor      :   'move',
        placeholder :   'sortPlaceholder',
        revert      :   300,
        opacity     :   0.7,
        start       :   function(e){
            console.log(e);
        },
        stop      :   function() {
            var sorted = $('#work').sortable('toArray');
            arr = []; //清空临时数组
            //var _models = [];
            //_.each(sorted, function(v, i) {
            //    var m = _.find(b.c_all.models, function(m){return m.get("id") == v;});
            //    if(m){
            //        _models.push(m);
            //    }
            //});
            //b.c_all.models = _models;
            _.each(sorted,function(v,k){
                var m= _.find(b.c_all.models,function(m){ return m.get('id') == v; });
                if(m){
                    arr.push(m);
                }
            });
            b.c_all.models = arr;
        }
    });
    return {
        _sort : _sort
    }
});