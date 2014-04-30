(function() {

(function() {

var _ref;

Ember.Forms = Ember.Namespace.create();

Ember.Forms.VERSION = '0.0.1';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Ember Forms', Ember.Forms.VERSION);
}


})();

(function() {

Ember.Forms.utils = {};

Ember.Forms.utils.createBoundSwitchAccessor = function(switchValue, myProperty, myDefault) {
  if (myDefault == null) {
    myDefault = 'default';
  }
  return (function(key, value) {
    if (arguments.length === 2) {
      this.set(myProperty, (value ? switchValue : myDefault));
    }
    return this.get(myProperty) === switchValue;
  }).property(myProperty);
};


})();

(function() {


/***
Mixin that should be applied for all controls
 */
Ember.Forms.ControlMixin = Ember.Mixin.create({
  classNames: ['form-control'],
  propertyBinding: 'parentView.property',
  placeholderBinding: 'parentView.placeholder',
  attributeBindings: ['placeholderText:placeholder'],
  model: Ember.computed.alias('parentView.model'),
  init: function() {
    this._super();
    return Ember.Binding.from("model." + (this.get('property'))).to('value').connect(this);
  },
  hasValue: (function() {
    return this.get('value') !== null;
  }).property('value').readOnly(),
  placeholderText: (function() {
    return this.get('placeholder') || this.get('property');
  }).property('placeholder')
});


})();

(function() {

Ember.TEMPLATES["form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "em-form-submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "submit_button", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["form_control_help"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["form_group"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
    'text': ("labelText"),
    'viewName': ("labelViewName")
  },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "canShowErrors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-form-control-help'] || (depth0 && depth0['em-form-control-help']),options={hash:{
    'text': ("help"),
    'viewName': ("helpViewName")
  },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-control-help", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "labelText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "controlView", {hash:{
    'viewName': ("controlViewName")
  },hashTypes:{'viewName': "ID"},hashContexts:{'viewName': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  stack1 = helpers.unless.call(depth0, "inline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["form_label"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["form_submit_button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

})();

(function() {


/*
Form View

Syntax:
{{em-form form_layout="form|inline|horizontal" model="some_model_instance" action="some_action" submit_button="true|false"}}
 */
Ember.Forms.FormComponent = Ember.Component.extend({
  tagName: 'form',
  layoutName: 'form',
  classNameBindings: ['form_layout_class'],
  attributesBinding: ['role'],
  role: 'form',
  form_layout_class: (function() {
    switch (this.get('form_layout')) {
      case 'horizontal':
      case 'inline':
        return "form-" + (this.get('form_layout'));
      default:
        return 'form';
    }
  }).property('form_layout'),
  isDefaultLayout: Ember.Forms.utils.createBoundSwitchAccessor('form', 'form_layout', 'form'),
  isInline: Ember.Forms.utils.createBoundSwitchAccessor('inline', 'form_layout', 'form'),
  isHorizontal: Ember.Forms.utils.createBoundSwitchAccessor('horizontal', 'form_layout', 'form'),
  action: 'submit',
  model: void 0,
  form_layout: 'form',
  submit_button: true,

  /*
  Form submit
  
  Optionally execute model validations and perform a form submission.
   */
  submit: function(e) {
    var promise;
    if (e) {
      e.preventDefault();
    }
    if (Ember.isNone(this.get('model.validate'))) {
      return this.get('targetObject').send(this.get('action'));
    } else {
      promise = this.get('model').validate();
      return promise.then((function(_this) {
        return function() {
          if (_this.get('model.isValid')) {
            return _this.get('targetObject').send(_this.get('action'));
          }
        };
      })(this));
    }
  }
});

Ember.Handlebars.helper('em-form', Ember.Forms.FormComponent);


})();

(function() {


/*
Form Control Help

Syntax:
{{em-form-control-help}}
 */
Ember.Forms.FormControlHelpComponent = Ember.Component.extend({
  tagName: 'span',
  classNames: ['help-block'],
  layoutName: 'form_control_help',
  model: Ember.computed.alias('parentView.model'),
  property: Ember.computed.alias('parentView.property'),
  text: void 0,
  init: function() {
    this._super();
    return Ember.Binding.from('model.errors.' + this.get('property')).to('errors').connect(this);
  },
  helpText: (function() {
    return this.get('errors.firstObject') || this.get('text');
  }).property('text', 'errors.firstObject'),
  hasHelp: (function() {
    var _ref;
    return ((_ref = this.get('helpText')) != null ? _ref.length : void 0) > 0;
  }).property('helpText')
});

Ember.Handlebars.helper('em-form-control-help', Ember.Forms.FormControlHelpComponent);


})();

(function() {


/*
Form Group

Wraps labels and controls for optimum spacing and validation styles.
Currently must be a direct descendant of a form view

Syntax:
{{em-form-group
    //The label of the control
    label="Some Label"
    //validation state
    status="none|error|warning|success"
}}
 */
Ember.Forms.FormGroupComponent = Ember.Component.extend({
  tagName: 'div',
  layoutName: 'form_group',
  classNames: ['form-group'],
  classNameBindings: ['hasSuccess', 'hasWarning', 'hasError', 'hasHelp:has-error'],
  model: Ember.computed.alias('parentView.model'),
  inline: Ember.computed.alias('parentView.isInline'),
  hasError: Ember.Forms.utils.createBoundSwitchAccessor('error', 'status', 'none'),
  hasWarning: Ember.Forms.utils.createBoundSwitchAccessor('warning', 'status', 'none'),
  hasSuccess: Ember.Forms.utils.createBoundSwitchAccessor('success', 'status', 'none'),
  status: 'none',
  label: false,
  init: function() {
    var helpViewName;
    this._super();
    this.set('controlViewName', "control-view-name-" + (this.get('elementId')));
    helpViewName = "help-view-name-" + (this.get('elementId'));
    this.set('helpViewName', helpViewName);
    this.set('labelViewName', "label-view-name-" + (this.get('elementId')));
    return Ember.Binding.from("" + helpViewName + ".hasHelp").to('hasHelp').connect(this);
  },
  labelText: (function() {
    return this.get('label') || this.get('property');
  }).property('label'),
  hasLabel: (function() {
    return this.get('label') !== false;
  }).property('label').readOnly(),
  focusOut: function() {
    this.set('canShowErrors', true);
    if (!this.get('hasHelp')) {
      return this.set('status', 'success');
    }
  }
});

Ember.Handlebars.helper('em-form-group', Ember.Forms.FormGroupComponent);


})();

(function() {


/*
Form Label

Syntax:
{{em-form-label text="Some label"}}
 */
Ember.Forms.FormLabelComponent = Ember.Component.extend({
  tagName: 'label',
  layoutName: 'form_label',
  classNames: ['control-label'],
  attributesBinding: ['for']
});

Ember.Handlebars.helper('em-form-label', Ember.Forms.FormLabelComponent);


})();

(function() {


/*
Form Input

Syntax:
{{em-input property="property name"}}
 */
Ember.Forms.FormInputComponent = Ember.Forms.FormGroupComponent.extend({
  controlView: Em.TextField.extend(Em.Forms.ControlMixin)
});

Ember.Handlebars.helper('em-input', function(options) {
  return Ember.Handlebars.helpers.view.call(this, Ember.Forms.FormInputComponent, options);
});


})();

(function() {


/*
Form Submit Button

Syntax:
{{em-form-submit text="Submit"}}
 */
Ember.Forms.FormSubmitComponent = Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-default'],
  layoutName: 'form_submit_button',
  text: 'Submit',
  type: 'submit',
  attributeBindings: ['type', 'value', 'disabled'],
  model: Ember.computed.alias('parentView.model'),
  disabled: (function() {
    return !this.get('model.isValid');
  }).property('model.isValid')
});

Ember.Handlebars.helper('em-form-submit', Ember.Forms.FormSubmitComponent);


})();

})();

(function() {

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "render", "navbar", options))));
  data.buffer.push("\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-xs-12\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sidebar", options) : helperMissing.call(depth0, "render", "sidebar", options))));
  data.buffer.push("\n        </div>\n        <div class=\"col-sm-9 col-xs-12 page\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["block_form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
  if (helper = helpers['bs-form-group']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['bs-form-group']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['bs-form-group']) { stack1 = blockHelperMissing.call(depth0, 'bs-form-group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data}
  if (helper = helpers['bs-form-group']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['bs-form-group']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['bs-form-group']) { stack1 = blockHelperMissing.call(depth0, 'bs-form-group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-label'] || (depth0 && depth0['bs-form-label']),options={hash:{
    'text': ("Name")
  },hashTypes:{'text': "STRING"},hashContexts:{'text': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-label", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-input'] || (depth0 && depth0['bs-form-input']),options={hash:{
    'placeholder': ("name")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-control-help'] || (depth0 && depth0['bs-form-control-help']),options={hash:{
    'text': ("Please enter full name")
  },hashTypes:{'text': "STRING"},hashContexts:{'text': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-control-help", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-label'] || (depth0 && depth0['bs-form-label']),options={hash:{
    'text': ("Password")
  },hashTypes:{'text': "STRING"},hashContexts:{'text': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-label", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-input'] || (depth0 && depth0['bs-form-input']),options={hash:{
    'placeholder': ("password"),
    'type': ("password")
  },hashTypes:{'placeholder': "STRING",'type': "STRING"},hashContexts:{'placeholder': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
  if (helper = helpers['bs-form']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['bs-form']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['bs-form']) { stack1 = blockHelperMissing.call(depth0, 'bs-form', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n<h3>And the following template:</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"hbs\">\n        &#123;&#123;#form&#125;&#125;\n        &#123;&#123;&#125;&#125;\n        &#123;&#123;/form&#125;&#125;\n    </code></pre>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["controls"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<h1>Controls</h1>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["controls/text"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>Text</h3>");
  
});

Ember.TEMPLATES["getstarted"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Getting Started</h1>\n\n<ol>\n    <li>\n        <p>Installing via <i>bower</i> is the simplest form:</p>\n        <pre><code class=\"bash\">bower install ember-addons.forms</code></pre>\n    </li>\n    <li>\n        <p>Include Bootstrap for styling</p>\n        <pre><code class=\"html\">&lt;link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\"&gt;</code></pre>\n    </li>\n    <li>\n        <p>Include Ember Forms</p>\n        <pre><code class=\"html\">&lt;link href=\"bower_components/bs_for_ember/dist/css/ember_forms.css\" rel=\"stylesheet\"&gt;\n&lt;script src=\"bower_components/bs_for_ember/dist/js/ember_forms.js\"&gt;</script></code></pre>\n    </li>\n</ol>\n\nOf course you need jquery, ember.js and handlebars included in your project too.");
  
});

Ember.TEMPLATES["navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<nav role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"buttonin\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\" class=\"navbar-toggle\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a href=\"#\" class=\"navbar-brand\">Ember Forms</a>\n        </div>\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-home\"></i>\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://github.com/ember-addons/ember-forms\">\n                        <i class=\"fa fa-github-alt\"></i>\n                        Github\n                    </a>\n                </li>\n            </ul>\n            <form class=\"navbar-form navbar-right\">\n                <a href=\"zip/ember-forms.zip\" style=\"font-weight:bold\" class=\"btn btn-success\">\n                    <i class=\"fa fa-save\"></i>\n                    Download 1~ kb\n                </a>\n            </form>\n            <div class=\"socials\" style=\"text-align: center\">\n                <ul class=\"bs-social-buttons\">\n                    <li>\n                        <!-- github -->\n                        <div>\n                        <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=ember-addons&amp;repo=ember-forms&amp;type=watch&amp;count=true\" width=\"100\" height=\"20\" title=\"Star on GitHub\"></iframe>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>");
  
});

Ember.TEMPLATES["overview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'property': ("firstName"),
    'label': ("First Name"),
    'placeholder': ("Please enter first name.")
  },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'property': ("lastName"),
    'label': ("Last Name"),
    'placeholder': ("Please enter last name.")
  },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Getting Started");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Controls");
  }

  data.buffer.push("<h1>Overview</h1>\n\n<p>\n<b>Ember Forms</b> is a small library for <i>Ember.js</i> that allows you to easily create astonishing forms\n    with support for <i> layouts, styles & validations</i> thanks to the combination of the beauty of <i>Bootstrap</i> and the power of <i>Ember</i>.\n</p>\n\n<hr/>\n\n<h4>And here is the reslt in a nutshell...</h4>\n\n<div class=\"well line-example\">\n    ");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'model': ("model")
  },hashTypes:{'model': "ID"},hashContexts:{'model': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<h1>Want to see more?</h1>\n<p>\n    For getting started & installation steps, please visit ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "getstarted", options) : helperMissing.call(depth0, "link-to", "getstarted", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n<!--\n<p>\n    To see controls in action, visit ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "controls", options) : helperMissing.call(depth0, "link-to", "controls", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n-->\n");
  return buffer;
  
});

