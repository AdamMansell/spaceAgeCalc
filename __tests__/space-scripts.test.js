import { Human } from '../src/js/space-scripts.js';
describe('Human', () => {
let human

  beforeEach(() => {
    human = new Human('21', 'female', 'non-smoker', 'exerc');
  });

  test('Should take users Earth Age & return it in Mercury years', () => {
    let age = human.age;
    expect(human.mercuryCalc(age)).toEqual(80);
  });

  
});