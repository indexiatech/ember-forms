
Utils = 
    createBoundSwitchAccessor: (switchValue, myProperty, myDefault = 'default') ->
        ((key, value) ->
            if arguments.length is 2
                @set myProperty, (if value then switchValue else myDefault)
            @get(myProperty) is switchValue
        ).property(myProperty)

    namelize: (string) -> string.underscore().split('_').join(' ').capitalize()


`export default Utils`