"use strict";
exports["default"] = Ember.Handlebars.compile("{{yield}}\n{{#if submit_button}}\n    {{em-form-submit}}\n{{/if}}");