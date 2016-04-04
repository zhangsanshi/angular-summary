module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js: {
            //对angular模板进行js化，并设置头尾
            options: {
                fileHeaderString: "(function (angular) {",
                fileFooterString: "})(angular);",
                htmlmin: {
                    collapseWhitespace: true
                }
            },
            main: {
                src: ['src/angular-html2js/template/**/**.html'],
                dest: 'src/angular-html2js/scripts/templates.js'
            },
            template: {
                src: ['src/angular-template-template/template/**/**.html'],
                dest: 'src/angular-template-template/scripts/templates.js'
            }
        },
        sprite: {
            //图片压缩合并，得到的结果会放在build中
            login: {
                src: 'src/image-min/themes/images/login/*.png',
                engine: "phantomjssmith",
                dest: 'build/themes/images/min/login.png',
                destCss: 'build/themes/css/icons.css',
                cssOpts: {
                    cssSelector: function (item) {
                        var name = item.name;
                        return ".icon-" + name;
                    }
                }
            }
        }
    });
    // angular模板转换成js
    grunt.loadNpmTasks('grunt-html2js');
    // html压缩
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // 图片合并
    grunt.loadNpmTasks('grunt-spritesmith');


    grunt.registerTask('js', ['html2js']);
};