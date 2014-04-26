## Bundle all files together via neuter

Ember.Forms = Ember.Namespace.create()
Ember.Forms.VERSION = '0.0.1'
Ember.libraries?.register 'Ember Forms', Ember.Forms.VERSION

require 'build/src/templates'