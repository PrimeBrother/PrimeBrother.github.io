(function (angular) {
    //1.创建模块.
    var app = angular.module("moviecat.details", ["ngRoute", "heima"]);

    //2.定义路由.
    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/details/:id", {
            templateUrl: "./details/details.html",
            controller: "detailsCtrl"
        })
    }]);

    app.controller("detailsCtrl", ["$scope", "$routeParams", "hmJsonp", function ($scope, $routeParams, hmJsonp) {

        $scope.isShow = true;
        //1.拿到传递过来的参数.
        var id = $routeParams.id;
        //2. 发送请求.
        hmJsonp.jsonp({
            url: "http://api.douban.com/v2/movie/subject/" + id,
            params: {},
            callback: function (data) {
                $scope.movie = data;
                $scope.isShow = false;
                $scope.$apply();
            }
        });
    }]);


})(angular);