(function (componentFactory) {

  componentFactory.register('DataCaptureForm', DataCaptureForm);

  /**
   * Displays form and save data in workflow.
   * @param step The GuestList step.
   * @param cb callback after the component is ready.
   */
  function DataCaptureForm (step, cb) {

    var component = {
      render: render
    };

    /**
     * 'Draw' the component.
     * @param placeholder The place to put the Html.
     * @param workflow The workflow to be used
     * @param cb Callback called before finish the step.
     */
    function render (placeholder, workflow, cb) {
      
      var inputs = [];

      placeholder.empty();
      $('<h4/>', { text: step.title}).appendTo(placeholder);
      
      _(step.fields).forEach(function (field) {

        var fieldId = (field.name + '_' + Math.random()).replace(/\./g, '_');
        var formGroup = $('<div/>', { class: 'form-group' }).appendTo(placeholder);
        var value = _.get(workflow.data, field.name);
        var input;
        
        var label = $('<label/>', { for: fieldId, text:  field.label, class: 'control-label' })
        .appendTo(formGroup);

        if (field.type === 'option') {
                  
          input = $('<select />', { id: fieldId, name: field.name, class: 'form-control'})
          .append($('<option />', { text: '-- Pick one --', value: '', disabled: true, selected: true }))
          .appendTo(formGroup);
          _(field.values).forEach(function (value) {
            input.append($('<option />', { text: value.name }));
          });
          
        } else {

          input = $('<input/>', { 
            id: fieldId, 
            type: field.type,
            name: field.name, 
            value: value
          });

          if (field.type === 'checkbox') {
            
            label.text('');
            input.appendTo(label);
            label.append(' ' + field.label);

          } else {
          
            label.appendTo(formGroup);
            input.addClass('form-control');
            input.appendTo(formGroup);

          }

        }

        if (field.required) {
          input.prop('required', true);
        }

        if (field.readonly) {
          input.prop('readonly', true);
        }

        inputs.push(input);

      });
      $('<button/>', { class: 'btn btn-primary btn-block', text: 'Next' })
      .click(function () {

        var valid = true;

        _(inputs).forEach(function (input) {
          if (!input[0].checkValidity()) {
            $(input[0]).addClass('invalid');
            valid = false;
            return false;
          }
          if (input[0].type === 'checkbox') {
            _.set(workflow.data, input[0].name, input[0].checked);
          } else {
            _.set(workflow.data, input[0].name, input[0].value);
          }
          
        });

        if (valid) {
          if (cb) { cb(step.id, workflow.data); }
          workflow.next(step.next);
        }
        

      })
      .appendTo(placeholder);

    }

    return cb(component);

  } 
})(window.ar.componentFactory);
