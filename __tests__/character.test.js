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
  expect(Merlin.mind).toEqual(15);
  expect(Merlin.level).toEqual(2);
  });

  test('It should add one to the wins stat', () => {
    Merlin.winner();
    expect(Merlin.wins).toEqual(1);
  });
})

//   test("It should take level into account, and change stats based on level position.", () => {
// //     //battle. Winner receives +1 wins
// //     //player has a win, expAdder +1 to toughness
// //     //when player has 3 wins, player levels up +1
// //     //when level up, all stats add 5
// //     Merlin.winner(3);
// //     expect(Merlin.lifePoints).toEqual(7);
// //     expect(Merlin.strength).toEqual(6);
// //     expect(Merlin.tough).toEqual(9);
// //     expect(Merlin.mind).toEqual(15);
// //     expect(Merlin.level).toEqual(2);
// //   });
// // });

// // if wins divided by 3 < 1 || undefined || NaN
// // return no action 
// // if wins divided by 3 => 1 
// //   run levelUp on character
// // if wins divided by 3 =>2 


// // if 3 % wins = 0 
// // wins \ 3 = 