const Affirgotchi = function (name, confidence, growth, success, presence) {
  this.name = name;
  this.confidence = confidence;
  this.growth = growth;
  this.success = success;
  this.presence = presence;
  this.woke = 0;
  this.soulAge = 0;
  this.coin = 0;
  this.game = 0;
}


Affirgotchi.prototype.getConfidence = function () {
    this.game++;
    return `${this.name} your confidence affirmation is... "${this.confidence[Math.floor(Math.random() * this.confidence.length)]}"`;
  }

Affirgotchi.prototype.getGrowth = function () {
    this.soulAge++;
    return `${this.name} your growth affirmation is... "${this.growth[Math.floor(Math.random() * this.growth.length)]}"`;
  }

Affirgotchi.prototype.getSuccess = function () {
    this.coin++;
    return `${this.name} your success affirmation is... "${this.success[Math.floor(Math.random() * this.success.length)]}"`;
  }

Affirgotchi.prototype.getPresence = function () {
    this.woke++;
    return `${this.name} your presence affirmation is... "${this.presence[Math.floor(Math.random() * this.presence.length)]}"`;
  }

module.exports = Affirgotchi;

