"use strict";
var Mixin = require("ember").Mixin;
var Binding = require("ember").Binding;
var assert = require("ember").assert;

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