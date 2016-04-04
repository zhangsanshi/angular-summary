/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
(function(module) {
    function indexCtrl ($scope, $state, templateTemplateAuth, Auth) {
        $scope.message = "Hello";
        $scope.updateAuth = function () {
            Auth.authA = !Auth.authA;
            Auth.authB = !Auth.authB;
            Auth.authC = !Auth.authC;
        };
        $scope.reloadRoute = function () {
            $state.reload();
        };
    }
    indexCtrl.$inject = ['$scope', '$state', 'templateTemplateAuth', 'Auth'];
    module
        .controller('indexCtrl', indexCtrl)
        .service('Auth', function () {
            return {};
        });
})(angular.module('common'));

