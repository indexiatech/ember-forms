###
Form Input

Syntax:
{{em-input property="property name"}}
###
Em.Forms.FormInputComponent = Em.Forms.FormGroupComponent.extend(
    controlView: Em.TextField.extend(Em.Forms.ControlMixin,
        attributeBindings: ['placeholder']
        placeholder: Em.computed.alias 'parentView.placeholder'
        type: Em.computed.alias 'parentView.type'
        model: Em.computed.alias 'parentView.model'
        propertyName: Em.computed.alias 'parentView.propertyName'
    )

    #Property
    property: undefined
    label: undefined
    placeholder: undefined

    controlWrapper: (->
        return 'col-sm-10' if @get('form.form_layout') is 'horizontal'
        null
    ).property('form.form_layout')
)

Ember.Handlebars.helper('em-input', (options) ->
    Ember.Handlebars.helpers.view.call @, Ember.Forms.FormInputComponent, options
)