`import {Component, Handlebars} from 'ember'`
`import Utils from '../utils/utils'`


###
Form View

A component for rendering a form element.

Syntax:
{{em-form
    //The layout of the form
    form_layout="form|inline|horizontal"
    //The model bound to the form if any
    model="some_model_instance"
    //The action to be invoked on the controller when a form is submitted.
    action="some_action"
    //if true a submit button will be rendered
    submit_button=true|false
    //if true validation icons will be rendered
    v_icons=true|false
}}
###
FormComponent = Component.extend
    tagName: 'form'
    layoutName: 'components/form'
    classNameBindings: ['form_layout_class']
    attributeBindings: ['role']
    role: 'form'
    form_layout_class: (->
        switch @get('form_layout')
            when 'horizontal', 'inline' then "form-#{@get('form_layout')}"
            else 'form'
    ).property('form_layout')
    isDefaultLayout: Utils.createBoundSwitchAccessor 'form', 'form_layout', 'form'
    isInline: Utils.createBoundSwitchAccessor 'inline', 'form_layout', 'form'
    isHorizontal: Utils.createBoundSwitchAccessor 'horizontal', 'form_layout', 'form'

    ##Exepcted component hash props##
    #The name of the action to perform on the controller when the form is successfully submitted
    action: 'submit'
    #Form model
    model: undefined
    #Form layout type
    form_layout: 'form'
    #if true a submit button is rendered
    submit_button: true
    #if true validation icons per group will be visible
    v_icons: true

    ###
    Form submit

    Optionally execute model validations and perform a form submission.
    ###
    submit: (e) ->
        e.preventDefault() if e
        #if there is no validate method on the model, then we just perform the action
        if Ember.isNone @get('model.validate')
            @get('targetObject').send(@get('action'))
        else
            promise = this.get('model').validate()

            promise.then(=>
                @get('targetObject').send @get('action') if @get('model.isValid')
            )

Handlebars.helper('em-form', FormComponent)

`export default FormComponent`