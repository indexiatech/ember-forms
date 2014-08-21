`import {Mixin, Binding, assert} from 'ember'`

###
A mixin that enriches a view that is attached to a model property that has validation
    support.

This mixin binds a property named `errors` to the model's `model.errors.@propertyName` array
###
HasPropertyValidationMixin = Mixin.create
#Can be overriden by views
    init: ->
        @_super()
        assert !Em.isNone(@get('propertyName')), 'propertyName is required.'
        Binding.from('model.errors.' + @get('propertyName')).to('errors').connect(this)

    status: (->
        if @get('errors.length') then 'error' else 'success'
    ).property('errors.length')

`export default HasPropertyValidationMixin`