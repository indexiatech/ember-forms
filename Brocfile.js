/* jshint node: true */
/* global require, module */
var mergeTrees = require( 'broccoli-merge-trees' ),
    pickFiles  = require( 'broccoli-static-compiler' );
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var isProduction = ( process.env.EMBER_ENV || 'development' ) === 'production';

var app = new EmberAddon();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
// Development dependencies
app.import( 'bower_components/bootstrap/dist/css/bootstrap-theme.css.map' );
app.import( 'bower_components/bootstrap/dist/css/bootstrap.css');
app.import( 'bower_components/fontawesome/css/font-awesome.min.css');
app.import( 'bower_components/highlightjs/highlight.pack.js');
app.import( 'bower_components/highlightjs/styles/tomorrow.css');

var extraAssets = pickFiles( 'bower_components/fontawesome/fonts', {
    srcDir  : '/',
    files   : [ 'fontawesome-webfont.woff' ],
    destDir : '/fonts'
})

module.exports = mergeTrees([app.toTree(), extraAssets])
