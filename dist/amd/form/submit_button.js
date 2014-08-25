define(
  ["ember","../mixins/in_form","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var InFormMixin = __dependency2__["default"] || __dependency2__;

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

    __exports__["default"] = FormSubmitComponent;
  });