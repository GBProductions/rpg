export default class Character {
  constructor (name, characterClass, lifePoints, strength, tough, mind) {
    this.name = name;
    this.characterClass = characterClass;
    this.lifePoints = lifePoints;
    this.strength = strength;
    this.tough = tough;
    this.mind = mind;
    this.level = 1;
    this.wins = 0;
  }
}
Character.prototype.expAdder = function() {
  this.tough += 1;
}

Character.prototype.levelUp = function() {
    this.lifePoints += 5;
    this.strength += 5;
    this.tough += 5;
    this.mind += 5;
    this.level += 1;
}

Character.prototype.winner = function() {
  this.wins += 1;
}

// Character.prototype.winChecker = function() {
//   if ((this.wins / 3) >= 1) && ((this.wins % 3) === 0) {
//     this.levelUp();
//   } else if (((this.wins / 6) === 1) && ((this.wins % 3) === 0) {
//     this.levelUp();
//   }
// }