define(
  ["ember","./group","../mixins/control","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var computed = __dependency1__.computed;
    var TextArea = __dependency1__.TextArea;
    var Handlebars = __dependency1__.Handlebars;
    var FormGroupComponent = __dependency2__["default"] || __dependency2__;
    var ControlMixin = __dependency3__["default"] || __dependency3__;

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

    __exports__["default"] = FormGroupComponent;
  });