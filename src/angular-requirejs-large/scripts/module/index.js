/**
 * auth:         ZL
 * createTime:   2015/3/9
 * description:
 */
define([
    "./index/index"
    ,"./main/index"
], function () {
    return angular.module("modules", ["module.index", "module.main"]);
});