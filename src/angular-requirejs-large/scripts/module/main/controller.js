/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
define(['./module'], function (module) {
    function mainCtrl($scope, main) {
        $scope.message = main.message;
    }
    mainCtrl.$inject = ['$scope', 'main'];
    module.controller('mainCtrl', mainCtrl);
});