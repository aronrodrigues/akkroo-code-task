(function (window, componentFactory) {
  'use strict';

  window.ar.Workflow = Workflow;

  /**
   * Creates a new Workflow and sets the first step.
   * @param process A process definition.
   * @param first The id of the first step.
   * @returns an workflow.
   */
  function Workflow (data) {
    
    var srvc = this;
    var first = (data[0].id); // Assumes the first step is the first position.
    var process = _.keyBy(data, 'id'); // Map the process to an object.
    var placeholder = null;
    var validate = null;
    
    srvc.data = {};

    /**
     * Runs the workflow starting by the first step.
     * @param placeholderId HtmlId of the placeholder.
     * @param validator Callback  function to validate the program.
     */
    srvc.run = function (placeholderId, validator) {
      validate = (validator)?(validator.validate):(null);
      placeholder = $(placeholderId);
      srvc.next(first); 
    };

    /**
     * Goes to the step.
     * @param id Step Id
     */
    srvc.next = function (id) {
      
      var step = process[id];

      if (step) {

        componentFactory.create(step, function (component) {
          if (component.render) {
            component.render(placeholder, srvc, validate);
          } else {
            component.execute(srvc, validate);
          }
        });

      } else {
        console.error('Step ' + id + ' does not exist.');
      }

    };

    return srvc;

  }

})(window, window.ar.componentFactory);