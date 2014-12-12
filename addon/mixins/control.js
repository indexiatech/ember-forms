import Em from 'ember';

/***
Mixin that should be applied for all controls
 */
export default Em.Mixin.create({
  classNameBindings: ['class'],
  "class": 'form-control',
  init: function() {
    this._super();
    return Em.Binding.from("model." + (this.get('propertyName'))).to('value').connect(this);
  },
  hasValue: (function() {
    return this.get('value') !== null;
  }).property('value').readOnly()
});