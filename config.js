module.exports = {
  port: 8000,
  myNumber: process.env.MY_NUMBER,
  twilioConfig: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    number: process.env.TWILIO_NUMBER
  },
  actions: {
    confidence: [
      "I am confident of my future.",
      "I breath in and out, exhaling hesitancy and inhaling confidence",
      "I love change, easily adjusting to new people and situation.",
      "I thrive on self-confidence, knowing that nothing is impossible."
    ],
    growth: [
      "I am proud of myself and the things I have accomplished.",
      "I am worthy of great things in my life.",
      "My self-esteem and confidence increases each day.",
      "I like myself just the way I am."
    ],
    success: [
      "I am living the life of my dreams.",
      "I know my success is real.",
      "I feel powerful and full of energy, capable and confident.",
      "I love learning new things and using them in my life."
    ],
    presence: [
      "Everything is good right now.",
      "I am participating in the experiences of the moment.",
      "I easily return to the present moment and what is happening to me.",
      "I remain engaged and focused on the present moment."
    ]
  }
};