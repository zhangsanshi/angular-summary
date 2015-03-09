/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
define([
    "angular"
    ,"./router"
    ,'uiRouter'
],function (angular, config) {

    return angular
        .module("module.main", ['ui.router'])
        .config(['$stateProvider', function ($stateProvider) {
            for (var key in config) {
                $stateProvider.state(key, config[key]);
            }
        }]);
});
