define(
  ["./utils/utils","./mixins/control","./mixins/in_form","./mixins/has_property","./mixins/has_property_validation","./form/form","./form/group","./form/checkbox","./form/control_help","./form/input","./form/label","./form/select","./form/submit_button","./form/text","./templates/components/form","./templates/components/form-group","./templates/components/formgroup/form-group","./templates/components/formgroup/form-group-control","./templates/components/formgroup/control-within-label","./templates/components/form-label","./templates/components/form-control-help","./templates/components/form-submit-button","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __dependency14__, __dependency15__, __dependency16__, __dependency17__, __dependency18__, __dependency19__, __dependency20__, __dependency21__, __dependency22__, __exports__) {
    "use strict";
    var Utils = __dependency1__["default"] || __dependency1__;

    var ControlMixin = __dependency2__["default"] || __dependency2__;

    var InFormMixin = __dependency3__["default"] || __dependency3__;

    var HasPropertyMixin = __dependency4__["default"] || __dependency4__;

    var HasPropertyValidationMixin = __dependency5__["default"] || __dependency5__;

    var FormComponent = __dependency6__["default"] || __dependency6__;

    var FormGroupComponent = __dependency7__["default"] || __dependency7__;

    var FormCheckboxComponent = __dependency8__["default"] || __dependency8__;

    var FormControlHelpComponent = __dependency9__["default"] || __dependency9__;

    var FormInputComponent = __dependency10__["default"] || __dependency10__;

    var FormLabelComponent = __dependency11__["default"] || __dependency11__;

    var FormSelectComponent = __dependency12__["default"] || __dependency12__;

    var FormSubmitComponent = __dependency13__["default"] || __dependency13__;

    var FormTextComponent = __dependency14__["default"] || __dependency14__;

    var FormTemplate = __dependency15__["default"] || __dependency15__;

    var FormGroupTemplate = __dependency16__["default"] || __dependency16__;

    var FormGroupPartialTemplate = __dependency17__["default"] || __dependency17__;

    var FormGroupControlPartialTemplate = __dependency18__["default"] || __dependency18__;

    var FormGroupControlWithinLabelPartialTemplate = __dependency19__["default"] || __dependency19__;

    var FormLabelTemplate = __dependency20__["default"] || __dependency20__;

    var FormControlHelpTemplate = __dependency21__["default"] || __dependency21__;

    var SubmitButtonTemplate = __dependency22__["default"] || __dependency22__;

    Ember.TEMPLATES['components/form'] = FormTemplate;;
    Ember.TEMPLATES['components/form-group'] = FormGroupTemplate;;
    Ember.TEMPLATES['components/formgroup/form-group'] = FormGroupPartialTemplate;;
    Ember.TEMPLATES['components/formgroup/form-group-control'] = FormGroupControlPartialTemplate;;
    Ember.TEMPLATES['components/formgroup/control-within-label'] = FormGroupControlWithinLabelPartialTemplate;;
    Ember.TEMPLATES['components/form-label'] = FormLabelTemplate;;
    Ember.TEMPLATES['components/form-control-help'] = FormControlHelpTemplate;;
    Ember.TEMPLATES['components/form-submit-button'] = SubmitButtonTemplate;;
    __exports__.Utils = Utils;
    __exports__.ControlMixin = ControlMixin;
    __exports__.HasPropertyMixin = HasPropertyMixin;
    __exports__.HasPropertyValidationMixin = HasPropertyValidationMixin;
    __exports__.FormComponent = FormComponent;
    __exports__.FormGroupComponent = FormGroupComponent;
    __exports__.FormCheckboxComponent = FormCheckboxComponent;
    __exports__.FormControlHelpComponent = FormControlHelpComponent;
    __exports__.FormInputComponent = FormInputComponent;
    __exports__.FormLabelComponent = FormLabelComponent;
    __exports__.FormSelectComponent = FormSelectComponent;
    __exports__.FormSubmitComponent = FormSubmitComponent;
    __exports__.FormTextComponent = FormTextComponent;
  });