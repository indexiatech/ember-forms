App.FormGroupComponent = Ember.Forms.FormGroupComponent.extend(
    layout: Ember.TEMPLATES["form_group"]
)

moduleForComponent('form-group');

test "form.layout", ->
    #Default
    component = @subject()
    ok(@$().hasClass('form-group'))

    #no label
    ok(!component.get('hasLabel'))
    Ember.run(->
        component.set('label', 'hello')
    )
    ok(component.get('hasLabel'))