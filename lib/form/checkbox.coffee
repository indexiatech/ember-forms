`import {Checkbox, Handlebars} from 'ember'`
`import FormGroupComponent from './group'`
`import FormCheckboxComponent from './checkbox'`
`import ControlMixin from '../mixins/control'`

###
Form Input

Syntax:
{{em-checkbox property="property name"}}
###
CheckboxComponent = FormGroupComponent.extend(
    v_icons: no
    validations: false
    yieldInLabel: true
    controlView: Checkbox.extend(ControlMixin,
        class: no
        model: Em.computed.alias 'parentView.parentView.model'
        propertyName: Em.computed.alias 'parentView.parentView.propertyName'
        init: ->
            @_super()
            Em.Binding.from("model.#{@get('propertyName')}").to('checked').connect(@)
    )

    wrapperClass: (->
        return 'col-sm-offset-2 col-sm-10' if @get('form.form_layout') is 'horizontal'
    ).property('form.form_layout')

    labelWrapperClass: (->
        return 'checkbox' if @get('form.form_layout') is 'horizontal'
        null
    ).property('form.form_layout')

    class: (->
        return 'checkbox' if @get('form.form_layout') isnt 'horizontal'
        'form-group'
    ).property('form.form_layout')
)

Handlebars.helper('em-checkbox', (options) ->
    Handlebars.helpers.view.call @, CheckboxComponent, options
)

`export default CheckboxComponent`