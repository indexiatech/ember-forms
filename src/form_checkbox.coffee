###
Form Input

Syntax:
{{em-checkbox property="property name"}}
###
Ember.Forms.FormCheckboxComponent = Ember.Forms.FormGroupComponent.extend
    formGroup: false
    v_icons: false
    yieldInsideLabel: true
    controlView: Em.Checkbox.extend(Ember.Forms.ControlMixin,
        hasFormControlClass: false
        init: ->
            @_super()
            Ember.Binding.from("model.#{@get('property')}").to('checked').connect(@)
    )

Ember.Handlebars.helper('em-checkbox', (options) ->
    Ember.Handlebars.helpers.view.call @, Ember.Forms.FormCheckboxComponent, options
)