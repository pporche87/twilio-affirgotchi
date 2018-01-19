const Affirgotchi = function (name, confidence, growth, success, presence) {
  this.name = name;
  this.confidence = confidence;
  this.growth = growth;
  this.sucess = success;
  this.presence = presence;
  this.woke = 0;
  this.soulAge = 0;
  this.coin = 0;
  this.game = 0;
}


Affirgotchi.prototype.confidence = function () {
    this.woke++;
    this.soulAge++;
    return `${this.name} your confidence affirmation is ${this.confidence[Math.floor(Math.random() * this.confidence.length)]}`;
  }

module.exports = Affirgotchi;