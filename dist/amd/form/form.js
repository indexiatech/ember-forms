define(
  ["ember","../utils/utils","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var Handlebars = __dependency1__.Handlebars;
    var Utils = __dependency2__["default"] || __dependency2__;

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

    __exports__["default"] = FormComponent;
  });