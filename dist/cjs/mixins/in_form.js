"use strict";
var Mixin = require("ember").Mixin;
var Binding = require("ember").Binding;
var assert = require("ember").assert;

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

exports["default"] = InFormMixin;