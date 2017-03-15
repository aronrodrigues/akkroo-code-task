(function (window) {
  'use strict';

  window.ar.componentFactory = new ComponentFactory();

  /**
   * Creates the ComponentFactory.
   */
  function ComponentFactory() {

    var srvc = this;

    srvc.map = {};

    /**
     * Register a function in ComponentFactory
     */
    srvc.register = function (name, fn) {
      srvc.map[name] = fn;
    };
    
    /**
     * Creates a component based on step.type.
     * @param step The step
     * @param cb Callback function called after the component is ready..
     */
    srvc.create = function (step, cb) {

      if  (srvc.map[step.type]) {
        return srvc.map[step.type](step, cb);
      } else {

        console.error('ComponentFactory: Invalid component type ' + step.type + ' in ' + step.id);
        return false;

      }

    };

  }

})(window);
  