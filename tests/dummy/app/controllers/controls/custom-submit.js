import Em from 'ember';
/*global alert*/

export default Em.ObjectController.extend({
  actions: {
    submit: function() {
      return alert("Logged in!");
    }
  }
});