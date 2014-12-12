import Em from 'ember';

export default Em.Controller.extend({
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
  ]
});
