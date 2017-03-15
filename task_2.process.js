(function (window) {
  'use strict';

  window.process2 = [{
    id: 'A',
    type: 'Branding',
    imageUrl: 'https://assets.akkroo.com/marketing/img/akkroo-logo.svg',
    next: 'B'
  }, {
    id: 'B',
    type: 'DataCaptureForm',
    title: 'Fill the information below',
    fields: [{ name: 'name', label: 'Name', type: 'text', required: true }],
    next: 'C'
  }, {
    id: 'C',
    type: 'InstantWinner',
    field: '@data.name',
    next: 'D'
  }, {
    id: 'D',
    type: 'Conditional',
    condition: { data: '@data.isWinner', operator: 'equals', value: 'true'},
    next: 'E',
    else: 'I'
  }, {
    id: 'E',
    type: 'DataCaptureForm',
    title: 'You won! Fill the information below',
    fields: [{
      name: 'email', label: 'Email', type: 'email', required: true 
    }, {
      name: 'prize', label: 'Prize', type: 'option', required: true, values: [
        { name: 'London City Tour' }, { name: 'Two bottles of London Pride' },
        { name: 'Fish and Chips' }, { name: 'A year of free subway' }, 
        { name: 'Full English Breakfast' }] 
    }],
    next: 'F'
  }, {
    id: 'F',
    type: 'MailDispatch',
    templateName: 'registrationEmail',
    toAddress: '@data.email',
    next: 'G'
  }, {
    id: 'I',
    type: 'DataCaptureForm',
    title: 'Fill the information below',
    fields: [{ name: 'email', label: 'Email', type: 'email', required: true }],
    next: 'G'
  }, {
    id: 'G',
    type: 'Message',
    title: 'Thank you!',
    message: '%name%, we love you!',
    vars: {
      'name': '@data.name'
    },
    next: 'X'
  },{
    id: 'X',
    type: 'Save',
    next: 'H'
  }, {
    id: 'H',
    type: 'Reset',
    next: 'A'
  }];

})(window);
