`import FormGroupComponent from './group'`
`import ControlMixin from '../mixins/control'`

###
Form Select

Syntax:
{{em-select property="property name"
    content=array_of_options
    optionValuePath=keyForValue
    optionLabelPath=keyForLabel
    prompt="Optional default prompt"}}
###
FormSelectComponent = FormGroupComponent.extend(
    v_icons: false
    controlView: Em.Select.extend(ControlMixin,
        model: Em.computed.alias 'parentView.model'
        propertyName: Em.computed.alias 'parentView.propertyName'
        content: Em.computed.alias 'parentView.content'
        optionValuePath: Em.computed.alias 'parentView.optionValuePath'
        optionLabelPath: Em.computed.alias 'parentView.optionLabelPath'
        prompt: Em.computed.alias 'parentView.prompt'
    )

    #Property
    property: undefined
    content: undefined
    optionValuePath: undefined
    optionLabelPath: undefined
    prompt: undefined

    controlWrapper: (->
        return 'col-sm-10' if @get('form.form_layout') is 'horizontal'
        null
    ).property('form.form_layout')
)

Ember.Handlebars.helper('em-select', (options) ->
    Ember.Handlebars.helpers.view.call @, FormSelectComponent, options
)

`export default FormGroupComponent`