Ember.Forms.utils = {}

Ember.Forms.utils.createBoundSwitchAccessor = (switchValue, myProperty, myDefault = 'default') ->
    ((key, value) ->
        if arguments.length is 2
            @set myProperty, (if value then switchValue else myDefault)
        @get(myProperty) is switchValue
    ).property(myProperty)
