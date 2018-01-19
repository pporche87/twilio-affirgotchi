const config = require('./config')

const client = require('twilio')(
  config.twilioConfig.accountSid, 
  config.twilioConfig.authToken
);

const send = message => client.messages.create({
  to: config.myNumber,
  from: config.twilioConfig.number,
  body: message
})
.then((message) => console.log(message.sid));

const twiml = message => {
  const response = new twilio.TwimlResponse();
  return response.message(message).toString();
}

module.exports = { send, twiml }