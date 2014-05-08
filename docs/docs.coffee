# Dependencies
require 'dist/ember_forms'

# Compiled Handlebars templates
require 'build/docs/templates'

window.App = Ember.Application.create
    LOG_TRANSITIONS: true

require 'build/docs/code_helper'
require 'build/docs/views/mixins'
require 'build/docs/views/ember_forms'


App.SimplePerson = DS.Model.extend(Ember.Validations.Mixin,
    name: DS.attr('string')
    password:  DS.attr('string')
    comment: DS.attr('string')
    active: DS.attr('boolean')
    gender: DS.attr('string')
    nameHasValue: (->
        not @get('name')?.length
    ).property('name')

    asjson: (->
        JSON.stringify @toJSON()
    ).property('name', 'password', 'comment', 'active', 'gender')
)

App.SimplePerson.reopen
    validations:
        name:
            presence: true
            length: { minimum: 5 }
        password:
            presence: true
            length: { minimum: 6 }
        comment:
            presence: true
        gender:
            presence:true

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
        @route 'html5'
        @route 'text'

App.IndexRoute = Em.Route.extend
    beforeModel: -> @transitionTo('overview')

App.OverviewRoute = Em.Route.extend
    model: ->
        model = @get('store').createRecord 'simple_person'
        model

App.QuickexampleRoute = App.OverviewRoute.extend()

App.FormSampleController = Em.Controller.extend
    layout: 'default'
    genderOptions: [
        {id: 'M', name: 'Male'}
        {id: 'F', name: 'Female'}
        {id: 'O', name: 'Other'}
    ]

    actions:
        submit: ->
            alert "Submitted!"

        layout: (t) ->
            @set 'layout', t

App.SidebarController = Em.ArrayController.extend
    content:
        [
            {route: 'overview', text: 'Overview', items: []}
            {route: 'getstarted', text: 'Getting started', items: []}
            {route: 'quickexample', text: '5 Minutes Example', items: []}
            {route: 'controls', text: 'Controls', items:[
                    {route: 'controls.html5', text: 'Html5'}
#                    {route: 'controls.text', text: 'Text'}
                ]
            }
        ]