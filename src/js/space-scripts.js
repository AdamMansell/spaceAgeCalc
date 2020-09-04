
export class Human {
  constructor(age, sex, smoke, exercise) {
    this.age = age;
    this.sex = sex;
    this.smoke = smoke;
    this.exercise = exercise;
  }
  mercuryCalc(age) {
    let earthAge = parseInt(this.age);
    let mercuryAge = Math.round(earthAge / .24);
    return mercuryAge;
  }
}