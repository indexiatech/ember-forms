"use strict";
var Checkbox = require("ember").Checkbox;
var Handlebars = require("ember").Handlebars;
var FormGroupComponent = require("./group")["default"] || require("./group");
var FormCheckboxComponent = require("./checkbox")["default"] || require("./checkbox");
var ControlMixin = require("../mixins/control")["default"] || require("../mixins/control");

/*
Form Input

Syntax:
{{em-checkbox property="property name"}}
 */
var CheckboxComponent;

CheckboxComponent = FormGroupComponent.extend({
  v_icons: false,
  validations: false,
  yieldInLabel: true,
  controlView: Checkbox.extend(ControlMixin, {
    "class": false,
    model: Em.computed.alias('parentView.parentView.model'),
    propertyName: Em.computed.alias('parentView.parentView.propertyName'),
    init: function() {
      this._super();
      return Em.Binding.from("model." + (this.get('propertyName'))).to('checked').connect(this);
    }
  }),
  wrapperClass: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-offset-2 col-sm-10';
    }
  }).property('form.form_layout'),
  labelWrapperClass: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'checkbox';
    }
    return null;
  }).property('form.form_layout'),
  "class": (function() {
    if (this.get('form.form_layout') !== 'horizontal') {
      return 'checkbox';
    }
    return 'form-group';
  }).property('form.form_layout')
});

Handlebars.helper('em-checkbox', function(options) {
  return Handlebars.helpers.view.call(this, CheckboxComponent, options);
});

exports["default"] = CheckboxComponent;