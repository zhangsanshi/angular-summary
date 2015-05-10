/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:  angular启动文件
 */

    angular.module("app", [
        'ui.router',
        "common"
    ])
    .config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {

        //默认页
        $urlRouterProvider.otherwise("/index");

        // 路由配置
        for (var key in routers) {
            $stateProvider.state(key, routers[key]);
        }

    }])
        .config(function () {

        })
        .config(function () {

        })
        .config(function () {

        })
    .run(['$rootScope', function ($rootScope) {
        //类似于main方法
    }])
    ;

angular.element(document).ready(function () {
    angular.bootstrap(document, ["app"]);

});
