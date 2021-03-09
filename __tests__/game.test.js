import Game from '../src/js/game.js'; 

describe("Game", () => {
  test('it should create a game with characters, currentId, and currentPlayer', () => {
    let game1 = new Game();
    expect(game1).toEqual({"currentId": 0, "currentPlayer": 1, "players": {}})
    
    });
  });