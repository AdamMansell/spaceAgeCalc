import { Human } from '../src/js/space-scripts.js';
describe('Human', () => {
let human

  beforeEach(() => {
    human = new Human('21', 'female', 'non-smoker', 'exerc');
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
    expect(human.jupiterCalc(age)).toEqual(5);
  });

  
});