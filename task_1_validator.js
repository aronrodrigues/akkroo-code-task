(function(window) {
	window.taskOne = window.taskOne || {};

	function validate(componentID, data) {

		var assertEquals = function(predicate, message) {
			if (!predicate) {
				throw new Error(message);
			}
		};

		if (componentID === 'exampleAssertPass') {
			assertEquals(true, 'Everything is fine!');
			return;
		} else if (componentID === 'exampleAssertFail') {
			assertEquals(false, 'Do not worry! This is just an example of assertions failing!');
			return;
		}

		if (data.guest && data.guest.name === 'John Jameson') {
			switch(componentID) {
			case 'A':
				assertEquals(data.guest.name === 'John Jameson', 'Expected guest to be John Jameson');
				break;
			case 'B':
				assertEquals(data.guest.email === 'john@example.com', 'Expected guest to enter email john@example.com');
				break;
			case 'C':
				assertEquals(data.guest.optIn === true, 'Expected guest John Jameson to opt-in to emails');
				break;
			case 'E_1':
				assertEquals(data.sentEmail === true, 'Expected email to be sent');
				break;
			case 'H':
				assertEquals(data === {}, 'Expected data to be an empty object');
				break;
			case 'X':
				assertEquals(data.guest.name === 'John Jameson', 'Expected guest to be John Jameson');
				assertEquals(data.guest.email === 'john@example.com', 'Expected email to be john@example.com');
				assertEquals(data.guest.optIn === true, 'Expected John Jameson to opt-in');
				break;
			}
		} else if (data.guest && data.guest.name === 'Sam Stuarts') {
			switch(componentID) {
			case 'A':
				assertEquals(data.guest.name === 'Sam Stuarts', 'Expected guest to be Sam Stuarts');
				break;
			case 'B':
				assertEquals(data.guest.email === 'sam@example.com', 'Expected guest to enter email sam@example.com');
				break;
			case 'C':
				assertEquals(data.guest.optIn === false, 'Expected guest Sam Stuarts to opt-out of emails');
				assertEquals(data.guest.customerID === 'VAL3MK0r', 'Expected CustomerID for Sam Stuarts to be equal to the code stored on file');
				break;
			case 'E_1':
				assertEquals(data.sentEmail === false, 'Expected email not to be sent');
				break;
			case 'H':
				assertEquals(data === {}, 'Expected data to be an empty object');
				break;
			case 'X':
				assertEquals(data.name === 'Sam Stuarts', 'Expected guest to be Sam Stuarts');
				assertEquals(data.guest.email === 'sam@example.com', 'Expected email to be sam@example.com');
				assertEquals(data.guest.optIn === false, 'Expected Sam Stuarts to opt-out');
				assertEquals(data.guest.customerID === 'VAL3MK0r', 'Expected CustomerID for Sam Stuarts to be equal to the code stored on file');
				break;
			}
		} else if (data.guest && data.guest.name === 'Matt Michaels') {
			switch(componentID) {
			case 'A':
				assertEquals(data.guest.name === 'Matt Michaels', 'Expected guest to be Matt Michaels');
				break;
			case 'B':
				assertEquals(data.guest.email === 'matt.michaels@example.com', 'Expected guest to correct email address to matt.michaels@example.com');
				break;
			case 'C':
				assertEquals(data.guest.optIn === true, 'Expected guest Matt Michaels to opt-in to emails');
				assertEquals(data.guest.customerID === 'ABoV42g7', 'Expected CustomerID for Matt Michaels to be equal to the code stored on file');
				break;
			case 'E1':
				assertEquals(data.sentEmail === true, 'Expected email to be sent');
				break;
			case 'H':
				console.log(data);
				assertEquals(data === {}, 'Expected data to be an empty object');
				break;
			case 'X':
				assertEquals(data.guest.name === 'Matt Michaels', 'Expected guest to be Matt Michaels');
				assertEquals(data.guest.email === 'matt.michaels@example.com', 'Expected email to be matt.michaels@example.com');
				assertEquals(data.guest.optIn === true, 'Expected Matt Michaels to opt-in');
				assertEquals(data.guest.customerID === 'ABoV42g7', 'Expected CustomerID for Matt Michaels to be equal to the code stored on file');
				break;
			}
		}
		return true;
	}

	window.taskOne.validate = validate;
}(window));
