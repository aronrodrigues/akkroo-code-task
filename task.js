	(function(window, document) {
		'use strict';

		var taskOne = function() {
			var guestListData = [
				{
					'name': 'John Jameson',
				},
				{
					'name': 'Sam Stuarts',
					'customerID': 'VAL3MK0r'
				},
				{
					'name': 'Matt Michaels',
					'email': 'matt@example.com',
					'customerID': 'ABoV42g7'
				}
			];

			window.process1[0].guests = guestListData;

			// Loads process1 from task1.process.js and starts the flow.
			var worflow = new window.ar.Workflow(window.process1);
			worflow.run('#task-one', window.taskOne);

		};

		var taskTwo = function() {

			// Loads process2 from task2.process.js and starts the flow.
			var worflow = new window.ar.Workflow(window.process2);
			worflow.run('#task-two', window.taskTwo);
			
		};

		var taskThree = function () {
			var worflow = new window.ar.Workflow(window.process3);
			worflow.run('#task-three');
		};

		window.onload = function() {
			// open task_1_validator.js, task_2_validator.js and akkroo_api.js to understand the below:

			// this is how you use our assertions to figure out if your code is solving the problem...
			console.log('Demonstrating how to call assert for each step:');
			window.taskOne.validate('exampleAssertPass', {some: 'data'});
			try {
				window.taskOne.validate('exampleAssertFail', {some: 'data'});
			} catch (e) {
				console.error(e);
			}

			// this is how you would call the 'APIs'
			console.log('Demonstrating call to example APIs:');
			window.AkkrooAPI.generateVoucherCode('Alan Adams', function(code) {
				console.log('Example voucher code: ', code);
			});

			// run your tasks
			taskOne();
			taskTwo();
			taskThree();
		};

	}(window, document));
