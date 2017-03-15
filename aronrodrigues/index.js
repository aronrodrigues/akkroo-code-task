(function (window) {
  'use strict';

  window.ar = {
    _loadData: _loadData
  };

  /**
   * Loads data from workflow.
   * @param data The dot notation address of the value.
   * @param workflow Workflow to look for the data.
   * @returns The value addressed by data or data itself.
   */
  function _loadData (data, workflow) {
    if (_.isString(data) && data.indexOf('@data.') === 0) {
      data = _.get(workflow, data.substring(1));
    }
    return data;
  }

})(window);
