###**
Mixin that should be applied for all controls
###
Ember.Forms.ControlMixin = Ember.Mixin.create
    classNameBindings: ['class']
    class: 'form-control'

    init: ->
        @_super()
        Ember.Binding.from("model.#{@get('propertyName')}").to('value').connect(@)

    hasValue: (->
        @get('value') isnt null
    ).property('value').readOnly()
