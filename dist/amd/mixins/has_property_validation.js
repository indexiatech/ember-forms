define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Mixin = __dependency1__.Mixin;
    var Binding = __dependency1__.Binding;
    var assert = __dependency1__.assert;

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

    __exports__["default"] = HasPropertyValidationMixin;
  });