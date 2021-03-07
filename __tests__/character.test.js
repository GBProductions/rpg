import Character from '../src/js/character.js'; 

describe("Character", () => {
  test("It should create a character with a name, stats and level 1", () => {
  const Merlin = new Character ("Merlin", "Wizard",2, 1, 1, 10);
  expect(Merlin.name).toEqual("Merlin");
  expect(Merlin.characterClass).toEqual("Wizard");
  expect(Merlin.hitPoints).toEqual(2);
  expect(Merlin.strength).toEqual(1);
  expect(Merlin.tough).toEqual(1);
  expect(Merlin.mind).toEqual(10);
  expect(Merlin.level).toEqual(1);
  });
});