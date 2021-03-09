import { TestScheduler } from 'jest';
import Game from '../src/js/game.js'; 

describe("Game", () => {
let game1

  beforeEach(() => {
    game1 = new Game ();
  });
  test('should show how beforeEach() works', () => {
    console.log(game1);
  });
  test('it should create a game with characters, currentId, and currentPlayer', () => {
    expect(game1).toEqual({"currentId": 0, "currentPlayer": 1, "players": {}})
    });

  test('it should assign an ID, and increment by 1 each time', () => {
    game1.assignId();
    expect(game1.currentId).toEqual(1);
  });

  test('it should take a character as an argument, and save their stats into the player array. Will also assign each character an individule ID that increments by one each entry', () => {
    game1.addPlayer("John")
    expect(player).toEqual();
  });


  // Expect(game1.assignId()).toEqual(return value = 1));




});