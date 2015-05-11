var Utils;
export default Utils = {
  createBoundSwitchAccessor: function(switchValue, myProperty, myDefault) {
    if (myDefault == null) {
      myDefault = 'default';
    }
    return Em.computed(myProperty, function(key, value) {
      if (arguments.length === 2) {
        this.set(myProperty, (value ? switchValue : myDefault));
      }
      return this.get(myProperty) === switchValue;
    });
  },
  namelize: function(string) {
    return string.underscore().split('_').join(' ').capitalize();
  }
};
