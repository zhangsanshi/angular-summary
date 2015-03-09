/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
/**
 * auth:         ZL
 * createTime:   2015/2/27
 * description:  路由定义页面
 */
define([], function () {
    return {
        index: {
            url: "/index",
            views: {
                main: {
                    templateUrl: "template/index/index.html",
                    controller: "indexCtrl"
                }
            }
        }

    };
});