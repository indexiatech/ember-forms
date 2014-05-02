###
Form View

Syntax:
{{em-form form_layout="form|inline|horizontal" model="some_model_instance" action="some_action" submit_button="true|false"}}
###
Ember.Forms.FormComponent = Ember.Component.extend
    tagName: 'form'
    layoutName: 'form'
    classNameBindings: ['form_layout_class']
    attributesBinding: ['role']
    role: 'form'
    form_layout_class: (->
        switch @get('form_layout')
            when 'horizontal', 'inline' then "form-#{@get('form_layout')}"
            else 'form'

    ).property('form_layout')
    isDefaultLayout: Ember.Forms.utils.createBoundSwitchAccessor 'form', 'form_layout', 'form'
    isInline: Ember.Forms.utils.createBoundSwitchAccessor 'inline', 'form_layout', 'form'
    isHorizontal: Ember.Forms.utils.createBoundSwitchAccessor 'horizontal', 'form_layout', 'form'

    ##Exepcted component hash props##
    #The name of the action to perform on the controller when the form is successfully submitted
    action: 'submit'
    #Form model
    model: undefined
    #Form layout type
    form_layout: 'form'
    #if true a submit button is rendered
    submit_button: true
    #if true validation icons per group will be visible
    v_icons: true

    ###
    Form submit

    Optionally execute model validations and perform a form submission.
    ###
    submit: (e) ->
        e.preventDefault() if e
        #if there is no validate method on the model, then we just perform the action
        if Ember.isNone @get('model.validate')
            @get('targetObject').send(@get('action'))
        else
            promise = this.get('model').validate()

            promise.then(=>
                @get('targetObject').send @get('action') if @get('model.isValid')
            )

Ember.Handlebars.helper('em-form', Ember.Forms.FormComponent)