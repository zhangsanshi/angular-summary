/**
 * auth:         ZL
 * createTime:   2015/11/23
 * description:
 */
(function(module) {
    function indexCtrl ($scope, $timeout, PageSize, Filter, IF) {
        function list () {
            //模拟异步请求
            $timeout(function () {
                var result = [],
                    form = $scope.form,
                    base = (form.currentPage - 1) * form.pageSize;
                if (!form.filter) {
                    form.filter = 1;
                }
                for (var i = 0; i < form.pageSize; i++) {
                    result.push({
                        id: (i + base) * form.filter,
                        name: (i + base) * form.filter
                    });
                }
                $scope.list = result;
                $scope.form.totalItems = 1000;
            }, 200);
            //实际上list请求
//            IF.list(angular.copy($scope.form)).success(function (json) {
//                if (json.success) {
//                    $scope.list = json.data;
//                } else {
//                    $scope.list = [];
//                    //弹出错误提示
//                }
//            });
        }
        $scope.action = {
            pageChanged: function (isRest) {
                //改变筛选条件，则应该重置页数
                if (isRest) {
                    $scope.form.currentPage = 1;
                }
                list();
            }
        };
        //初始化操作
        (function init() {
            $scope.PageSize = PageSize;
            $scope.Filter = Filter;
            //把需要发送给后端的数据放置在同一个对象内，
            //在发送请求的时候，会很方便，只需要发送此对象
            //而且解决了scope问题,在页面产生多个scope的时候，
            //使用对象会避免绝大多数问题，父子scope是通过原型链来查找属性的，
            //如果值绑定，很容易造成属性绑在子scope上，而对象则会去scope层级查找
            $scope.form = {
                currentPage: 1,
                pageSize: 10
            };
            $scope.list = [];
            list();
        })();
    }
    indexCtrl.$inject = ['$scope', '$timeout', 'PageSize', 'Filter', 'IF'];
    module
        .controller('indexCtrl', indexCtrl)
        .value("PageSize", {
            10: 10,
            25: 25,
            50: 50,
            100: 100
        })
        .value("Filter", {
            3: "被3整除",
            2: "被2整除",
            5: "被5整除"
        })
        //远程接口
        .service('IF', ['$http', function ($http) {
            return {
                list: function (params) {
                    return $http.get('xxx', {
                        params: params
                    });
                },
                add: function (data) {
                    return $http.post("xxx", data);
                }
            };
        }])
    ;
})(angular.module('common'));

