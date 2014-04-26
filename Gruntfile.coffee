###
Grunt confiugration file.
###
module.exports = (grunt) ->
    #can be prod or dev, default is 'dev'
    env = grunt.option("env") or "dev"

    #project configuration object
    grunt.initConfig
        ###
        Clean:
        build - All compiled src files goes into this temporary build folder.
        dist - The distributed files that are used by the end user, it's mainly the compact (uglified) version of the build files.
        gh_pages - The demo folder, mainly the 'docs' files and the external dependencies
        ###
        clean:
            target: ['build', 'dist' , 'gh_pages']

        coffee:
            #Compile the docs source files and put them in the build folder.
            src:
                options:
                    bare: true
                expand: true
                cwd: "src/"
                src: [ "**/*.coffee" ]
                dest: "build/src/"
                ext: ".js"
            #Compile the demo source files and put them in the builder folder
            docs_src:
                options:
                    bare: true
                expand: true
                cwd: "docs/"
                src: [ "**/*.coffee" ]
                dest: "build/docs/"
                ext: ".js"
        #Compile hbs files of the src & docs sections.
        emberTemplates:
            options:
                templateName: (sourceFile) ->
                    sourceFile.replace(/src\/templates\//, '')
                        .replace(/docs\/templates\//, '')
            'build/src/templates.js':   ["src/templates/**/*.hbs"]
            'build/docs/templates.js':  ["docs/templates/**/*.hbs"]
        ###
        Perform files concatination while preserving dependency order via the 'require' keyword.
        ###
        neuter:
            options:
                includeSourceURL: no
            "dist/ember_forms.js":  "build/src/ember_forms.js"
            "gh_pages/docs.js":      "build/docs/docs.js"

        connect:
            server:
                options:
                    port: 9000
                    hostname: '*'
                    livereload: true
                    base: 'gh_pages'

        ###
        Watch for file changes:

        - Reload grunt if config files have changed.
        - Recompile sources & demo sources.
        ###
        watch:
            configs:
                files: [ "Gruntfile.coffee" ]
                options:
                    reload: true
            src:
                files: [ "src/**/*.coffee"]
                tasks: [ "coffee:src", "neuter"]
            src_handlebars:
                files: [ "src/**/*.hbs" ]
                tasks: [ "emberTemplates", "neuter" ]
            docs_src:
                files: [ "docs/**/*.coffee"]
                tasks: [ "coffee:docs_src", "neuter"]
            docs_handlebars:
                files: [ "docs/**/*.hbs"]
                tasks: [ "emberTemplates", "neuter" ]
            copy:
                files: [ "docs/index.html", "docs/docs.css" ]
                tasks: [ "copy" ]

        ###
        Copy build/docs/assets/css into gh_pages/asset and other assets from docs
        ###
        copy:
            gh_pages:
                files: [
                    {src: ['dist/ember_forms.css'], dest: 'gh_pages/css/ember_forms.css'},
                    {src: ['docs/index.html'], dest: 'gh_pages/index.html'},
                    {src: ['docs/docs.css'], dest: 'gh_pages/docs.css'},
                    {expand: true, cwd: 'docs/img', src: ['**'], dest: 'gh_pages/img'},
                    {expand: true, flatten: false, cwd: 'bower_components/', src: ['**/*.js'], dest: 'gh_pages/lib'},
                    {expand: true, flatten: false, cwd: 'bower_components/', src: ['**/*.css'], dest: 'gh_pages/css'},
                    {expand: true, cwd: 'bower_components/font-awesome/fonts/', src: ['**'], dest: 'gh_pages/css/font-awesome/fonts'},
                    {expand: true, cwd: 'docs/assets/font/', src: ['**'], dest: 'gh_pages/css/font-awesome/fonts'}
                ]


    grunt.loadNpmTasks "grunt-contrib-clean"
    grunt.loadNpmTasks "grunt-contrib-copy"
    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-ember-templates"
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-connect"
    grunt.loadNpmTasks "grunt-neuter"

    ###
    Task for build the lib sources

    - Compile any coffee source files
    - Compile any template files
    - Perform files concats via neuter
    ###
    grunt.registerTask "build_src", [ "coffee:src", "emberTemplates", "neuter" ]

    #Build the docs sources
    grunt.registerTask "build_docs", [ "coffee:docs_src", "emberTemplates", "neuter" ]

    ###
    The default task is executed whenever no specific task is set (when running 'grunt')

    In production mode, we just build the source files of the library.
    In development mode, we need a more complicated flow:
    - build the lib sources.
    - build the docs sources
    - perform file copying
    - start the static web server (connect)
    - watch for file changes and perform task execution when they change (watch)
    ###
    if env is "dev"
        grunt.registerTask "default", [ "build_src", "build_docs", "copy", "connect", "watch"]
    else
        grunt.registerTask "default", [ "build_src"]