###
Form Control Help

Syntax:
{{em-form-control-help}}
###
Ember.Forms.FormControlHelpComponent = Ember.Component.extend(
    tagName: 'span'
    classNames: ['help-block']
    layoutName: 'form_control_help'
    model: Ember.computed.alias('parentView.model')
    property: Ember.computed.alias('parentView.property')
    text: undefined

    init: ->
        @_super()
        Ember.Binding.from('model.errors.' + @get('property')).to('errors').connect(this)

    helpText: (->
        @get('errors.firstObject') || @get('text')
    ).property('text', 'errors.firstObject')

    hasHelp: (->
        @get('helpText')?.length > 0
    ).property('helpText')
)

Ember.Handlebars.helper('em-form-control-help', Ember.Forms.FormControlHelpComponent)
