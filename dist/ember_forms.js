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

Ember.Forms.utils.namelize = function(string) {
  return string.underscore().split('_').join(' ').capitalize();
};


})();

(function() {


/***
Mixin that should be applied for all controls
 */
Ember.Forms.ControlMixin = Ember.Mixin.create({
  classNameBindings: ['hasFormControlClass:form-control'],
  propertyBinding: 'parentView.property',
  placeholderBinding: 'parentView.placeholder',
  disabledBinding: 'parentView.disabled',
  attributeBindings: ['placeholderText:placeholder', 'disabled'],
  hasFormControlClass: true,
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
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "yieldInsideLabel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
    'text': ("labelText"),
    'viewName': ("labelViewName")
  },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "controlView", {hash:{
    'viewName': ("controlViewName"),
    'model': ("model"),
    'property': ("property")
  },hashTypes:{'viewName': "ID",'model': "ID",'property': "ID"},hashContexts:{'viewName': depth0,'model': depth0,'property': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
    'text': ("labelText"),
    'viewName': ("labelViewName")
  },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "controlView", {hash:{
    'viewName': ("controlViewName"),
    'model': ("model"),
    'property': ("property")
  },hashTypes:{'viewName': "ID",'model': "ID",'property': "ID"},hashContexts:{'viewName': depth0,'model': depth0,'property': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "controlView", {hash:{
    'viewName': ("controlViewName"),
    'model': ("model")
  },hashTypes:{'viewName': "ID",'model': "ID"},hashContexts:{'viewName': depth0,'model': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <span class=\"form-control-feedback\"><i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("v_icon")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></span>\n");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "canShowErrors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-form-control-help'] || (depth0 && depth0['em-form-control-help']),options={hash:{
    'text': ("help"),
    'viewName': ("helpViewName")
  },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-control-help", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "labelText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  stack1 = helpers['if'].call(depth0, "v_icons", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  stack1 = helpers.unless.call(depth0, "inline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["form_label"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
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
  }).property('helpText'),
  hasError: (function() {
    var _ref;
    return (_ref = this.get('errors')) != null ? _ref.length : void 0;
  }).property('errors.length')
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
  classNameBindings: ['formGroup', 'hasSuccess', 'hasWarning', 'hasError', 'v_icons:has-feedback'],
  attributeBindings: ['disabled'],
  model: Ember.computed.alias('parentView.model'),
  inline: Ember.computed.alias('parentView.isInline'),
  hasSuccess: (function() {
    return this.get('status') === 'success';
  }).property('status'),
  hasWarning: (function() {
    return this.get('status') === 'warning';
  }).property('status'),
  hasError: (function() {
    return this.get('status') === 'error';
  }).property('status'),
  formGroup: true,
  label: false,
  yieldInsideLabel: false,
  v_icons: true,
  v_success_icon: 'fa fa-check',
  v_warn_icon: 'fa fa-exclamation-triangle',
  v_error_icon: 'fa fa-times',
  v_icon: (function() {
    switch (this.get('status')) {
      case 'success':
        return this.get('v_success_icon');
      case 'warning':
      case 'warn':
        return this.get('v_warn_icon');
      case 'error':
        return this.get('v_error_icon');
      default:
        return null;
    }
  }).property('status'),
  init: function() {
    var helpViewName;
    this._super();
    this.set('controlViewName', "control-view-name-" + (this.get('elementId')));
    helpViewName = "help-view-name-" + (this.get('elementId'));
    this.set('helpViewName', helpViewName);
    this.set('labelViewName', "label-view-name-" + (this.get('elementId')));
    Ember.Binding.from("" + helpViewName + ".hasHelp").to('hasHelp').connect(this);
    return Ember.Binding.from("" + helpViewName + ".hasError").to('helpHasErrors').connect(this);
  },
  hasErrorChanged: (function() {
    if (this.get('helpHasErrors')) {
      return this.set('status', 'error');
    } else {
      return this.set('status', 'success');
    }
  }).observes('helpHasErrors'),
  labelText: (function() {
    return this.get('label') || Ember.Forms.utils.namelize(this.get('property'));
  }).property('label'),
  hasLabel: (function() {
    return this.get('label') !== false;
  }).property('label').readOnly(),
  focusOut: function() {
    this.set('canShowErrors', true);
    if (!this.get('hasError')) {
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
  controlView: Em.TextField.extend(Em.Forms.ControlMixin, {
    typeBinding: 'parentView.type'
  })
});

Ember.Handlebars.helper('em-input', function(options) {
  return Ember.Handlebars.helpers.view.call(this, Ember.Forms.FormInputComponent, options);
});


})();

(function() {


/*
Form Input

Syntax:
{{em-text property="property name"}}
 */
Ember.Forms.FormTextComponent = Ember.Forms.FormGroupComponent.extend({
  attributeBindings: ['cols', 'rows'],
  controlView: Em.TextArea.extend(Em.Forms.ControlMixin, {
    typeBinding: 'parentView.type',
    colsBinding: 'parentView.cols',
    rowsBinding: 'parentView.rows'
  })
});

Ember.Handlebars.helper('em-text', function(options) {
  return Ember.Handlebars.helpers.view.call(this, Ember.Forms.FormTextComponent, options);
});


})();

(function() {


/*
Form Input

Syntax:
{{em-checkbox property="property name"}}
 */
Ember.Forms.FormCheckboxComponent = Ember.Forms.FormGroupComponent.extend({
  formGroup: false,
  v_icons: false,
  yieldInsideLabel: true,
  controlView: Em.Checkbox.extend(Ember.Forms.ControlMixin, {
    hasFormControlClass: false,
    init: function() {
      this._super();
      return Ember.Binding.from("model." + (this.get('property'))).to('checked').connect(this);
    }
  })
});

Ember.Handlebars.helper('em-checkbox', function(options) {
  return Ember.Handlebars.helpers.view.call(this, Ember.Forms.FormCheckboxComponent, options);
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