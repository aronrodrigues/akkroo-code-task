(function (window) {
  'use strict';

  window.process3 = [{
    id: 'Branding',
    type: 'Branding',
    imageUrl: 'https://assets.akkroo.com/marketing/img/akkroo-logo.svg',
    next: 'Identification'
  }, {
    id: 'Identification',
    type: 'DataCaptureForm',
    title: 'Hello! Please, enter your name:',
    fields: [{ name: 'name', label: 'Name', type: 'text', required: true }],
    next: 'SelectCandidate'
  }, {
    id: 'SelectCandidate',
    type: 'DataCaptureForm',
    title: 'Select the best candidate for this job opportunity:',
    fields: [{
      name: 'candidate', label: 'Candidate', type: 'option', required: true, values: [
        { name: 'Aron Rodrigues' }, { name: 'Some freak weirdo' },
        { name: 'Crazy nerd 01' }] 
    }],
    next: 'SelectCandidateCondition'
  }, {
    id: 'SelectCandidateCondition',
    type: 'Conditional',
    condition: { data: '@data.candidate', operator: 'equals', value: 'Aron Rodrigues'},
    next: 'PerfectChoice',
    else: 'ShameOnYou'
  }, {
    id: 'PerfectChoice',
    type: 'Message',
    title: 'Perfect Choice!',
    message: 'Aron Rodrigues is going to be an excelent employee!',
    next: 'Salary'
  }, {
    id: 'ShameOnYou',
    type: 'Message',
    title: 'Shame on you!!! :\'( ',
    message: 'Come on! %name%? Really?',
    vars: {
      'name': '@data.candidate'
    },
    next: 'Reset'
  }, {
    id: 'Salary',
    type: 'DataCaptureForm',
    title: 'Based on Aron\'s Test, how much his annual salary should be:',
    fields: [{
      name: 'salary', label: 'salary', type: 'option', required: true, values: [
        { name: 'Nothing' }, { name: '40000' }, { name: '45000' }, { name: '50000' },
        { name: '55000' }, { name: '60000' }, { name: '65000' }, { name: 'Take all my money' },] 
    }],
    next: 'Mail'
  }, {
    id: 'Mail',
    type: 'MailDispatch',
    templateName: 'salaryEmail',
    toAddress: 'aronrodrigues@gmail.com',
    next: 'Farewell'
  }, {
    id: 'Farewell',
    type: 'Message',
    title: 'Farewell!',
    message: '%name%, see you soon!',
    vars: {
      'name': '@data.name'
    },
    next: 'Reset'
  }, {
    id: 'Reset',
    type: 'Reset',
    next: 'Branding'
  }];

})(window);
