/* jshint node: true */
'use strict';
var mergeTrees = require( 'broccoli-merge-trees' ),
    pickFiles  = require( 'broccoli-static-compiler' );

module.exports = {
    name: 'ember-idx-forms',

    included: function( app ) {
        this._super.included( app );
        var isDummy = app.project.pkg.name === 'ember-idx-forms'

        if (isDummy) {
            app.import( 'bower_components/bootstrap/dist/css/bootstrap-theme.css.map' );

            app.import({
                development : 'bower_components/bootstrap/dist/css/bootstrap.css'
            });
            app.import({
                development : 'bower_components/fontawesome/css/font-awesome.min.css'
            });
            app.import({
                development : 'bower_components/highlightjs/highlight.pack.js'
            });
            app.import({
                development : 'bower_components/highlightjs/styles/tomorrow.css'
            });
        }
    },

    postprocessTree: function( type, tree ) {
        var isDummy = (process.env.npm_package_name === 'ember-idx-forms');

        if (isDummy) {
            return mergeTrees([ tree,
                pickFiles( 'bower_components/fontawesome/fonts', {
                    srcDir  : '/',
                    files   : [ 'fontawesome-webfont.woff' ],
                    destDir : '/fonts'
                })
            ]);
        } else {
            return tree;
        }
    },
};
