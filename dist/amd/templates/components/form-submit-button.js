define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.compile("{{#if form.isHorizontal}}\n    <div {{bind-attr class=horiClass}}>\n        <button {{bind-attr class=classes}} {{bind-attr disabled=disabled}}>{{text}}</button>\n    </div>\n{{else}}\n    <button {{bind-attr class=classes}} {{bind-attr disabled=disabled}}>{{text}}</button>\n{{/if}}\n");
  });