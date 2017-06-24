
(function (angular) {
    //1. 创建模块.
    var moviecat_in_theaters = angular.module("moviecat.in_theaters", ["heima", "ngRoute"]);
    //2. 配置和正在上映相关的路由.
    moviecat_in_theaters.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/in_theaters/:page?", {
            templateUrl: "./in_theaters/in_theaters.html",
            controller: "in_theatersCtrl"
        });
    }]);


    moviecat_in_theaters.controller("in_theatersCtrl", [
        "$scope", //数据模型
        "$http",//异步请求 用不到
        "$routeParams",//取路由过来的参数
        "$window",//与原生window一样
        "$route",
        "hmJsonp",
        function ($scope, $http, $routeParams, $window, $route, hmJsonp) {
            $scope.isShow = true;

            //1.拿到传递过来的页码.
            $scope.pageIndex = ($routeParams.page || "1") - 0;
            //2. 定义每一页的电影的数量.
            $scope.pageSize = 10;
            // 1     0  (pageIndex - 1) * 10
            // 2    10
            // 3    20
            //3.发起请求
            hmJsonp.jsonp({
                url: "http://api.douban.com/v2/movie/in_theaters",
                params: {
                    count: $scope.pageSize,
                    start: ($scope.pageIndex - 1) * $scope.pageSize
                },
                callback: function (data) {
                    $scope.movies = data;
                    $scope.pageCount = $window.Math.ceil(data.total / $scope.pageSize);
                    $scope.isShow = false;
                    //告诉视图,$scope中的数据更新了.
                    //你赶紧刷新你的dom
                    $scope.$apply();
                }
            });

            //定义getPage方法.
            $scope.getPage = function (pageIndex) {
                if (pageIndex < 1 || pageIndex > $scope.pageCount) return;
                //修改地址栏的参数. 将page改为pageIndex
                $route.updateParams({
                    page: pageIndex
                });
            }

        }]);

})(angular);