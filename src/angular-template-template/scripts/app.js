/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:  angular启动文件
 */

    angular.module("app", [
        'ui.router',
        "common",
        'templates-template',
        'templateTpl'
    ])
    .config(["$urlRouterProvider", "$stateProvider",
        function ($urlRouterProvider, $stateProvider) {

        //默认页
        $urlRouterProvider.otherwise("/index");

        var routers = {
            index: {
                url: "/index",
                views: {
                    main: {
                        template: '<div template-template="angular-template-template/template/index/index.html"></div>',
                        controller: "indexCtrl"
                    }
                },
                resolve: {
                    authCheck: ['templateTemplateAuth', 'Auth', function (templateTemplateAuth, Auth) {
                        return angular.extend(templateTemplateAuth, {
                            Auth: Auth
                        });
                    }]
                }
            }

        };
        // 路由配置
        for (var key in routers) {
            $stateProvider.state(key, routers[key]);
        }

    }])
    .run(['$rootScope', function ($rootScope) {
        //类似于main方法
    }])
    ;

angular.element(document).ready(function () {
    angular.bootstrap(document, ["app"]);

});
