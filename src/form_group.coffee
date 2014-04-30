###
Form Group

Wraps labels and controls for optimum spacing and validation styles.
Currently must be a direct descendant of a form view

Syntax:
{{em-form-group
    //The label of the control
    label="Some Label"
    //validation state
    status="none|error|warning|success"
}}
###
Ember.Forms.FormGroupComponent = Ember.Component.extend
    tagName: 'div'
    layoutName: 'form_group'
    classNames: ['form-group']
    classNameBindings: ['hasSuccess', 'hasWarning', 'hasError', 'hasHelp:has-error']
    model: Ember.computed.alias 'parentView.model'
    inline: Ember.computed.alias('parentView.isInline')
    hasError: Ember.Forms.utils.createBoundSwitchAccessor 'error', 'status', 'none'
    hasWarning: Ember.Forms.utils.createBoundSwitchAccessor 'warning', 'status', 'none'
    hasSuccess: Ember.Forms.utils.createBoundSwitchAccessor 'success', 'status', 'none'
    status: 'none'
    # has label?
    label: no

    init: ->
        @_super()
        @set 'controlViewName', "control-view-name-#{@get('elementId')}"
        helpViewName = "help-view-name-#{@get('elementId')}"
        @set 'helpViewName', helpViewName
        @set 'labelViewName', "label-view-name-#{@get('elementId')}"
        # have some help text such an error message?
        Ember.Binding.from("#{helpViewName}.hasHelp").to('hasHelp').connect(this)

    labelText: (->
        @get('label') || @get('property')
    ).property('label')

    # read-only
    hasLabel: (() ->
        @get('label') isnt no
    ).property('label').readOnly()

    focusOut: ->
        @set('canShowErrors', true)
        @set 'status', 'success' if not @get('hasHelp')

Ember.Handlebars.helper('em-form-group', Ember.Forms.FormGroupComponent)
