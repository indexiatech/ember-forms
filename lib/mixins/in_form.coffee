`import {Mixin, Binding, assert} from 'ember'`

###
Find the form of the view that merges this mixin
###
InFormMixin = Mixin.create
    form: (->
#        @$() in calc props causes 're-render after it rendered but before it was inserted into the DOM'
#        form = @$().closest('form')
#        Ember.assert(form.length > 0, 'Cannot find form')
#        if form.length > 0 then Ember.View.views[form[0].id] else null

        parentView = @get('parentView')
        while parentView
            return parentView if parentView.get('tagName') is 'form'
            parentView = parentView.get('parentView')

        assert(false, 'Cannot find form')
    ).property('parentView')

    model: (->
        @get('form.model')
    ).property('form')

`export default InFormMixin`