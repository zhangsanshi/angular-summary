/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:  requirejs配置入口文件
 */
require.config({
    baseUrl: "scripts",
    paths: {
        angular: "../../../bower_components/angular/angular",
        uiRouter: "../../../bower_components/angular-ui-router/release/angular-ui-router"
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'uiRouter': {
            'deps': ['angular']
        }
    },
    priority: [
        "angular"
    ]
});

require([
    "angular",
    "app"
], function (
    angular,
    app
) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [app.name]);

    });
});