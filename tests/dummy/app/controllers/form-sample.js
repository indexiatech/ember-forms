import Em from 'ember';
/*global alert*/

export default Em.Controller.extend({
  layout: 'default',
  genderOptions: [
    {
      id: 'M',
      name: 'Male'
    }, {
      id: 'F',
      name: 'Female'
    }, {
      id: 'O',
      name: 'Other'
    }
  ],
  actions: {
    submit: function() {
      return alert("Submitted!");
    },
    layout: function(t) {
      return this.set('layout', t);
    }
  }
});
