import Em from 'ember';

export default Em.Route.extend({
  model: function() {
    var model;
    model = this.get('store').createRecord('credentials');
    return model;
  }
});
