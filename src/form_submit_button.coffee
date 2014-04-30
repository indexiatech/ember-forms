###
Form Submit Button

Syntax:
{{em-form-submit text="Submit"}}
###
Ember.Forms.FormSubmitComponent = Ember.Component.extend
    tagName: 'button'
    classNames: ['btn', 'btn-default']
    layoutName: 'form_submit_button'
    text: 'Submit'
    type: 'submit'
    attributeBindings: ['type', 'value', 'disabled']
    model: Ember.computed.alias('parentView.model')

    disabled: (->
        !@.get('model.isValid')
    ).property('model.isValid')


Ember.Handlebars.helper 'em-form-submit', Ember.Forms.FormSubmitComponent
