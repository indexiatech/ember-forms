###
Form Input

Syntax:
{{em-input property="property name"}}
###
Ember.Forms.FormInputComponent = Ember.Forms.FormGroupComponent.extend
    controlView: Em.TextField.extend(Em.Forms.ControlMixin,
    )

Ember.Handlebars.helper('em-input', (options) ->
    Ember.Handlebars.helpers.view.call @, Ember.Forms.FormInputComponent, options
)