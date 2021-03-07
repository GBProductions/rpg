export default class Character {
  constructor (name, characterClass, hitPoints, strength, tough, mind) {
    this.name = name;
    this.characterClass = characterClass;
    this.hitPoints = hitPoints;
    this.strength = strength;
    this.tough = tough;
    this.mind = mind;
    this.level = 1;
  }
  
}