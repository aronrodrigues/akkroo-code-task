(function (componentFactory) {

  componentFactory.register('Save', Save);

  /**
   * Saves data
   * @param step The GuestList step.
   * @param cb callback after the component is ready.
   */
  function Save (step, cb) {

    var component = {
      execute: execute
    };

    /**
     * Execute some logic.
     * @param workflow The workflow to be used
     * @param cb Callback called before finish the step.
     */
    function execute(workflow, cb) {
      
      setTimeout(function () {
        console.log('SAVING', workflow.data);
        if (cb) { cb(step.id, workflow.data); }
        workflow.next(step.next);
      }, 10);

    }

    return cb(component);
  }
  
})(window.ar.componentFactory);
