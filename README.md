
##### require.js中很重要的东西
* define
 >  定义模快 `define(name,['依赖1','依赖2'，'依赖3']，function(){}) `第一个参数可选,一般不设置，默认为文件名，
第二个参数 是加载依赖，第三个参数是对应的依赖想
* require
> ` require(['jquery'],function($){
     // dosomething $('...')
  })`
---
##### require.config
 >require.paths  可以在这儿 配置每个包的加载路径，在引用的时候可以直接写包的名字
 > require.shim  配置不符合AMD规范的js 文件
 配置配置项后，并不会直接加载,require 后才会加载

```js
require.config({
    paths:{
        "jquery": [
            // 可以配置多个路径，会加载第一个路径下的文件，失败后，会加载下一个文件
            "https://cdn.bootcss.com/jquery/1.11.1-rc1/jquery",
            "./lib/jquery.min"
        ],
        "underscore": "../lib/underscore"
    }
});
```

- 定义模块
```js
 define(function (require) {
    var Hello = require('Hello')
     var name = Hello.trimSpace('zhangsan');
    console.log(name);
 });
```


- 主模块
```js
require(['Hello','confUtil','jquery','underscore'],function (Hello,confUtil,$,_) {
    var name = Hello.trimSpace('zhangsan');
    var animals = ['dog','pig'];
    console.log(name);
    console.log($)
    console.log(_)
    console.log(confUtil.reverse(animals));
});
```

