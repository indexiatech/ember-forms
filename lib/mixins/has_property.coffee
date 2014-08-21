`import {Mixin, Binding, assert} from 'ember'`

###
A mixin that enriches a view that is attached to a model property.

The property name by default is taken from the parentView unless explictly
    defined in the `property` variable.

This mixin also binds a property named `errors` to the model's `model.errors.@propertyName` array
###
HasPropertyMixin = Mixin.create
    #Can be overriden by views
    property: undefined

    propertyName: (->
        if @get('property')
            @get('property')
        else if @get('parentView.property')
            @get('parentView.property')
        else
            assert false, 'Property could not be found.'
    ).property('parentView.property')

    init: ->
        @_super()
        Binding.from('model.errors.' + @get('propertyName')).to('errors').connect(this)

`export default HasPropertyMixin`