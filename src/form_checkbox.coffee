###
Form Input

Syntax:
{{em-checkbox property="property name"}}
###
Em.Forms.FormCheckboxComponent = Em.Forms.FormGroupComponent.extend(
    v_icons: no
    validations: false
    yieldInLabel: true
    controlView: Em.Checkbox.extend(Em.Forms.ControlMixin,
        class: no
        model: Em.computed.alias 'parentView.parentView.model'
        propertyName: Em.computed.alias 'parentView.parentView.propertyName'
        init: ->
            @_super()
            Ember.Binding.from("model.#{@get('propertyName')}").to('checked').connect(@)
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

Ember.Handlebars.helper('em-checkbox', (options) ->
    Ember.Handlebars.helpers.view.call @, Ember.Forms.FormCheckboxComponent, options
)

