###**
Mixin that should be applied for all controls
###
Ember.Forms.ControlMixin = Ember.Mixin.create
    classNames: ['form-control']
    propertyBinding: 'parentView.property'
    placeholderBinding: 'parentView.placeholder'
    attributeBindings: ['placeholderText:placeholder']
    model: Ember.computed.alias 'parentView.model'

    init: ->
        @_super()
        Ember.Binding.from("model.#{@get('property')}").to('value').connect(@)

    hasValue: (->
        @get('value') isnt null
    ).property('value').readOnly()

    placeholderText: (->
        @get('placeholder') || @get('property')
    ).property('placeholder')
