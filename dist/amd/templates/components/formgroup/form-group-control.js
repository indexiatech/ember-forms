define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.compile("{{#if controlWrapper}}\n    <div {{bind-attr class=controlWrapper}}>\n        {{view controlView viewName=controlViewName property=propertyName id=cid}}\n    </div>\n{{else}}\n    {{view controlView viewName=controlViewName property=propertyName id=cid}}\n{{/if}}");
  });