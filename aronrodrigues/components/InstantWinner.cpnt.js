(function (window, componentFactory) {

  componentFactory.register('InstantWinner', InstantWinner);

  /**
   * Nonsense function.
   * @param step The GuestList step.
   * @param cb callback after the component is ready.
   */
  function InstantWinner (step, cb) {
    
    var component = {
      execute: execute
    };

    /**
     * Execute some logic.
     * @param workflow The workflow to be used
     * @param cb Callback called before finish the step.
     */
    function execute(workflow, cb) {

      var name = window.ar._loadData(step.field, workflow);

      window.AkkrooAPI.generateVoucherCode(name, function (voucherCode) {
        
        if (voucherCode) {

          workflow.data.isWinner = true;
          workflow.data.voucherCode = voucherCode;

        } else {

          workflow.data.isWinner = false;
          workflow.data.voucherCode = null;

        }
        
        if (cb) { cb(step.id, workflow.data); }
        workflow.next(step.next);

      });

    }

    return cb(component);
    
  }

})(window, window.ar.componentFactory);
