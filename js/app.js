require.config({
    paths:{
        "jquery": [
            // 可以配置多个路径，会加载第一个路径下的文件，失败后，会加载下一个文件
            "https://cdn.bootcss.com/jquery/1.11.1-rc1/jquery"
        ],
        "underscore": "../lib/underscore"
    }
});
require(['confUtil','jquery'],function(confUtil,$){
    console.log($)
    var infos = ['name','age','hobby'];
    console.log(confUtil.reverse(infos));
    var ages = [1,2,3,5,10];

    console.log(confUtil.max(ages))
});



