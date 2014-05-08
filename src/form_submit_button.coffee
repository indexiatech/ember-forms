###
Form Submit Button

Syntax:
{{em-form-submit text="Submit"}}
###
Ember.Forms.FormSubmitComponent = Ember.Component.extend(Ember.Forms.InFormMixin,
    classes: 'btn btn-default'
    layoutName: 'components/form-submit-button'
    classNames: ['form-group']
    text: 'Submit'
    type: 'submit'
    attributeBindings: ['disabled']

    horiClass: 'col-sm-offset-2 col-sm-10'

    disabled: (->
        if !Ember.isNone(@get('model.isValid')) then !@.get('model.isValid') else false
    ).property('model.isValid')
)

Ember.Handlebars.helper 'em-form-submit', Ember.Forms.FormSubmitComponent
