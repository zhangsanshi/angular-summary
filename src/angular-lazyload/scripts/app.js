(function(angular) {
    angular.module('app', ['ui.router', 'lazyload'])
        .config(function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            // save references to the providers
            angular.lazy = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service,
                state: $stateProvider.state
            };

        })
        .run(function () {
            angular.lazy.state('index', {
                url: "/index",
                views: {
                    main: {
                        templateUrl: "template/index/index.html",
                        controller: 'indexCtrl'
                    }
                },
                resolve: {
                    load: function (lazyLoad) {
                        return lazyLoad.loadJS('scripts/index/index.js');
                    }
                }
            });
        });


})(angular);
