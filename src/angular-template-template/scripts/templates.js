(function (angular) {
angular.module('templates-template', ['angular-template-template/template/index/index.html', 'angular-template-template/template/main.html']);

angular.module("angular-template-template/template/index/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angular-template-template/template/index/index.html",
    "<div><%if (Auth.authA) {%><div>authA</div><%}%><%if (Auth.authB) {%><div>authB</div><%}%><%if (Auth.authC) {%><div>authC</div><%}%><button ng-click=\"updateAuth()\">更新Auth</button> <button ng-click=\"reloadRoute()\">重新加载路由</button></div>");
}]);

angular.module("angular-template-template/template/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angular-template-template/template/main.html",
    "<div><%if (Auth.authA) {%><div>authA</div><%}%><%if (Auth.authB) {%><div>authB</div><%}%><%if (Auth.authC) {%><div>authC</div><%}%><button ng-click=\"updateAuth()\">更新Auth</button> <button ng-click=\"reloadRoute()\">重新加载路由</button></div>");
}]);
})(angular);
