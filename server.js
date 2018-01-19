require('dotenv').load();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const config = require('./config');
const Affirgotchi = require('./affirgotchi');
const message = require('./message')
const { parseSMS } = require('./utils')
const { MessagingResponse } = require('twilio').twiml

let affirgotchi,
  confidence = config.actions.confidence,
  growth = config.actions.growth,
  success = config.actions.success,
  presence = config.actions.presence;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
  response.send('Hello world');
});

app.post('/sms', (request, response) => {
  const { Body } = request.body;
  const twiml = new MessagingResponse();
  let action = parseSMS(Body);
  let status;

  if (affirgotchi == undefined) {
    affirgotchi = new Affirgotchi(action, confidence, growth, success, presence);
    status = `Hello ${action} !!! Let's have an awesome day! 💪🏾💫\n\nAre you working on confidence, growth, success, or presence today?\n\nYou can also type 'status' to see your progress!`;
  } else {
    switch(action.toLowerCase()) {
      case('confidence'):
        status = affirgotchi.getConfidence();
        break;
      case('growth'):
        status = affirgotchi.getGrowth();
        break;
      case('success'):
        status = affirgotchi.getSuccess();
        break;
      case('presence'):
        status = affirgotchi.getPresence();
        break;
      case('status'):
        status = `Status: woke - ${affirgotchi.woke}/5\nsoulAge - ${affirgotchi.soulAge}/5\ncoin - ${affirgotchi.coin}/5\ngame - ${affirgotchi.game}/5`;
        break;
      default:
        status = "Are you working on confidence, growth, success, or presence today?\n\nYou can also type 'status' to see your progress!";
    }
  }

  if (affirgotchi.woke >= 3) {
    status = `Dude ${affirgotchi.name} you're already hella woke! Go spread your wokeness in the world! 🌎💫\n\nWe need more people as present as you.`
    affirgotchi.woke = 0;
  }

  if (affirgotchi.soulAge >= 1) {
    status = `Get it with your mature consciousness ${affirgotchi.name}! 😇 You're an angel on earth!`;
    affirgotchi.soulAge = 0;
  }

  if (affirgotchi.coin >= 3) {
    status = `This success thing is in your wheelhouse! Keepin it 💯... you're about to get that coin ${affirgotchi.name}💰🤑`
    affirgotchi.coin = 0;
  }

  if (affirgotchi.game >= 3) {
    status = `${affirgotchi.name} you're on point! 💪🏾😍 Keep doing what you're doing... killin the game 💀`
    affirgotchi.game = 0;
  }

  twiml.message(status);
  response.writeHead(200, {'Content-Type': 'text/xml'});
  response.end(twiml.toString());
});

app.listen(config.port, () => {
  console.log('Happy Affirgotchi Day!')
  const affirm = "Hello happy healthy person! 👋🏾 What is your name?";
  message.send(affirm);
});