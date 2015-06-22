exports.config =
    modules:
        wrapper: false
        definition: false
    files:
        javascripts:
            joinTo:
                'js/app.js': /^(bower_components|app)/

            order:
                before: ['bower_components/jquery/dist/jquery.js']

            pluginHelpers: 'js/app.js'

        stylesheets:
            joinTo:
                'css/app.css': /^(app)/
                'css/vendor.css': /^(bower_components)/

        templates:
            joinTo: 'js/app.js'

    plugins:
       jadePages:
           pattern: /^app\/.*\.jade$/
           destination: (path) ->
               path.replace /^app\/(.*)\.jade$/, "$1.html"
           jade:
               doctype: "html"
           htmlmin: false

        stylus:
            plugins: ['jeet','rupture','stylus-type-utils']

        autoReload:
            enabled:
                js: on
                css: on
                assets: off

        imageoptimizer:
            path: 'images'
            smushit: no

    conventions:
        assets: /(assets\/assets|font)/
