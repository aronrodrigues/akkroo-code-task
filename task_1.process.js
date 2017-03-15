(function (window) {
  'use strict';

  window.process1 = [{
    id: 'A',
    type: 'GuestList',
    title: 'Please select your name from the list',
    guests: null, //task.guestListData,
    next: 'B'
  }, {
    id: 'B',
    type: 'DataCaptureForm',
    title: 'Fill the information below',
    fields: [{ name: 'guest.email', label: 'Email', type: 'email', required: true }],
    next: 'C'
  }, {
    id: 'C',
    type: 'DataCaptureForm',
    title: 'Fill the information below',
    fields: [
      { name: 'guest.customerID', label: 'CustomerID', type: 'text', readonly: true },
      { name: 'guest.postcode', label: 'Postcode', type: 'text' },
      { name: 'guest.optIn', label: 'Receive marketing emails?', type: 'checkbox' }
    ],
    next: 'D'
  }, {
    id: 'D',
    type: 'Conditional',
    condition: { data: '@data.guest.optIn', operator: 'equals', value: 'true'},
    next: 'E_1',
    else: 'E_2'
  },  {
    id: 'E_1',
    type: 'MailDispatch',
    templateName: 'registrationEmail',
    toAddress: '@data.guest.email',
    templateVars: '@data.guest',
    next: 'F'
  }, {
    id: 'E_2',
    type: 'Message',
    title: 'It is a shame!',
    message: '%name%, we really expected you opted in. :\'(',
    vars: {
      'name': '@data.guest.name'
    },
    next: 'H'
  }, {
    id: 'F',
    type: 'Message',
    title: 'Thank you',
    message: 'Thanks for signing up %name%! =D',
    vars: {
      'name': '@data.guest.name'
    },
    next: 'X'
  }, {
    id: 'X',
    type: 'Save',
    next: 'H'
  }, {
    id: 'H',
    type: 'Reset',
    next: 'A'
  }];

})(window);
