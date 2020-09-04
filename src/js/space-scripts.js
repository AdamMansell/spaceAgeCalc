
export class Human {
  constructor(age, sex, smoke, exercise) {
    this.age = age;
    this.sex = sex;
    this.smoke = smoke;
    this.exercise = exercise;
  }
  mercuryCalc() {
    let earthAge = parseInt(this.age);
    let mercuryAge = Math.round(earthAge / .24);
    return mercuryAge;
  }
  venusCalc() {
    let earthAge = parseInt(this.age);
    let venusAge = Math.round(earthAge / .62);
    return venusAge;
  }
  marsCalc() {
    let earthAge = parseInt(this.age);
    let marsAge = Math.round(earthAge / 1.88);
    return marsAge;
  }
  jupiterCalc() {
    let earthAge = parseInt(this.age);
    let jupiterAge = Math.round(earthAge / 11.86);
    return jupiterAge;
  }
}