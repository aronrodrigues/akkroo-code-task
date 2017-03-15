(function (window, componentFactory) {

  componentFactory.register('Message', Message);
  
  /**
   * Displays a message.
   * @param step The GuestList step.
   * @param cb callback after the component is ready.
   */
  function Message (step, cb) {

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
      
      placeholder.empty();
      $('<h4/>', { text: step.title }).appendTo(placeholder);

      var message = step.message;

      if (step.vars) {
        _.forOwn(step.vars, function(value, key) {
          
          value = window.ar._loadData(value, workflow)
          message = message.replace(new RegExp('%' + key + '%', 'g'), value);

        });
      }

      $('<p />', { text: message }).appendTo(placeholder);
      
      $('<button/>', { class: 'btn btn-primary btn-block', text: 'Next' })
      .click(function () {
        if (cb) { cb(step.id, workflow.data); }
        workflow.next(step.next);
      })
      .appendTo(placeholder);

    }

    return cb(component);

  } 

})(window, window.ar.componentFactory);
