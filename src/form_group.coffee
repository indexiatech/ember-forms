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
    layoutName: 'form-group'
    classNameBindings: ['formGroup', 'hasSuccess', 'hasWarning', 'hasError', 'v_icons:has-feedback']
    attributeBindings: ['disabled']
    model: Ember.computed.alias 'parentView.model'
    inline: Ember.computed.alias('parentView.isInline')
    hasSuccess: (-> @get('status') is 'success').property('status')
    hasWarning: (-> @get('status') is 'warning').property('status')
    hasError: (-> @get('status') is 'error').property('status')
    #add form-group class?
    formGroup: true
    # has label?
    label: no
    #yield inside label?
    yieldInsideLabel: no
    #should render icons?
    v_icons: Ember.computed.alias 'parentView.v_icons'
    v_success_icon: 'fa fa-check'
    v_warn_icon: 'fa fa-exclamation-triangle'
    v_error_icon: 'fa fa-times'

    v_icon: (->
        switch @get('status')
            when 'success' then @get('v_success_icon')
            when 'warning', 'warn' then @get('v_warn_icon')
            when 'error' then @get('v_error_icon')
            else null
    ).property('status')

    init: ->
        @_super()
        @set 'controlViewName', "control-view-name-#{@get('elementId')}"
        helpViewName = "help-view-name-#{@get('elementId')}"
        @set 'helpViewName', helpViewName
        @set 'labelViewName', "label-view-name-#{@get('elementId')}"
        # have some help text such an error message?
        Ember.Binding.from("#{helpViewName}.hasHelp").to('hasHelp').connect(this)
        Ember.Binding.from("#{helpViewName}.hasError").to('helpHasErrors').connect(this)

    hasErrorChanged: (->
        if @get('helpHasErrors') then @set('status', 'error') else @set('status', 'success' )
    ).observes('helpHasErrors')

    labelText: (->
        @get('label') || Ember.Forms.utils.namelize @get('property')
    ).property('label')

    # read-only
    hasLabel: (() ->
        @get('label') isnt no
    ).property('label').readOnly()

    focusOut: ->
        @set('canShowErrors', true)
        @set 'status', 'success' if not @get('hasError')

Ember.Handlebars.helper('em-form-group', Ember.Forms.FormGroupComponent)
