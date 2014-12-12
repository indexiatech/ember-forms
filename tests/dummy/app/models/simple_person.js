import Em from 'ember';
import DS from 'ember-data';
import EV from 'ember-validations';

var SimplePerson = DS.Model.extend(EV.Mixin, {
  name: DS.attr('string'),
  password: DS.attr('string'),
  comment: DS.attr('string'),
  active: DS.attr('boolean'),
  gender: DS.attr('string'),
  nameHasValue: (function() {
    var _ref;
    return !((_ref = this.get('name')) != null ? _ref.length : void 0);
  }).property('name'),
  asjson: (function() {
    return "name: " + (this.get('name')) + ", password: " + (this.get('password')) + ", comment: " + (this.get('comment')) + ", active: " + (this.get('active')) + ", gender: " + (this.get('gender'));
  }).property('name', 'password', 'comment', 'active', 'gender')
});

SimplePerson.reopen({
  validations: {
    name: {
      presence: true,
      length: {
        minimum: 5
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 6
      }
    },
    comment: {
      presence: true
    },
    gender: {
      presence: true
    }
  }
});

export default SimplePerson;