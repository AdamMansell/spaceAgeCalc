import { Human } from "./js/space-scripts.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function () {
  $('#space').submit(function (event) {
    event.preventDefault();
    const age = $('#age').val();
    const sex = $('#sex').val();
    const smoke = $('#smoker').val();
    const exercise = $('#exercise').val();

    let human = new Human(age, sex, smoke, exercise);

    let mercuryAge = mercuryCalc(human, age);
    let VenusAge = venusCalc(human, age);
    let marsAge = marsCalc(human, age);
    let jupiterAge = jupiterCalc(human, age);

    let earthExpect = earthExpectCalc(human);
    let mercuryExpect = mercuryExpectCalc(human);
    let venusExpect = venusExpectCalc(human);
    let marsExpect = marsExpectCalc(human);
    let jupiterExpect = jupiterExpectCalc(human);
    
  });
});