/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
define(['./module'], function (module) {
    function indexCtrl($scope, index) {
        $scope.message = index.message;
    }
    indexCtrl.$inject = ['$scope', 'index'];
    module.controller('indexCtrl', indexCtrl);
});