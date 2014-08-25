!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),(f.Ember||(f.Ember={})).Forms=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var Checkbox = window.Ember.Checkbox;
var Handlebars = window.Ember.Handlebars;
var FormGroupComponent = _dereq_("./group")["default"] || _dereq_("./group");
var FormCheckboxComponent = _dereq_("./checkbox")["default"] || _dereq_("./checkbox");
var ControlMixin = _dereq_("../mixins/control")["default"] || _dereq_("../mixins/control");

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
},{"../mixins/control":11,"./checkbox":1,"./group":4}],2:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var Binding = window.Ember.Binding;
var Handlebars = window.Ember.Handlebars;
var InFormMixin = _dereq_("../mixins/in_form")["default"] || _dereq_("../mixins/in_form");
var HasPropertyMixin = _dereq_("../mixins/has_property")["default"] || _dereq_("../mixins/has_property");

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
},{"../mixins/has_property":12,"../mixins/in_form":14}],3:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var Handlebars = window.Ember.Handlebars;
var Utils = _dereq_("../utils/utils")["default"] || _dereq_("../utils/utils");

/*
Form View

A component for rendering a form element.

Syntax:
{{em-form
    //The layout of the form
    form_layout="form|inline|horizontal"
    //The model bound to the form if any
    model="some_model_instance"
    //The action to be invoked on the controller when a form is submitted.
    action="some_action"
    //if true a submit button will be rendered
    submit_button=true|false
    //if true validation icons will be rendered
    v_icons=true|false
}}
 */
var FormComponent;

FormComponent = Component.extend({
  tagName: 'form',
  layoutName: 'components/form',
  classNameBindings: ['form_layout_class'],
  attributeBindings: ['role'],
  role: 'form',
  form_layout_class: (function() {
    switch (this.get('form_layout')) {
      case 'horizontal':
      case 'inline':
        return "form-" + (this.get('form_layout'));
      default:
        return 'form';
    }
  }).property('form_layout'),
  isDefaultLayout: Utils.createBoundSwitchAccessor('form', 'form_layout', 'form'),
  isInline: Utils.createBoundSwitchAccessor('inline', 'form_layout', 'form'),
  isHorizontal: Utils.createBoundSwitchAccessor('horizontal', 'form_layout', 'form'),
  action: 'submit',
  model: void 0,
  form_layout: 'form',
  submit_button: true,
  v_icons: true,

  /*
  Form submit
  
  Optionally execute model validations and perform a form submission.
   */
  submit: function(e) {
    var promise;
    if (e) {
      e.preventDefault();
    }
    if (Ember.isNone(this.get('model.validate'))) {
      return this.get('targetObject').send(this.get('action'));
    } else {
      promise = this.get('model').validate();
      return promise.then((function(_this) {
        return function() {
          if (_this.get('model.isValid')) {
            return _this.get('targetObject').send(_this.get('action'));
          }
        };
      })(this));
    }
  }
});

Handlebars.helper('em-form', FormComponent);

exports["default"] = FormComponent;
},{"../utils/utils":23}],4:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var InFormMixin = _dereq_("../mixins/in_form")["default"] || _dereq_("../mixins/in_form");
var HasPropertyMixin = _dereq_("../mixins/has_property")["default"] || _dereq_("../mixins/has_property");
var HasPropertyValidationMixin = _dereq_("../mixins/has_property_validation")["default"] || _dereq_("../mixins/has_property_validation");

/*
Form Group

Wraps labels, controls and help message for optimum spacing and validation styles.
A wrapper for a single input with its assistances views such as label, help message.

A form group can yield the control's view after or within a label, this is dependent on the control
    required layout and is defined byt he yieldInLabel property


Syntax:
{{em-form-group
    //The state of the form group
    status="none|error|warning|success"
    //If true the control view is yieled within the label
    yieldInLabel=true|false
    //If true validation icons will be rendered, by default inherited from the form
    v_icons: true
    //Label of the form group, default is a human friendly form of the property name
    label="Some label"
}}
 */
var FormGroupComponent;

