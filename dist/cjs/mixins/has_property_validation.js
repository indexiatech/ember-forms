"use strict";
var Mixin = require("ember").Mixin;
var Binding = require("ember").Binding;
var assert = require("ember").assert;

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

exports["default"] = HasPropertyValidationMixin;