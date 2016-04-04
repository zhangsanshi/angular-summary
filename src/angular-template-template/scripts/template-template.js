angular.module('templateTpl', [])
    .service('templateTemplateAuth', function () {
    return {};
})
    .config(function () {
        template.config({

        });
    })
    .directive('templateTemplate', ['$templateCache', 'templateTemplateAuth',
        function ($templateCache, templateTemplateAuth) {
            return {
                template: function (elem, attr) {
                    console.log(templateTemplateAuth);
                    return template.render($templateCache.get(attr.templateTemplate))(templateTemplateAuth);
                }
            };
        }])