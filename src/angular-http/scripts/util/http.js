/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:  改写http以符合日常使用,
 *                  操作有拦截http请求，
 *                  添加http请求头，
 *                  重写post请求参数样式
 */
(function (angular) {
    angular.module('http-3rd', [])
        .factory('notification', function () {
            return {
                alert: function (msg) {
                    //在这里可以自定义样式
                    alert(msg);
                },
                confirm: function (msg) {
                    //在这里可以自定义样式
                    return confirm(msg);
                }
            }
        })
        /**
         * 拦截http请求
         */
        .factory('httpInterceptor', ["$q", 'notification', function ($q, notification) {
            return {
                //请求开始
                'request': function (config) {
                    //在这里可以设置请求数据时的蒙版
                    return config;
                },

                //响应
                'response': function (response) {
                    //这里的情况是请求成功但是请求内容有误的情况，这种情况默认是失败
                    if (response.data.success === false) {
                        notification.alert(response.data.errMsg);
                        return $q.reject(response);
                    }
                    return response;
                },

                //响应失败
                'responseError': function (rejection) {

                    //服务器响应失败时，通过状态码，判断是否登录超时
                    if (rejection.status == 380) {
                        if (notification.confirm("登录超时，是否重新登录?")) {
                            window.location = "./login";
                        }
                    } else {
                        notification.alert("网络出错");
                    }
                    return $q.reject();
                },

                //请求失败
                'requestError': function (rejection) {
                    notification.alert("客户端请求出错");
                    return $q.reject(rejection);
                }
            }
        }])
        .config(['$httpProvider', function ($httpProvider) {

            /**
             * angular 默认的 http post请求设置需要改写, 不符合常用的要求
             * 需要修改data以及 Content-Type
             * */

                //更改post,put默认Content-Type
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


            //添加HTTP头部，说明是ajax请求(like jQuery)
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


            /**
             *
             *  param 方法
             *  用于format post请求的data， angular默认的是 {a:1, b:1}
             *  format 后为a=1&b=1
             *
             * */
            var param = function (obj) {
                var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

                for (name in obj) {
                    value = obj[name];

                    if (value instanceof Array) {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value !== undefined && value !== null)
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }

                return query.length ? query.substr(0, query.length - 1) : query;
            };


            // Override $http service's default transformRequest
            $httpProvider.defaults.transformRequest = [function (data) {
                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }];

            $httpProvider.interceptors.push('httpInterceptor');
        }]);
})(angular);
