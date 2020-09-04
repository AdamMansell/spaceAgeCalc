
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
  earthExpectCalc() {
    let lifeExpec = 90;
    let sex = this.sex;
    console.log(sex);
    let smoke = this.smoke;
    console.log(smoke);
    let exercise = this.exercise;
    console.log(exercise);
    sex == "male" ? lifeExpec -= 6 : lifeExpec;
    smoke == "smoker" ? lifeExpec -= 9 : lifeExpec;
    exercise == "no" ? lifeExpec -= 5 : lifeExpec;
    return lifeExpec;
  }
}