define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.compile("{{yield}}\n{{#if submit_button}}\n    {{em-form-submit}}\n{{/if}}");
  });