import { Human } from '../src/js/space-scripts.js';
describe('Human', () => {
  let human

  test('Should take users Earth Age & return it in Mercury years', () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let age = human.age;
    expect(human.mercuryCalc(age)).toEqual(88);
  });
  test('Should take users Earth Age & return it in Venus years', () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let age = human.age;
    expect(human.venusCalc(age)).toEqual(34);
  });
  test('Should take users Earth Age & return it in Mars years', () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let age = human.age;
    expect(human.marsCalc(age)).toEqual(11);
  });
  test('Should take users Earth Age & return it in Jupiter years', () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let age = human.age;
    expect(human.jupiterCalc(age)).toEqual(2);
  });

  // Earth Life Expecs

  test("Should take female user's Earth info and return her average life expectancy on Earth", () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.earthExpectCalc(sex, smoke, exercise)).toEqual(90);
  });
  test("Should take female user's Earth info and return her average life expectancy on Earth", () => {
    human = new Human('21', 'male', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.earthExpectCalc(sex, smoke, exercise)).toEqual(84);
  });
  test("Should take Earth info of user who smokes and return their average life expectancy on Earth.", () => {
    human = new Human('21', 'female', 'smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.earthExpectCalc(sex, smoke, exercise)).toEqual(81);
  });
  test("Should take Earth info of user who doesn't exercise and return their average life expectancy on Earth.", () => {
    human = new Human('21', 'female', 'non-smoker', "don't workout");
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.earthExpectCalc(sex, smoke, exercise)).toEqual(85);
  });
  test("Should take Earth info of user and decide if it is over life expectancy age. If they are over, return how many years over.", () => {
    human = new Human('96', 'female', 'non-smoker', "don't workout");
    let age = human.age;
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.earthExpectCalc(age, sex, smoke, exercise)).toEqual(6);
  });

  // Mercury Life Expecs 

  test("Should take Earth info of user who's female and return her average life expectancy on Mercury.", () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.mercuryExpectCalc(sex, smoke, exercise)).toEqual(375);
  });
  test("Should take Earth info of user who's male and return his average life expectancy on Mercury.", () => {
    human = new Human('21', 'male', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.mercuryExpectCalc(sex, smoke, exercise)).toEqual(350);
  });
  test("Should take Earth info of user who smokes and return their average life expectancy on Mercury.", () => {
    human = new Human('21', 'female', 'smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.mercuryExpectCalc(sex, smoke, exercise)).toEqual(337);
  });
  test("Should take Earth info of user who doesn't exercise and return their average life expectancy on Mercury.", () => {
    human = new Human('21', 'female', 'non-smoker', "don't workout");
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.mercuryExpectCalc(sex, smoke, exercise)).toEqual(354);
  });
  test("Should take Earth info of user and decide if it is over life expectancy age. If they are over, return how many years over.", () => {
    human = new Human('96', 'female', 'non-smoker', "don't workout");
    let age = human.age;
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.mercuryExpectCalc(age, sex, smoke, exercise)).toEqual(25);
  });

  // Venus Life Expecs

  test("Should take Earth info of user who's female and return her average life expectancy on Venus.", () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.venusExpectCalc(sex, smoke, exercise)).toEqual(145);
  });
  test("Should take Earth info of user who's male and return his average life expectancy on Venus.", () => {
    human = new Human('21', 'male', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.venusExpectCalc(sex, smoke, exercise)).toEqual(135);
  });
  test("Should take Earth info of user who smokes and return their average life expectancy on Venus.", () => {
    human = new Human('21', 'female', 'smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.venusExpectCalc(sex, smoke, exercise)).toEqual(130);
  });
  test("Should take Earth info of user who doesn't exercise and return their average life expectancy on Venus.", () => {
    human = new Human('21', 'female', 'non-smoker', "don't workout");
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.venusExpectCalc(sex, smoke, exercise)).toEqual(137);
  });

  // Mars Life Expecs

  test("Should take Earth info of user who's female and return her average life expectancy on Mars.", () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.marsExpectCalc(sex, smoke, exercise)).toEqual(47);
  });
  test("Should take Earth info of user who's male and return his average life expectancy on Mars.", () => {
    human = new Human('21', 'male', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.marsExpectCalc(sex, smoke, exercise)).toEqual(44);
  });
  test("Should take Earth info of user who smokes and return their average life expectancy on Mars.", () => {
    human = new Human('21', 'female', 'smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.marsExpectCalc(sex, smoke, exercise)).toEqual(42);
  });
  test("Should take Earth info of user who doesn't exercise and return their average life expectancy on Mars.", () => {
    human = new Human('21', 'female', 'non-smoker', "don't workout");
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.marsExpectCalc(sex, smoke, exercise)).toEqual(44);
  });

  // Jupiter Life Expecs

  test("Should take Earth info of user who's female and return her average life expectancy on Jupiter.", () => {
    human = new Human('21', 'female', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.jupiterExpectCalc(sex, smoke, exercise)).toEqual(7);
  });
  test("Should take Earth info of user who's male and return his average life expectancy on Jupiter.", () => {
    human = new Human('21', 'male', 'non-smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.jupiterExpectCalc(sex, smoke, exercise)).toEqual(6.5);
  });
  test("Should take Earth info of user who smokes and return their average life expectancy on Jupiter.", () => {
    human = new Human('21', 'female', 'smoker', 'workout');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.jupiterExpectCalc(sex, smoke, exercise)).toEqual(6.3);
  });
  test("Should take Earth info of user who doesn't exercise and return their average life expectancy on Jupiter.", () => {
    human = new Human('21', 'female', 'non-smoker', "don't workout");
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.jupiterExpectCalc(sex, smoke, exercise)).toEqual(6.6);
  });
});