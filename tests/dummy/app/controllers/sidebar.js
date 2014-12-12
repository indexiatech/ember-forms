import Em from 'ember';

export default Em.ArrayController.extend({
  needs: ['application'],
  model: [
    {
      route: 'overview',
      text: 'Overview',
      items: []
    }, {
      route: 'getstarted',
      text: 'Getting started',
      items: []
    }, {
      route: 'quickexample',
      text: '5 Minutes Example',
      items: []
    }, {
      route: 'form',
      text: 'Form',
      items: []
    }, {
      route: 'controls',
      text: 'Controls',
      items: [
        {
          route: 'controls.input',
          text: 'Input'
        }, {
          route: 'controls.text',
          text: 'Textarea'
        }, {
          route: 'controls.checkbox',
          text: 'Checkbox'
        }, {
          route: 'controls.select',
          text: 'Select'
        }, {
          route: 'controls.html5',
          text: 'Html5'
        }, {
          route: 'controls.custom-submit',
          text: 'Custom Submit'
        }, {
          route: 'controls.wrapped-input',
          text: 'Wrapped Input'
        }
      ]
    }
  ]
});