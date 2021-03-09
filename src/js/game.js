import Character from "./character";

export default class Game {
  constructor () {
    this.players = {};
    this.currentId = 0;
    this.currentPlayer = 1;
  }
}

Game.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}
// Game.prototype.addPlayer(){Character)
//   this.
// }