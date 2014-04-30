App.FormComponent = Ember.Forms.FormComponent.extend(
    layout: Ember.TEMPLATES["form"]
)

moduleForComponent('form');

test "form.layout", ->
    #Default
    component = @subject()
    component.set('form_layout','form')
    ok(@$().hasClass('form'))
    ok(!@$().hasClass('form-inline'))
    ok(!@$().hasClass('form-horizontal'))
    ok(component.get('isDefaultLayout'))
    ok(!component.get('isInline'))
    ok(!component.get('isHorizontal'))

    #Inline
    Ember.run(->
        component.set('form_layout','inline')
    )
    #first call to $() renders the component
    ok(@$().hasClass('form-inline'))
    ok(!@$().hasClass('form'))
    ok(!@$().hasClass('form-horizontal'))
    ok(!component.get('isDefaultLayout'))
    ok(component.get('isInline'))
    ok(!component.get('isHorizontal'))

    #Horizontal
    Ember.run(->
        component.set('form_layout','horizontal')
    )
    #first call to $() renders the component
    ok(@$().hasClass('form-horizontal'))
    ok(!@$().hasClass('form-inline'))
    ok(!@$().hasClass('form'))
    ok(!component.get('isDefaultLayout'))
    ok(!component.get('isInline'))
    ok(component.get('isHorizontal'))
