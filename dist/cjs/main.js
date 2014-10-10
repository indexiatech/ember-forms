"use strict";
var Application = require("ember").Application;

var Utils = require("./utils/utils")["default"] || require("./utils/utils");

var ControlMixin = require("./mixins/control")["default"] || require("./mixins/control");

var InFormMixin = require("./mixins/in_form")["default"] || require("./mixins/in_form");

var HasPropertyMixin = require("./mixins/has_property")["default"] || require("./mixins/has_property");

var HasPropertyValidationMixin = require("./mixins/has_property_validation")["default"] || require("./mixins/has_property_validation");

var FormComponent = require("./form/form")["default"] || require("./form/form");

var FormGroupComponent = require("./form/group")["default"] || require("./form/group");

var FormCheckboxComponent = require("./form/checkbox")["default"] || require("./form/checkbox");

var FormControlHelpComponent = require("./form/control_help")["default"] || require("./form/control_help");

var FormInputComponent = require("./form/input")["default"] || require("./form/input");

var FormLabelComponent = require("./form/label")["default"] || require("./form/label");

var FormSelectComponent = require("./form/select")["default"] || require("./form/select");

var FormSubmitComponent = require("./form/submit_button")["default"] || require("./form/submit_button");

var FormTextComponent = require("./form/text")["default"] || require("./form/text");

var FormInlineComponent = require("./inline/em-il-input")["default"] || require("./inline/em-il-input");

var FormTemplate = require("./templates/components/form")["default"] || require("./templates/components/form");

var FormGroupTemplate = require("./templates/components/form-group")["default"] || require("./templates/components/form-group");

var FormGroupPartialTemplate = require("./templates/components/formgroup/form-group")["default"] || require("./templates/components/formgroup/form-group");

var FormGroupControlPartialTemplate = require("./templates/components/formgroup/form-group-control")["default"] || require("./templates/components/formgroup/form-group-control");

var FormGroupControlWithinLabelPartialTemplate = require("./templates/components/formgroup/control-within-label")["default"] || require("./templates/components/formgroup/control-within-label");

var FormLabelTemplate = require("./templates/components/form-label")["default"] || require("./templates/components/form-label");

var FormControlHelpTemplate = require("./templates/components/form-control-help")["default"] || require("./templates/components/form-control-help");

var SubmitButtonTemplate = require("./templates/components/form-submit-button")["default"] || require("./templates/components/form-submit-button");

var InlineInputTemplate = require("./templates/components/em-il-input")["default"] || require("./templates/components/em-il-input");

Ember.TEMPLATES['components/form'] = FormTemplate;;
Ember.TEMPLATES['components/form-group'] = FormGroupTemplate;;
Ember.TEMPLATES['components/formgroup/form-group'] = FormGroupPartialTemplate;;
Ember.TEMPLATES['components/formgroup/form-group-control'] = FormGroupControlPartialTemplate;;
Ember.TEMPLATES['components/formgroup/control-within-label'] = FormGroupControlWithinLabelPartialTemplate;;
Ember.TEMPLATES['components/form-label'] = FormLabelTemplate;;
Ember.TEMPLATES['components/form-control-help'] = FormControlHelpTemplate;;
Ember.TEMPLATES['components/form-submit-button'] = SubmitButtonTemplate;;
Ember.TEMPLATES['components/em-il-input'] = InlineInputTemplate;;
Application.initializer({
  name: 'ember-forms',
  initialize: function(container) {
    return container.register('component:em-select', FormSelectComponent);
  }
});

exports.Utils = Utils;
exports.ControlMixin = ControlMixin;
exports.HasPropertyMixin = HasPropertyMixin;
exports.HasPropertyValidationMixin = HasPropertyValidationMixin;
exports.FormComponent = FormComponent;
exports.FormGroupComponent = FormGroupComponent;
exports.FormCheckboxComponent = FormCheckboxComponent;
exports.FormControlHelpComponent = FormControlHelpComponent;
exports.FormInputComponent = FormInputComponent;
exports.FormLabelComponent = FormLabelComponent;
exports.FormSelectComponent = FormSelectComponent;
exports.FormSubmitComponent = FormSubmitComponent;
exports.FormTextComponent = FormTextComponent;