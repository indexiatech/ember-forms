"use strict";
var Component = require("ember").Component;
var InFormMixin = require("../mixins/in_form")["default"] || require("../mixins/in_form");

/*
Form Submit Button

Syntax:
{{em-form-submit text="Submit"}}
 */
var FormSubmitComponent;

FormSubmitComponent = Component.extend(InFormMixin, {
  classes: 'btn btn-default',
  layoutName: 'components/form-submit-button',
  classNames: ['form-group'],
  text: 'Submit',
  type: 'submit',
  attributeBindings: ['disabled'],
  horiClass: 'col-sm-offset-2 col-sm-10',
  disabled: (function() {
    if (!Ember.isNone(this.get('model.isValid'))) {
      return !this.get('model.isValid');
    } else {
      return false;
    }
  }).property('model.isValid')
});

Ember.Handlebars.helper('em-form-submit', FormSubmitComponent);

exports["default"] = FormSubmitComponent;