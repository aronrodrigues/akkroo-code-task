(function (componentFactory) {

  componentFactory.register('Branding', Branding);

  /**
   * Displays an image.
   * @param step The GuestList step.
   * @param cb callback after the component is ready.
   */
  function Branding (step, cb) {

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
      $('<img />', { src: step.imageUrl })
      .click(function () {
        if (cb) { cb(step.id, workflow.data); }
        workflow.next(step.next);
      })
      .appendTo(placeholder);

    }

    return cb(component);

  } 

})(window.ar.componentFactory);
