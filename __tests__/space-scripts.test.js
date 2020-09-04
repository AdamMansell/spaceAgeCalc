import { Human } from '../src/js/space-scripts.js';
describe('Human', () => {
let human

  beforeEach(() => {
    human = new Human('21', 'female', 'non-smoker', 'yes');
  });

  test('Should take users Earth Age & return it in Mercury years', () => {
    let age = human.age;
    expect(human.mercuryCalc(age)).toEqual(88);
  });
  test('Should take users Earth Age & return it in Venus years', () => {
    let age = human.age;
    expect(human.venusCalc(age)).toEqual(34);
  });
  test('Should take users Earth Age & return it in Mars years', () => {
    let age = human.age;
    expect(human.marsCalc(age)).toEqual(11);
  });
  test('Should take users Earth Age & return it in Jupiter years', () => {
    let age = human.age;
    expect(human.jupiterCalc(age)).toEqual(2);
  });
  test("Should take female user's Earth info and return her average life expectancy on Earth", () => {
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.earthExpectCalc(sex, smoke, exercise)).toEqual(90);
  });
  test("Should take female user's Earth info and return her average life expectancy on Earth", () => {
    human = new Human('21', 'male', 'non-smoker', 'yes');
    let sex = human.sex;
    let smoke = human.smoke;
    let exercise = human.exercise;
    expect(human.earthExpectCalc(sex, smoke, exercise)).toEqual(90);
  });
  // test("Should take Earth info of user who's male and return his average life expectancy on Earth.", () => {
  //   human = new Human('21', 'male', 'non-smoker', 'yes');
  //   let sex = human.sex;
  //   let smoke = human.smoke;
  //   let exercise = human.exercise;
  //   expect(human.earthExpectCalc(sex, smoke, exercise)).toEqual(90);
  // });

  
});