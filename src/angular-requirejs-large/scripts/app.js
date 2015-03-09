/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:  angular启动文件
 */
define([
    'angular',
    'uiRouter',
    'module/index'
], function (angular) {
    return angular.module("app", [
        "ui.router",
        "modules"
    ])
    .config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {

        //默认页
        $urlRouterProvider.otherwise("/index");

    }])
    .run(['$rootScope', function ($rootScope) {
        //类似于main方法
    }])
    ;

});
