function parseSMS(sms) {
  let smsArray = sms.split(" ");
  let action = smsArray[0]
  return action;
}

module.exports = { parseSMS }
