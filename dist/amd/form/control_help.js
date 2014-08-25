define(
  ["ember","../mixins/in_form","../mixins/has_property","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var Binding = __dependency1__.Binding;
    var Handlebars = __dependency1__.Handlebars;
    var InFormMixin = __dependency2__["default"] || __dependency2__;
    var HasPropertyMixin = __dependency3__["default"] || __dependency3__;

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

    __exports__["default"] = FormControlHelpComponent;
  });