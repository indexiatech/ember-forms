`import {computed, TextArea, Handlebars} from 'ember'`
`import FormGroupComponent from './group'`
`import ControlMixin from '../mixins/control'`

###
Form Input

Syntax:
{{em-text property="property name" rows=4}}
###
FormTextComponent = FormGroupComponent.extend(
    controlView: TextArea.extend(ControlMixin,
        attributeBindings: ['placeholder']
        placeholder: computed.alias 'parentView.placeholder'
        model: computed.alias 'parentView.model'
        propertyName: computed.alias 'parentView.propertyName'
        rows: computed.alias 'parentView.rows'
    )

#Property
    property: undefined
    label: undefined
    placeholder: undefined
    rows: 4

    controlWrapper: (->
        return 'col-sm-10' if @get('form.form_layout') is 'horizontal'
        null
    ).property('form.form_layout')
)

Ember.Handlebars.helper('em-text', (options) ->
    Handlebars.helpers.view.call @, FormTextComponent, options
)

`export default FormGroupComponent`