import Em from 'ember';

export default Em.ObjectController.extend({
  actions: {
    submit: function() {
      return alert("Logged in!");
    }
  }
});