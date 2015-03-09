/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
(function (angular) {
    angular.controller('indexCtrl', function ($scope) {
        $scope.message = 'index';
    });
    angular.state('main', {
        url: "/main",
        views: {
            main: {
                templateUrl: "template/main/index.html",
                controller: 'mainCtrl'
            }
        },
        resolve: {
            load: function (lazyLoad) {
                return lazyLoad.loadJS('scripts/main/main.js');
            }
        }
    });
})(angular.lazy);