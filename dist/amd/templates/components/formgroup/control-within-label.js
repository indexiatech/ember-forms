define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.compile("{{#em-form-label text=label horiClass=\'\' inlineClass=\'\' viewName=labelViewName}}\n    {{partial \'components/formgroup/form-group-control\'}}\n{{/em-form-label}}");
  });