Ember.TEMPLATES["quickexample"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'property': ("firstName"),
    'label': ("First Name"),
    'placeholder': ("Please enter first name.")
  },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'property': ("lastName"),
    'label': ("Last Name"),
    'placeholder': ("Please enter last name.")
  },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<h1>5 Minutes Example</h1>\n\n<p>Here's a quick sample how it works:</p>\n<h3>Given the following controller:</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"coffeescript\">\n        MyController = Em.Controller.extend\n            actions:\n                submit:\n                    alert \"Submitted!\"\n    </code></pre>\n</div>\n\n\n<h3>And the following model:</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"coffeescript\">\n        User = Em.Model.extend\n            firstName: DS.attr 'string'\n            lastName: DS.attr 'string'\n\n        User.reopen\n            validations:\n                firstName:\n                    presence: true\n                    length: { minimum: 5 }\n                lastName:\n                    presence: true\n                    length: { minimum: 10 }\n    </code></pre>\n</div>\n\n<h3>With this template:</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"coffeescript\">\n    {{#em-form model=model}}\n        {{em-input property=\"firstName\" label=\"First Name\" placeholder=\"Please enter first name.\"}}\n        {{em-input property=\"lastName\" label=\"Last Name\" placeholder=\"Please enter last name.\"}}\n    {{/em-form}}\n    </code></pre>\n</div>\n\n<h3>The result would be:</h3>\n\n<div class=\"well line-example\">\n    ");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'model': ("model")
  },hashTypes:{'model': "ID"},hashContexts:{'model': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <ul class=\"nav\">\n            ");
  stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"well sidebar\">\n    <ul class=\"nav\">\n        ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n</div>");
  return buffer;
  
});

})();

