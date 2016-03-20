// APP SID:
// SANDBOX #: +1 415-599-2671
// AUTH_TOKEN:
var credentials = require('./config.json');

//require the Twilio module and create a REST client
var client = require('twilio')(credentials.accountSid, credentials.authToken);

client.calls.create({
	to: "6087995671", // calls this number
	from: "+16085194972",
	applicationSid: credentials.applicationSid,
	method: "GET",
	fallbackMethod: "GET",
	statusCallbackMethod: "GET",
	record: "false"
}, function(err, call) {
	console.log(call.sid);
});

// So basically this makes a call to the number above, however when you answer
// it just says you should pay them money to recieve more calls like this
