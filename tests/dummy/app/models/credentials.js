import Em from 'ember';
import DS from 'ember-data';
import EV from 'ember-validations';

var Credentials = DS.Model.extend(EV.Mixin, {
  user: DS.attr('string'),
  password: DS.attr('string'),
  isntValid: Em.computed.not('isValid')
});

Credentials.reopen({
  validations: {
    user: {
      presence: true,
      length: {
        minimum: 3
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 4
      }
    }
  }
});

export default Credentials;