(function() {

window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});


})();

(function() {




})();

(function() {

App.Person = DS.Model.extend(Ember.Validations.Mixin, {
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});

App.Person.reopen({
  validations: {
    firstName: {
      presence: true,
      length: {
        minimum: 5
      }
    },
    lastName: {
      presence: true,
      length: {
        minimum: 10
      }
    }
  }
});

Em.Route.reopen({
  renderTemplate: function() {
    this._super();
    return Em.run.next(this, function() {
      return $('pre code').each(function(i, e) {
        return hljs.highlightBlock(e);
      });
    });
  }
});

App.Router.map(function() {
  this.route('overview');
  this.route('getstarted');
  this.route('quickexample');
  return this.resource('controls', function() {
    return this.route('text');
  });
});

App.IndexRoute = Em.Route.extend({
  beforeModel: function() {
    return this.transitionTo('overview');
  }
});

App.OverviewRoute = Em.Route.extend({
  model: function() {
    var model;
    model = this.get('store').createRecord('person');
    return model;
  }
});

App.QuickexampleRoute = App.OverviewRoute.extend();

App.QuickexampleController = Em.Controller.extend({
  actions: {
    submit: function() {
      return alert("Submitted!");
    }
  }
});

App.OverviewController = App.QuickexampleController.extend();

App.SidebarController = Em.ArrayController.extend({
  content: [
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
    }
  ]
});


})();