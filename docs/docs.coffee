# Dependencies
require 'dist/ember-forms'

# Compiled Handlebars templates
require 'build/docs/templates'

window.App = Ember.Application.create
    LOG_TRANSITIONS: true

require 'build/docs/views/mixins'
require 'build/docs/views/ember_forms'

App.Router.map ->
    @route 'overview'
    @route 'getstarted'
    @resource 'controls', ->
        @route 'text'

App.IndexRoute = Ember.Route.extend
    beforeModel: -> @transitionTo('overview')

App.SidebarController = Ember.ArrayController.extend
    content:
        [
            {route: 'overview', text: 'Overview', items: []}
            {route: 'getstarted', text: 'Getting started', items: []}
            {route: 'controls', text: 'Controls', items:[
                    {route: 'controls.text', text: 'Text', fiddle: 'http://jsfiddle.net/NfPcH/25/'}
                ]
            }
        ]
