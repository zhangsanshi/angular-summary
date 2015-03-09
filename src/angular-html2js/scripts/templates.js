(function (angular) {
angular.module('templates-main', ['angular-html2js/template/main.html']);

angular.module("angular-html2js/template/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angular-html2js/template/main.html",
    "<div><div></div><div></div><div></div><div></div></div>");
}]);
})(angular);
