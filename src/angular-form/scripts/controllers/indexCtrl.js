/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
(function(module) {
    function indexCtrl ($scope) {
        $scope.message = "Hello";
        $scope.inputname = {
            name: "username"
        };
    }

    indexCtrl.$inject = ['$scope'];
    module
        .controller('indexCtrl', indexCtrl);
})(angular.module('common'));

