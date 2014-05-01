###**
Mixin that should be applied for all controls
###
Ember.Forms.ControlMixin = Ember.Mixin.create
    classNameBindings: ['hasFormControlClass:form-control']
    propertyBinding: 'parentView.property'
    placeholderBinding: 'parentView.placeholder'
    disabledBinding: 'parentView.disabled'
    attributeBindings: ['placeholderText:placeholder', 'disabled']
    hasFormControlClass: yes

    init: ->
        @_super()
        Ember.Binding.from("model.#{@get('property')}").to('value').connect(@)

    hasValue: (->
        @get('value') isnt null
    ).property('value').readOnly()

    placeholderText: (->
        @get('placeholder') || @get('property')
    ).property('placeholder')
