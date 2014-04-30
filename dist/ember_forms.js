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