FormGroupComponent = Component.extend(InFormMixin, HasPropertyMixin, HasPropertyValidationMixin, {
  tagName: 'div',
  layoutName: 'components/form-group',
  "class": 'form-group',
  classNameBindings: ['class', 'hasSuccess', 'hasWarning', 'hasError', 'v_icons:has-feedback'],
  attributeBindings: ['disabled'],
  hasSuccess: (function() {
    return this.get('validations') && this.get('status') === 'success' && this.get('canShowErrors');
  }).property('status', 'canShowErrors'),
  hasWarning: (function() {
    return this.get('validations') && this.get('status') === 'warning' && this.get('canShowErrors');
  }).property('status', 'canShowErrors'),
  hasError: (function() {
    return this.get('validations') && this.get('status') === 'error' && this.get('canShowErrors');
  }).property('status', 'canShowErrors'),
  v_icons: Em.computed.alias('form.v_icons'),
  v_success_icon: 'fa fa-check',
  v_warn_icon: 'fa fa-exclamation-triangle',
  v_error_icon: 'fa fa-times',
  validations: true,
  yieldInLabel: false,
  v_icon: (function() {
    if (!this.get('canShowErrors')) {
      return;
    }
    switch (this.get('status')) {
      case 'success':
        return this.get('v_success_icon');
      case 'warning':
      case 'warn':
        return this.get('v_warn_icon');
      case 'error':
        return this.get('v_error_icon');
      default:
        return null;
    }
  }).property('status', 'canShowErrors'),
  init: function() {
    return this._super();
  },

  /*
  Observes the helpHasErrors of the help control and modify the 'status' property accordingly.
   */

  /*
  Listen to the focus out of the form group and display the errors
   */
  focusOut: function() {
    return this.set('canShowErrors', true);
  }
});

Em.Handlebars.helper('em-form-group', FormGroupComponent);

exports["default"] = FormGroupComponent;
},{"../mixins/has_property":12,"../mixins/has_property_validation":13,"../mixins/in_form":14}],5:[function(_dereq_,module,exports){
"use strict";
var FormGroupComponent = _dereq_("./group")["default"] || _dereq_("./group");
var ControlMixin = _dereq_("../mixins/control")["default"] || _dereq_("../mixins/control");

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
},{"../mixins/control":11,"./group":4}],6:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var InFormMixin = _dereq_("../mixins/in_form")["default"] || _dereq_("../mixins/in_form");

/*
Form Label

When styled with bootstrap, when form is rendered horizontally, the label require the 'extraClass' property to
    be set to a value such 'col-sm-2' to be aligned properly.

Syntax:
{{em-form-label
    text="Some label"
    extraClass="col-sm-2"
}}

Or can serve as a block helper for elements that needs to be wrapped within label element.
{{#em-form-label text="Active?"}}
    {{em-checkbox}}
{{/em-form-label}}
 */
var FormLabelComponent;

