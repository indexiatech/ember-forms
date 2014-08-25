"use strict";
var FormGroupComponent = require("./group")["default"] || require("./group");
var ControlMixin = require("../mixins/control")["default"] || require("../mixins/control");

/*
Form Input

Syntax:
{{em-input property="property name"}}
 */
var FormInputComponent;

FormInputComponent = FormGroupComponent.extend({
  controlView: Em.TextField.extend(ControlMixin, {
    attributeBindings: ['placeholder', 'required', 'autofocus', 'disabled'],
    placeholder: Em.computed.alias('parentView.placeholder'),
    required: Em.computed.alias('parentView.required'),
    autofocus: Em.computed.alias('parentView.autofocus'),
    disabled: Em.computed.alias('parentView.disabled'),
    type: Em.computed.alias('parentView.type'),
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName')
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  required: void 0,
  autofocus: void 0,
  disabled: void 0,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-input', function(options) {
  return Ember.Handlebars.helpers.view.call(this, FormInputComponent, options);
});

exports["default"] = FormGroupComponent;