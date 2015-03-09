/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
define([], function () {
    return {
        "main": {
            url: '/main',
            views: {
                main: {
                    templateUrl: "template/main/index.html",
                    controller: "mainCtrl"
                }
            }
        }
    }
});