(function(module) {
    module
        .directive('formValid', ['$parse', function ($parse) {
            return {
                restrict: "A",
                transclude: true,
                require: '?^form',
                scope: {
                    validMessage: '='
                },
                template: function (ele, attrs) {
                    return '<div ng-if="validForm.$dirty" ' +
                        '<div ng-repeat="(key, value) in validItem.$error"  >' +
                        '<span>{{validMessage[key]}}</span>' +
                        '</div></div>'
                },
                link: function (scope, ele, attrs, form) {
                   scope.validForm = form;
                   scope.validItem = form[attrs.validItem];
                }
            }
        }])
        .directive('define', function () {
            return {
                require: 'ngModel',
                link: function (scope, ele, attrs, model) {
                    scope.$watch(attrs.ngModel, function (oldValue, newValue) {
                        if (model.$valid && model.$viewValue == 'define') {
                            model.$setValidity('define', false);
                        }  else {
                            model.$setValidity('define', true);
                        }
                    });

                }
            }
        })
    ;
})(angular.module('common'));