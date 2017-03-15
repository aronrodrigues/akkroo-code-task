(function (componentFactory) {

  componentFactory.register('Reset', Reset);

   /**
   * Resets workflow data
   * @param step The GuestList step.
   * @param cb callback after the component is ready.
   */
  function Reset (step, cb) {

    var component = {
      execute: execute
    };

    /**
     * Execute some logic.
     * @param workflow The workflow to be used
     * @param cb Callback called before finish the step.
     */
    function execute(workflow, cb) {
      workflow.data = {};
      if (cb) { cb(step.id, workflow.data); }
      workflow.next(step.next);
    }

    return cb(component);

  }

})(window.ar.componentFactory);
