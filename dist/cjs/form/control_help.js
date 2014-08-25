"use strict";
var Component = require("ember").Component;
var Binding = require("ember").Binding;
var Handlebars = require("ember").Handlebars;
var InFormMixin = require("../mixins/in_form")["default"] || require("../mixins/in_form");
var HasPropertyMixin = require("../mixins/has_property")["default"] || require("../mixins/has_property");

/*
Form Control Help

Renders a textual help of the control.

Note: currently must be a direct descendant of a form-group or 'property' must be explicitly defined

Syntax:
{{em-form-control-help}}
 */
var FormControlHelpComponent;

FormControlHelpComponent = Component.extend(InFormMixin, HasPropertyMixin, {
  tagName: 'span',
  classNames: ['help-block'],
  classNameBindings: ['extraClass', 'horiClassCalc'],
  layoutName: 'components/form-control-help',
  text: void 0,
  extraClass: void 0,
  horiClass: 'col-sm-offset-2 col-sm-10',
  horiClassCalc: (function() {
    if (this.get('form.isHorizontal') && this.get('horiClass')) {
      return this.get('horiClass');
    }
  }).property('form.isHorizontal'),
  init: function() {
    this._super();
    return Binding.from('model.errors.' + this.get('propertyName')).to('errors').connect(this);
  },
  helpText: (function() {
    return this.get('errors.firstObject') || this.get('text');
  }).property('text', 'errors.firstObject'),
  hasHelp: (function() {
    var _ref;
    return ((_ref = this.get('helpText')) != null ? _ref.length : void 0) > 0;
  }).property('helpText'),
  hasError: (function() {
    var _ref;
    return (_ref = this.get('errors')) != null ? _ref.length : void 0;
  }).property('errors.length')
});

Handlebars.helper('em-form-control-help', FormControlHelpComponent);

exports["default"] = FormControlHelpComponent;