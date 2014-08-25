"use strict";
var computed = require("ember").computed;
var TextArea = require("ember").TextArea;
var Handlebars = require("ember").Handlebars;
var FormGroupComponent = require("./group")["default"] || require("./group");
var ControlMixin = require("../mixins/control")["default"] || require("../mixins/control");

/*
Form Input

Syntax:
{{em-text property="property name" rows=4}}
 */
var FormTextComponent;

FormTextComponent = FormGroupComponent.extend({
  controlView: TextArea.extend(ControlMixin, {
    attributeBindings: ['placeholder'],
    placeholder: computed.alias('parentView.placeholder'),
    model: computed.alias('parentView.model'),
    propertyName: computed.alias('parentView.propertyName'),
    rows: computed.alias('parentView.rows')
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  rows: 4,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-text', function(options) {
  return Handlebars.helpers.view.call(this, FormTextComponent, options);
});

exports["default"] = FormGroupComponent;