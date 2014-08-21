`import {Component} from 'ember'`
`import InFormMixin from '../mixins/in_form'`
`import HasPropertyMixin from '../mixins/has_property'`
`import HasPropertyValidationMixin from '../mixins/has_property_validation'`

###
Form Group

Wraps labels, controls and help message for optimum spacing and validation styles.
A wrapper for a single input with its assistances views such as label, help message.

A form group can yield the control's view after or within a label, this is dependent on the control
    required layout and is defined byt he yieldInLabel property


Syntax:
{{em-form-group
    //The state of the form group
    status="none|error|warning|success"
    //If true the control view is yieled within the label
    yieldInLabel=true|false
    //If true validation icons will be rendered, by default inherited from the form
    v_icons: true
    //Label of the form group, default is a human friendly form of the property name
    label="Some label"
}}
###
FormGroupComponent = Component.extend(InFormMixin, HasPropertyMixin, HasPropertyValidationMixin,
    tagName: 'div'
    layoutName: 'components/form-group'
    class: 'form-group'
    classNameBindings: ['class', 'hasSuccess', 'hasWarning', 'hasError', 'v_icons:has-feedback']
    attributeBindings: ['disabled']

    hasSuccess: (-> @get('validations') and @get('status') is 'success' and @get('canShowErrors')).property('status', 'canShowErrors')
    hasWarning: (-> @get('validations') and @get('status') is 'warning' and @get('canShowErrors')).property('status', 'canShowErrors')
    hasError: (-> @get('validations') and @get('status') is 'error' and @get('canShowErrors')).property('status', 'canShowErrors')

    #should render icons? inherited from form
    v_icons: Em.computed.alias 'form.v_icons'

    v_success_icon: 'fa fa-check'
    v_warn_icon: 'fa fa-exclamation-triangle'
    v_error_icon: 'fa fa-times'

    #Should show validations?
    validations: true

    yieldInLabel: no

    v_icon: (->
        return if !@get('canShowErrors')
        switch @get('status')
            when 'success' then @get('v_success_icon')
            when 'warning', 'warn' then @get('v_warn_icon')
            when 'error' then @get('v_error_icon')
            else null
    ).property('status', 'canShowErrors')

    init: ->
        @_super()

#        @set 'controlViewName', "control-view-name-#{@get('elementId')}"
#        @set 'labelViewName', "label-view-name-#{@get('elementId')}"
#        helpViewName = "help-view-name-#{@get('elementId')}"
#        @set 'helpViewName', helpViewName
#        have some help text such an error message?
#        Em.Binding.from("#{helpViewName}.hasHelp").to('hasHelp').connect(this)
        #Em.Binding.from("#{helpViewName}.hasError").to('hasErrors').connect(this)

    ###
    Observes the helpHasErrors of the help control and modify the 'status' property accordingly.
    ###
    #hasErrorChanged: (->
    #    if @get('hasErrors') then @set('status', 'error') else @set('status', 'success' )
    #).observes('hasErrors')

    ###
    Listen to the focus out of the form group and display the errors
    ###
    focusOut: ->
        @set('canShowErrors', true)
)

Em.Handlebars.helper('em-form-group', FormGroupComponent)

`export default FormGroupComponent`
