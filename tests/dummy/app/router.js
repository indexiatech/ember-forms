import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map( function() {
    this.route( 'overview' );
    this.route( 'getstarted' );
    this.route( 'quickexample' );
    this.route( 'form' );

    this.resource( 'controls', function() {
        this.route( 'custom-submit' );
        this.route( 'input' );
        this.route( 'text' );
        this.route( 'checkbox' );
        this.route( 'select' );
        this.route( 'html5' );
        this.route( 'wrapped-input' );
    });
});

export default Router;
