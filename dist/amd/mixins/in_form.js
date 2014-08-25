define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Mixin = __dependency1__.Mixin;
    var Binding = __dependency1__.Binding;
    var assert = __dependency1__.assert;

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

    __exports__["default"] = InFormMixin;
  });