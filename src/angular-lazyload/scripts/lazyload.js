//声明一个模块
(function (){

    angular.module('lazyload', [])
        .factory("lazyLoad", function ($q) {
            //加载队列记录加载历史，防止多次加载
            var quene = [];

            //判断是否已经加载
            function isLoad (url) {
                return quene.indexOf(url) === -1;
            }

            function loading(type, attrs) {
                //创建元素并注入属性
                var ele ,key;
                ele = document.createElement(type);
                if (attrs) {
                    for (key in attrs) {
                        ele.setAttribute(key, attrs[key]);
                    }
                }

                //添加到页面并使浏览器加载
                document.head.appendChild(ele);
                return ele;
            }
            function loadCSS (type, attrs) {
                var deferred = $q.defer(),
                    url = attrs.href;
                if (url && isLoad(url)) {
                    loading(type, attrs);
                    //放入加载队列里
                    quene.push(url);
                }
                //TODO
                //css是否加载完成check，网上有解决方案，感觉这个不用太考虑
                return deferred.resolve();
            }
            function loadJS(type, attrs, callback) {

                var deferred = $q.defer(),
                    url = attrs.src,
                    ele;


                //判断是否加载过了该url
                if (!url || !isLoad(url)) {
                    if (callback  && angular.isFunction(callback)) {
                        callback();
                    }
                    return deferred.resolve();
                }

                //开始加载时间
                var start = new Date().getTime();

                ele = loading(type, attrs);

                //判断加载状态，加载完成的时候执行相应的操作
                ele.onload = ele.onreadystatechange = function () {

                    if(!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {

                        //结束加载时间
                        console.log("lazyLoad " + url + " time: " + (new Date() - start) + "ms");

                        //放入加载队列里
                        quene.push(url);

                        //执行callback
                        if (angular.isFunction(callback)) {
                            callback();
                        }

                        //释放内存
                        ele.onload = ele.onreadystatechange = null;
                        deferred.resolve();
                    }


                };

                return deferred.promise;
            }
            //暴露方法，供外界调用
            return {
                /**
                 * 懒加载js
                 * @param url       js地址
                 * @param attrs     js属性
                 * @param callback  回调函数
                 * @returns {*}
                 */
                loadJS: function (url, attrs, callback) {
                    var defaultAttr = {
                        "src": url
                    };
                    if (angular.isFunction(attrs)) {
                        callback = attrs;
                    } else if (angular.isObject(attrs)){
                        angular.extend(defaultAttr, attrs);
                    }
                    return loadJS("script", defaultAttr, callback);
                },
                /**
                 *
                 * @param url     css地址
                 * @param attrs   css属性
                 * @returns {*}
                 */
                loadCSS: function (url, attrs) {
                    var defaultAttr = {
                        "rel": "stylesheet",
                        "href": url
                    };
                    if (angular.isObject(attrs)){
                        angular.extend(defaultAttr, attrs);
                    }
                    return loadCSS("link", defaultAttr);
                }
            };
        });
})();