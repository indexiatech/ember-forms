"use strict";
var Mixin = require("ember").Mixin;
var Binding = require("ember").Binding;

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

exports["default"] = ControlMixin;