(function(module) {
    module
        .directive('formValid1', ['$parse', function ($parse) {
            return {
                restrict: "A",
                transclude: true,
                scope: {
                    formValidFor: '=',
                    formValidItem: '='
                },
                template: function (ele, attrs) {
                    var form = attrs.formValidFor;
                    var item = attrs.formValidItem;
                    return '<div ng-show="formValidFor.$dirty">' +
                        '<div ng-repeat="(key, value) in formValidItem.$error"  >' +
                        '<span>{{validMessage[key]}}</span>' +
                        '</div></div>'
                },
                link: function (scope, ele, attr) {
                    scope.validMessage = $parse(attr.validMessage)();
                }
            }
        }])
    ;
})(angular.module('common'));