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
    
}