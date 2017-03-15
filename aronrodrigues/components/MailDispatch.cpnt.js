(function (window, componentFactory) {

  componentFactory.register('MailDispatch', MailDispatch);

  /**
   * Sends an email.
   * @param step The GuestList step.
   * @param cb callback after the component is ready.
   */
  function MailDispatch (step, cb) {

    var component = {
      execute: execute
    };

    /**
     * Execute some logic.
     * @param workflow The workflow to be used
     * @param cb Callback called before finish the step.
     */
    function execute(workflow, cb) {

      var toAddress = window.ar._loadData(step.toAddress, workflow);
      var templateVars = (step.templateVars?window.ar._loadData(step.templateVars, workflow):workflow.data);

      window.AkkrooAPI.sendEmail(toAddress, step.templateName, templateVars, function () {
        workflow.data.sentEmail = true;
        if (cb) { cb(step.id, workflow.data); }
        workflow.next(step.next);
      });

    }

    return cb(component);

  }
  
})(window, window.ar.componentFactory);
