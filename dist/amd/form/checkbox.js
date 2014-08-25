define(
  ["ember","./group","./checkbox","../mixins/control","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Checkbox = __dependency1__.Checkbox;
    var Handlebars = __dependency1__.Handlebars;
    var FormGroupComponent = __dependency2__["default"] || __dependency2__;
    var FormCheckboxComponent = __dependency3__["default"] || __dependency3__;
    var ControlMixin = __dependency4__["default"] || __dependency4__;

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

    __exports__["default"] = CheckboxComponent;
  });