###
Form Control Help

Renders a textual help of the control.

Note: currently must be a direct descendant of a form-group or 'property' must be explicitly defined

Syntax:
{{em-form-control-help}}
###
Em.Forms.FormControlHelpComponent = Em.Component.extend(Em.Forms.InFormMixin, Em.Forms.HasPropertyMixin,
    tagName: 'span'
    classNames: ['help-block']
    classNameBindings: ['extraClass', 'horiClassCalc']
    layoutName: 'components/form-control-help'

    #The text to display
    text: undefined
    #Extra CSS classes
    extraClass: undefined

    #TODO: Unit test
    horiClass: 'col-sm-offset-2 col-sm-10'
    horiClassCalc: (->
        @get('horiClass') if @get('form.isHorizontal') and @get('horiClass')
    ).property('form.isHorizontal')

    init: ->
        @_super()
        Em.Binding.from('model.errors.' + @get('propertyName')).to('errors').connect(this)

    helpText: (->
        @get('errors.firstObject') || @get('text')
    ).property('text', 'errors.firstObject')

    hasHelp: (->
        @get('helpText')?.length > 0
    ).property('helpText')

    hasError: (->
        @get('errors')?.length
    ).property('errors.length')
)

Em.Handlebars.helper('em-form-control-help', Em.Forms.FormControlHelpComponent)
