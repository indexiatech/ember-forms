`import {Component} from 'ember'`
`import InFormMixin from '../mixins/in_form'`

###
Form Submit Button

Syntax:
{{em-form-submit text="Submit"}}
###
FormSubmitComponent = Component.extend(InFormMixin,
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

Ember.Handlebars.helper 'em-form-submit', FormSubmitComponent

`export default FormSubmitComponent`
