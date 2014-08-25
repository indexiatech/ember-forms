define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Mixin = __dependency1__.Mixin;
    var Binding = __dependency1__.Binding;

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

    __exports__["default"] = ControlMixin;
  });