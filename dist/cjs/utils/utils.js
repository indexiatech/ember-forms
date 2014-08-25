"use strict";
var Utils;

Utils = {
  createBoundSwitchAccessor: function(switchValue, myProperty, myDefault) {
    if (myDefault == null) {
      myDefault = 'default';
    }
    return (function(key, value) {
      if (arguments.length === 2) {
        this.set(myProperty, (value ? switchValue : myDefault));
      }
      return this.get(myProperty) === switchValue;
    }).property(myProperty);
  },
  namelize: function(string) {
    return string.underscore().split('_').join(' ').capitalize();
  }
};

exports["default"] = Utils;