`import FormGroupComponent from './group'`
`import ControlMixin from '../mixins/control'`

###
Form Input

Syntax:
{{em-input property="property name"}}
###
InputComponent = FormGroupComponent.extend(
    controlView: Em.TextField.extend(ControlMixin,
        attributeBindings: ['placeholder', 'required', 'autofocus', 'disabled']
        placeholder: Em.computed.alias 'parentView.placeholder'
        required: Em.computed.alias 'parentView.required'
        autofocus: Em.computed.alias 'parentView.autofocus'
        disabled: Em.computed.alias 'parentView.disabled'
        type: Em.computed.alias 'parentView.type'
        model: Em.computed.alias 'parentView.model'
        propertyName: Em.computed.alias 'parentView.propertyName'
    )

    property: undefined
    label: undefined
    placeholder: undefined
    required: undefined
    autofocus: undefined
    disabled: undefined

    controlWrapper: (->
        return 'col-sm-10' if @get('form.form_layout') is 'horizontal'
        null
    ).property('form.form_layout')
)

`export default InputComponent`
