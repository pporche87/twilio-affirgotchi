const express = require('express');
const app = express();
const config = require('./config');
const Affirgotchi = require('./affirgotchi');
const message = require('./message')

let affirgotchi,
  confidence = config.actions.confidence;

app.get('/', (request, response) => {
  console.log('Hello world')
});

app.listen(config.port, () => {
  console.log('App Started')
});