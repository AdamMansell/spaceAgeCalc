
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
    let smoke = this.smoke;
    let exercise = this.exercise;
    sex == "male" ? lifeExpec -= 6 : lifeExpec;
    smoke == "smoker" ? lifeExpec -= 9 : lifeExpec;
    exercise == "no" ? lifeExpec -= 5 : lifeExpec;
    return lifeExpec;
  }
  mercuryExpectCalc() {
    let lifeExpec = 375;
    let sex = this.sex;
    let smoke = this.smoke;
    let exercise = this.exercise;
    sex == "male" ? lifeExpec -= 25 : lifeExpec;
    smoke == "smoker" ? lifeExpec -= 38 : lifeExpec;
    exercise == "no" ? lifeExpec -= 21 : lifeExpec;
    return lifeExpec;
  }
  venusExpectCalc() {
    let lifeExpec = 145;
    let sex = this.sex;
    let smoke = this.smoke;
    let exercise = this.exercise;
    sex == "male" ? lifeExpec -= 10 : lifeExpec;
    smoke == "smoker" ? lifeExpec -= 15 : lifeExpec;
    exercise == "no" ? lifeExpec -= 8 : lifeExpec;
    return lifeExpec;
  }
}