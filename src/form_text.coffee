###
Form Input

Syntax:
{{em-text property="property name"}}
###
Ember.Forms.FormTextComponent = Ember.Forms.FormGroupComponent.extend
    attributeBindings: ['cols', 'rows']
    controlView: Em.TextArea.extend(Em.Forms.ControlMixin,
        typeBinding: 'parentView.type'
        colsBinding: 'parentView.cols'
        rowsBinding: 'parentView.rows'
    )

Ember.Handlebars.helper('em-text', (options) ->
    Ember.Handlebars.helpers.view.call @, Ember.Forms.FormTextComponent, options
)