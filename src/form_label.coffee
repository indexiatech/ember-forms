###
Form Label

Syntax:
{{em-form-label text="Some label"}}
###
Ember.Forms.FormLabelComponent = Ember.Component.extend
    tagName: 'label'
    layoutName: 'form-label'
    classNames: ['control-label']
    attributesBinding: ['for']

Ember.Handlebars.helper('em-form-label', Ember.Forms.FormLabelComponent)
