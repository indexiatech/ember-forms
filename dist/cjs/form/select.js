"use strict";
var FormGroupComponent = require("./group")["default"] || require("./group");
var ControlMixin = require("../mixins/control")["default"] || require("../mixins/control");

/*
Form Select

Syntax:
{{em-select property="property name"
    content=array_of_options
    optionValuePath=keyForValue
    optionLabelPath=keyForLabel
    prompt="Optional default prompt"}}
 */
var FormSelectComponent;

FormSelectComponent = FormGroupComponent.extend({
  v_icons: false,
  controlView: Em.Select.extend(ControlMixin, {
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName'),
    content: Em.computed.alias('parentView.content'),
    optionValuePath: Em.computed.alias('parentView.optionValuePath'),
    optionLabelPath: Em.computed.alias('parentView.optionLabelPath'),
    prompt: Em.computed.alias('parentView.prompt')
  }),
  property: void 0,
  content: void 0,
  optionValuePath: void 0,
  optionLabelPath: void 0,
  prompt: void 0,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-select', function(options) {
  return Ember.Handlebars.helpers.view.call(this, FormSelectComponent, options);
});

exports["default"] = FormGroupComponent;