/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:  angular程序主文件入口
 */

(function (angular) {

    angular.module('app', ['ui.router', 'http-3rd']);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });

})(angular);


