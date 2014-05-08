###
Form Input

Syntax:
{{em-text property="property name" rows=4}}
###
Em.Forms.FormTextComponent = Em.Forms.FormGroupComponent.extend(
    controlView: Em.TextArea.extend(Em.Forms.ControlMixin,
        attributeBindings: ['placeholder']
        placeholder: Em.computed.alias 'parentView.placeholder'
        model: Em.computed.alias 'parentView.model'
        propertyName: Em.computed.alias 'parentView.propertyName'
        rows: Em.computed.alias 'parentView.rows'
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
    Ember.Handlebars.helpers.view.call @, Ember.Forms.FormTextComponent, options
)