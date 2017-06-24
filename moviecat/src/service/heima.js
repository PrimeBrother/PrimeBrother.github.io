(function(angular){
    var app = angular.module("heima",[]);
    //$window
    app.service("hmJsonp",["$window",function($window){
        this.jsonp = function(opts){
            /*  
            opts.url
            opts.params:{}
            callback:fn

            */
            //1.拼接url
            var url = opts.url + "?";
            for(var key in opts.params){
                url += (key+"="+opts.params[key]+"&");
            }
            //2.生成1个随机的函数名称.
            var callbackName = "jsonp_" + $window.Math.random().toString().slice(2);
            // 将回调函数保存起来.
            $window[callbackName] = opts.callback;
            //3.再拼接
            url += "callback="+callbackName;
            //4.创建script标签.
            var script = $window.document.createElement("script");
            script.src = url;

            //5.
            $window.document.body.appendChild(script);



        }
    }]);


})(angular);