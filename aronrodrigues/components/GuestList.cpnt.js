(function (componentFactory) {

  componentFactory.register('GuestList', GuestList);

  /**
   * Loads and display the guestlist.
   * @param step The GuestList step.
   * @param cb The callback after the component is ready.
   */
  function GuestList (step, cb) {

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
      $('<h4/>', { text: step.title}).appendTo(placeholder);

      var ul = $('<ul/>', { class: 'list-group'}).appendTo(placeholder);

      _(step.guests).forEach(function (guest) {

        $('<a/>', { class: 'list-group-item', text: guest.name })
        .click(function () {

          workflow.data.guest = guest;
          if (cb) { cb(step.id, workflow.data); }
          workflow.next(step.next);

        })
        .appendTo(ul);

      });
      
    }

    return cb(component);

  }

})(window.ar.componentFactory);