FormLabelComponent = Ember.Component.extend(InFormMixin, {
  tagName: 'label',
  layoutName: 'components/form-label',
  classNames: ['control-label'],
  classNameBindings: ['extraClass', 'inlineClassCalc', 'horiClassCalc'],
  attributeBindings: ['for'],
  horiClass: 'col-sm-2',
  horiClassCalc: (function() {
    if (this.get('form.isHorizontal') && this.get('horiClass')) {
      return this.get('horiClass');
    }
  }).property('form.isHorizontal'),
  inlineClass: 'sr-only',
  inlineClassCalc: (function() {
    if (this.get('form.isInline') && this.get('inlineClass')) {
      return this.get('inlineClass');
    }
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-form-label', FormLabelComponent);

exports["default"] = FormLabelComponent;
},{"../mixins/in_form":14}],7:[function(_dereq_,module,exports){
"use strict";
var FormGroupComponent = _dereq_("./group")["default"] || _dereq_("./group");
var ControlMixin = _dereq_("../mixins/control")["default"] || _dereq_("../mixins/control");

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
},{"../mixins/control":11,"./group":4}],8:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var InFormMixin = _dereq_("../mixins/in_form")["default"] || _dereq_("../mixins/in_form");

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
},{"../mixins/in_form":14}],9:[function(_dereq_,module,exports){
"use strict";
var computed = window.Ember.computed;
var TextArea = window.Ember.TextArea;
var Handlebars = window.Ember.Handlebars;
var FormGroupComponent = _dereq_("./group")["default"] || _dereq_("./group");
var ControlMixin = _dereq_("../mixins/control")["default"] || _dereq_("../mixins/control");

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
},{"../mixins/control":11,"./group":4}],10:[function(_dereq_,module,exports){
"use strict";
var Utils = _dereq_("./utils/utils")["default"] || _dereq_("./utils/utils");

var ControlMixin = _dereq_("./mixins/control")["default"] || _dereq_("./mixins/control");

var InFormMixin = _dereq_("./mixins/in_form")["default"] || _dereq_("./mixins/in_form");

var HasPropertyMixin = _dereq_("./mixins/has_property")["default"] || _dereq_("./mixins/has_property");

var HasPropertyValidationMixin = _dereq_("./mixins/has_property_validation")["default"] || _dereq_("./mixins/has_property_validation");

var FormComponent = _dereq_("./form/form")["default"] || _dereq_("./form/form");

var FormGroupComponent = _dereq_("./form/group")["default"] || _dereq_("./form/group");

var FormCheckboxComponent = _dereq_("./form/checkbox")["default"] || _dereq_("./form/checkbox");

var FormControlHelpComponent = _dereq_("./form/control_help")["default"] || _dereq_("./form/control_help");

var FormInputComponent = _dereq_("./form/input")["default"] || _dereq_("./form/input");

var FormLabelComponent = _dereq_("./form/label")["default"] || _dereq_("./form/label");

var FormSelectComponent = _dereq_("./form/select")["default"] || _dereq_("./form/select");

var FormSubmitComponent = _dereq_("./form/submit_button")["default"] || _dereq_("./form/submit_button");

var FormTextComponent = _dereq_("./form/text")["default"] || _dereq_("./form/text");

var FormTemplate = _dereq_("./templates/components/form")["default"] || _dereq_("./templates/components/form");

var FormGroupTemplate = _dereq_("./templates/components/form-group")["default"] || _dereq_("./templates/components/form-group");

var FormGroupPartialTemplate = _dereq_("./templates/components/formgroup/form-group")["default"] || _dereq_("./templates/components/formgroup/form-group");

var FormGroupControlPartialTemplate = _dereq_("./templates/components/formgroup/form-group-control")["default"] || _dereq_("./templates/components/formgroup/form-group-control");

var FormGroupControlWithinLabelPartialTemplate = _dereq_("./templates/components/formgroup/control-within-label")["default"] || _dereq_("./templates/components/formgroup/control-within-label");

var FormLabelTemplate = _dereq_("./templates/components/form-label")["default"] || _dereq_("./templates/components/form-label");

var FormControlHelpTemplate = _dereq_("./templates/components/form-control-help")["default"] || _dereq_("./templates/components/form-control-help");

var SubmitButtonTemplate = _dereq_("./templates/components/form-submit-button")["default"] || _dereq_("./templates/components/form-submit-button");

Ember.TEMPLATES['components/form'] = FormTemplate;;
Ember.TEMPLATES['components/form-group'] = FormGroupTemplate;;
Ember.TEMPLATES['components/formgroup/form-group'] = FormGroupPartialTemplate;;
Ember.TEMPLATES['components/formgroup/form-group-control'] = FormGroupControlPartialTemplate;;
Ember.TEMPLATES['components/formgroup/control-within-label'] = FormGroupControlWithinLabelPartialTemplate;;
Ember.TEMPLATES['components/form-label'] = FormLabelTemplate;;
Ember.TEMPLATES['components/form-control-help'] = FormControlHelpTemplate;;
Ember.TEMPLATES['components/form-submit-button'] = SubmitButtonTemplate;;
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
},{"./form/checkbox":1,"./form/control_help":2,"./form/form":3,"./form/group":4,"./form/input":5,"./form/label":6,"./form/select":7,"./form/submit_button":8,"./form/text":9,"./mixins/control":11,"./mixins/has_property":12,"./mixins/has_property_validation":13,"./mixins/in_form":14,"./templates/components/form":19,"./templates/components/form-control-help":15,"./templates/components/form-group":16,"./templates/components/form-label":17,"./templates/components/form-submit-button":18,"./templates/components/formgroup/control-within-label":20,"./templates/components/formgroup/form-group":22,"./templates/components/formgroup/form-group-control":21,"./utils/utils":23}],11:[function(_dereq_,module,exports){
"use strict";
var Mixin = window.Ember.Mixin;
var Binding = window.Ember.Binding;

/***
Mixin that should be applied for all controls
 */
var ControlMixin;

ControlMixin = Mixin.create({
  classNameBindings: ['class'],
  "class": 'form-control',
  init: function() {
    this._super();
    return Binding.from("model." + (this.get('propertyName'))).to('value').connect(this);
  },
  hasValue: (function() {
    return this.get('value') !== null;
  }).property('value').readOnly()
});

exports["default"] = ControlMixin;
},{}],12:[function(_dereq_,module,exports){
"use strict";
var Mixin = window.Ember.Mixin;
var Binding = window.Ember.Binding;
var assert = window.Ember.assert;

/*
A mixin that enriches a view that is attached to a model property.

The property name by default is taken from the parentView unless explictly
    defined in the `property` variable.

This mixin also binds a property named `errors` to the model's `model.errors.@propertyName` array
 */
var HasPropertyMixin;

HasPropertyMixin = Mixin.create({
  property: void 0,
  propertyName: (function() {
    if (this.get('property')) {
      return this.get('property');
    } else if (this.get('parentView.property')) {
      return this.get('parentView.property');
    } else {
      return assert(false, 'Property could not be found.');
    }
  }).property('parentView.property'),
  init: function() {
    this._super();
    return Binding.from('model.errors.' + this.get('propertyName')).to('errors').connect(this);
  }
});

exports["default"] = HasPropertyMixin;
},{}],13:[function(_dereq_,module,exports){
"use strict";
var Mixin = window.Ember.Mixin;
var Binding = window.Ember.Binding;
var assert = window.Ember.assert;

/*
A mixin that enriches a view that is attached to a model property that has validation
    support.

This mixin binds a property named `errors` to the model's `model.errors.@propertyName` array
 */
var HasPropertyValidationMixin;

HasPropertyValidationMixin = Mixin.create({
  init: function() {
    this._super();
    assert(!Em.isNone(this.get('propertyName')), 'propertyName is required.');
    return Binding.from('model.errors.' + this.get('propertyName')).to('errors').connect(this);
  },
  status: (function() {
    if (this.get('errors.length')) {
      return 'error';
    } else {
      return 'success';
    }
  }).property('errors.length')
});

exports["default"] = HasPropertyValidationMixin;
},{}],14:[function(_dereq_,module,exports){
"use strict";
var Mixin = window.Ember.Mixin;
var Binding = window.Ember.Binding;
var assert = window.Ember.assert;

/*
Find the form of the view that merges this mixin
 */
var InFormMixin;

InFormMixin = Mixin.create({
  form: (function() {
    var parentView;
    parentView = this.get('parentView');
    while (parentView) {
      if (parentView.get('tagName') === 'form') {
        return parentView;
      }
      parentView = parentView.get('parentView');
    }
    return assert(false, 'Cannot find form');
  }).property('parentView'),
  model: (function() {
    return this.get('form.model');
  }).property('form')
});

exports["default"] = InFormMixin;
},{}],15:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{helpText}}");
},{}],16:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{#if wrapperClass}}\n    <div {{bind-attr class=wrapperClass}}>\n        {{partial \'components/formgroup/form-group\'}}\n    </div>\n{{else}}\n    {{partial \'components/formgroup/form-group\'}}\n{{/if}}");
},{}],17:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{yield}}\n{{text}}");
},{}],18:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{#if form.isHorizontal}}\n    <div {{bind-attr class=horiClass}}>\n        <button {{bind-attr class=classes}} {{bind-attr disabled=disabled}}>{{text}}</button>\n    </div>\n{{else}}\n    <button {{bind-attr class=classes}} {{bind-attr disabled=disabled}}>{{text}}</button>\n{{/if}}\n");
},{}],19:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{yield}}\n{{#if submit_button}}\n    {{em-form-submit}}\n{{/if}}");
},{}],20:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{#em-form-label text=label horiClass=\'\' inlineClass=\'\' viewName=labelViewName}}\n    {{partial \'components/formgroup/form-group-control\'}}\n{{/em-form-label}}");
},{}],21:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{#if controlWrapper}}\n    <div {{bind-attr class=controlWrapper}}>\n        {{view controlView viewName=controlViewName property=propertyName id=cid}}\n    </div>\n{{else}}\n    {{view controlView viewName=controlViewName property=propertyName id=cid}}\n{{/if}}");
},{}],22:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{#unless template}}\n    {{#if label}}\n        {{#if yieldInLabel}}\n            {{#if labelWrapperClass}}\n                <div {{bind-attr class=labelWrapperClass}}>\n                    {{partial \'components/formgroup/control-within-label\'}}\n                </div>\n            {{else}}\n                {{partial \'components/formgroup/control-within-label\'}}\n            {{/if}}\n        {{else}}\n            {{#if labelWrapperClass}}\n                <div {{bind-attr class=labelWrapperClass}}>\n                    {{em-form-label text=label viewName=labelViewName}}\n                    {{partial \'components/formgroup/form-group-control\'}}\n                </div>\n            {{else}}\n                {{em-form-label text=label viewName=labelViewName}}\n                {{partial \'components/formgroup/form-group-control\'}}\n            {{/if}}\n        {{/if}}\n    {{else}}\n        {{partial \'components/formgroup/form-group-control\'}}\n    {{/if}}\n\n    {{#if v_icons}}\n        <span class=\"form-control-feedback\"><i {{bind-attr class=v_icon}}></i></span>\n    {{/if}}\n\n    {{!Currently no errors when layout is inline}}\n    {{#unless form.isInline}}\n        {{#if canShowErrors}}\n            {{em-form-control-help text=help viewName=helpViewName}}\n        {{/if}}\n    {{/unless}}\n{{else}}\n    {{yield}}\n{{/unless}}");
},{}],23:[function(_dereq_,module,exports){
"use strict";
var Utils;

Utils = {
  createBoundSwitchAccessor: function(switchValue, myProperty, myDefault) {
    if (myDefault == null) {
      myDefault = 'default';
    }
    return (function(key, value) {
      if (arguments.length === 2) {
        this.set(myProperty, (value ? switchValue : myDefault));
      }
      return this.get(myProperty) === switchValue;
    }).property(myProperty);
  },
  namelize: function(string) {
    return string.underscore().split('_').join(' ').capitalize();
  }
};

exports["default"] = Utils;
},{}]},{},[10])
(10)
});