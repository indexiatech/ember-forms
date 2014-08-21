`import {Mixin, Binding} from 'ember'`

###**
Mixin that should be applied for all controls
###
ControlMixin = Mixin.create
    classNameBindings: ['class']
    class: 'form-control'

    init: ->
        @_super()
        Binding.from("model.#{@get('propertyName')}").to('value').connect(@)

    hasValue: (->
        @get('value') isnt null
    ).property('value').readOnly()


`export default ControlMixin`