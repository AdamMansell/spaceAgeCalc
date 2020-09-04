
export class Human {
  constructor(age, sex, smoke, exercise) {
    this.age = age;
    this.sex = sex;
    this.smoke = smoke;
    this.exercise = exercise;
  }
}
export function mercuryCalc(age) {
  let earthAge = parseInt(age);
  let mercuryAge = Math.round(earthAge / .24);
  return mercuryAge;
}
export function venusCalc(age) {
  let earthAge = parseInt(age);
  let venusAge = Math.round(earthAge / .62);
  return venusAge;
}
export function marsCalc(age) {
  let earthAge = parseInt(age);
  let marsAge = Math.round(earthAge / 1.88);
  return marsAge;
}
export function jupiterCalc(age) {
  let earthAge = parseInt(age);
  let jupiterAge = Math.round(earthAge / 11.86);
  return jupiterAge;
}
export function earthExpectCalc(human) {
  let lifeExpec = 90;
  let sex = human.sex;
  let smoke = human.smoke;
  let exercise = human.exercise;
  sex == "male" ? lifeExpec -= 6 : lifeExpec;
  smoke == "smoker" ? lifeExpec -= 9 : lifeExpec;
  exercise == "don't workout" ? lifeExpec -= 5 : lifeExpec;
  return lifeExpec;
}
export function mercuryExpectCalc(human) {
  let lifeExpec = 375;
  let sex = human.sex;
  let smoke = human.smoke;
  let exercise = human.exercise;
  sex == "male" ? lifeExpec -= 25 : lifeExpec;
  smoke == "smoker" ? lifeExpec -= 38 : lifeExpec;
  exercise == "don't workout" ? lifeExpec -= 21 : lifeExpec;
  return lifeExpec;
}
export function venusExpectCalc(human) {
  let lifeExpec = 145;
  let sex = human.sex;
  let smoke = human.smoke;
  let exercise = human.exercise;
  sex == "male" ? lifeExpec -= 10 : lifeExpec;
  smoke == "smoker" ? lifeExpec -= 15 : lifeExpec;
  exercise == "don't workout" ? lifeExpec -= 8 : lifeExpec;
  return lifeExpec;
}
export function marsExpectCalc(human) {
  let lifeExpec = 47;
  let sex = human.sex;
  let smoke = human.smoke;
  let exercise = human.exercise;
  sex == "male" ? lifeExpec -= 3 : lifeExpec;
  smoke == "smoker" ? lifeExpec -= 5 : lifeExpec;
  exercise == "don't workout" ? lifeExpec -= 3 : lifeExpec;
  return lifeExpec;
}
export function jupiterExpectCalc(human) {
  let lifeExpec = 7;
  let sex = human.sex;
  let smoke = human.smoke;
  let exercise = human.exercise;
  sex == "male" ? lifeExpec -= 0.5 : lifeExpec;
  smoke == "smoker" ? lifeExpec -= 0.7 : lifeExpec;
  exercise == "don't workout" ? lifeExpec -= 0.4 : lifeExpec;
  return lifeExpec;
}
