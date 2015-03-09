/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
define([
    'common'
], function (module) {
    function indexCtrl ($scope) {
        $scope.message = "Hello";
    }
    indexCtrl.$inject = ['$scope'];
    module
        .controller('indexCtrl', indexCtrl);
});