# Dependencies
require 'dist/ember_forms'

# Compiled Handlebars templates
require 'build/docs/templates'

window.App = Ember.Application.create
    LOG_TRANSITIONS: true

require 'build/docs/code_helper'
require 'build/docs/views/mixins'
require 'build/docs/views/ember_forms'


App.Person = DS.Model.extend(Ember.Validations.Mixin,
    firstName: DS.attr('string')
    lastName:  DS.attr('string')
)

App.Person.reopen
    validations:
        firstName:
            presence: true
            length: { minimum: 5 }
        lastName:
            presence: true
            length: { minimum: 10 }

Em.Route.reopen
    renderTemplate: ->
        @_super()
        Em.run.next @, ->
            $('pre code').each((i, e) ->
                hljs.highlightBlock(e)
            )

App.Router.map ->
    @route 'overview'
    @route 'getstarted'
    @route 'quickexample'
    @resource 'controls', ->
        @route 'text'

App.IndexRoute = Em.Route.extend
    beforeModel: -> @transitionTo('overview')

App.OverviewRoute = Em.Route.extend
    model: ->
        model = @get('store').createRecord 'person'
        model

App.QuickexampleRoute = App.OverviewRoute.extend()

App.QuickexampleController = Em.Controller.extend
    actions:
        submit: ->
            alert "Submitted!"

App.OverviewController = App.QuickexampleController.extend()

App.SidebarController = Em.ArrayController.extend
    content:
        [
            {route: 'overview', text: 'Overview', items: []}
            {route: 'getstarted', text: 'Getting started', items: []}
            {route: 'quickexample', text: '5 Minutes Example', items: []}
#            {route: 'controls', text: 'Controls', items:[
#                    {route: 'controls.text', text: 'Text', fiddle: 'http://jsfiddle.net/some_fiddle/'}
#                ]
#            }
        ]

