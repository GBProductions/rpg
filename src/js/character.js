export default class Character {
  constructor (name, characterClass, lifePoints, strength, tough, mind) {
    this.name = name;
    this.characterClass = characterClass;
    this.lifePoints = lifePoints;
    this.strength = strength;
    this.tough = tough;
    this.mind = mind;
    this.level = 1;
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