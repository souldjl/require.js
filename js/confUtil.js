define(function (require) {
    var Hello = require('Hello');
    var reverse = function(arr){
        var name = 'daijiulong';
        console.log(Hello.trimSpace(name));
        var arr2 = arr.reverse();
        return arr2
    };
    var max = function (arr) {
        return Math.max.apply(null,arr)
    };
    return {
        reverse:reverse,
        max:max
    }
});
