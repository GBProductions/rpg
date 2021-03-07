import Character from '../src/js/character.js'; 

describe("Character", () => {
  let Merlin;

  beforeEach(() => {
    Merlin = new Character ("Merlin", "Wizard",2, 1, 1, 10);
  });
  test('should show how beforeEach() works', () => {
    console.log(Merlin);
  });

  test("It should create a character with a name, stats and level 1", () => {
  expect(Merlin.name).toEqual("Merlin");
  expect(Merlin.characterClass).toEqual("Wizard");
  expect(Merlin.lifePoints).toEqual(2);
  expect(Merlin.strength).toEqual(1);
  expect(Merlin.tough).toEqual(1);
  expect(Merlin.mind).toEqual(10);
  expect(Merlin.level).toEqual(1);
  });

  test("It should add plus one to their toughness stat", () => {
  Merlin.expAdder();
  expect(Merlin.tough).toEqual(2);
  });

  test("It should level up character by a single level, and add 5 points to each stat.", () => {
  Merlin.levelUp();
  expect(Merlin.lifePoints).toEqual(7);
  expect(Merlin.strength).toEqual(6);
  expect(Merlin.tough).toEqual(6);
  expect(Merlin.mind).toEqual(16);
  expect(Merlin.level).toEqual(2);
  });
});