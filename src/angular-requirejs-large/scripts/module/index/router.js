/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
define([], function () {
    return {
        "index": {
            url: '/index',
            views: {
                main: {
                    templateUrl: "template/index/index.html",
                    controller: "indexCtrl"
                }
            }
        }
    }
});