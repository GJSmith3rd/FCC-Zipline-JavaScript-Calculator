module.exports = function () {

        var config = {

                //JavaScript - all js to vet
                alljs: [
                        'app.js',
                        './source/srcscript.js', 'gulp.config.js', 'gulpfile.js'
                ],

                browserReloadDelay: 3000,

                //css file location
                css: './styles.css',

                //index.html
                index: './index.html',

                //script.js
                js: './script.js',

                //config.less
                less: './source/srcstyles.less',

                //node settings
                nodeDefaultPort: 7203,
                nodeServer: './app.js',

                //root directory
                root: './',

                //source files
                srcjs: './source/srcscript.js',

        };

        return config;
};
