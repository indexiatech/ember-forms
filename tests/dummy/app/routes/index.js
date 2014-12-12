import Em from 'ember';

export default Em.Route.extend({
  beforeModel: function() {
    return this.transitionTo('overview');
  }
});
