## Bundle all files together via neuter

Ember.Forms = Ember.Namespace.create()
Ember.Forms.VERSION = '0.0.1'
Ember.libraries?.register 'Ember Forms', Ember.Forms.VERSION

require 'build/src/utils'
require 'build/src/control_mixin'
require 'build/src/templates'
require 'build/src/form'
require 'build/src/form_control_help'
require 'build/src/form_group'
require 'build/src/form_label'
require 'build/src/form_input'
require 'build/src/form_text'
require 'build/src/form_checkbox'
require 'build/src/form_submit_button'