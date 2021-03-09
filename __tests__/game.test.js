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

  // test('it should assign an ID, and increment by 1 each time', () => {
  //   assignId(game1);
  //   expect(game1).toEqual(x);
  // });





});