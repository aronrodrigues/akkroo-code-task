(function (window, componentFactory) {

  componentFactory.register('Conditional', Conditional);
  
  /**
   * Conditional step.
   * @param step The GuestList step.
   * @param cb callback after the component is ready.
   */
  function Conditional (step, cb) {

    var component = {
      execute: execute
    };

    /**
     * Execute some logic.
     * @param workflow The workflow to be used
     * @param cb Callback called before finish the step.
     */
    function execute(workflow, cb) {
      
      
      var data = _parse(window.ar._loadData(step.condition.data, workflow));
      var value = _parse(window.ar._loadData(step.condition.value, workflow));
      var result = null;

      switch (step.condition.operator) {
        case 'equals':
          result = (data == value);
          break;
      }
      
      if (result) {
        if (cb) cb(step.id, workflow.data);
        workflow.next(step.next);
      } else {
        if (cb) cb(step.id, workflow.data);
        workflow.next(step.else);
      }
      

    }

    /**
     * Parses the value to it's primitive.
     * @param value the value to be parsed.
     */
    function _parse(value) {
      if (_.isString(value)) {
        try {
          // Used eval to convert "true" to true. 
          // (eval should not be used, maybe JSON.parse is better :D)
          value = eval(value);
        } catch (e) {
          // The value could not be converted.
         }
      }

      return value;
    }

    return cb(component);

  }

})(window, window.ar.componentFactory);
