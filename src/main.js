import Human from "./js/space-scripts.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function () {
  $('#space').submit(function (event) {
    event.preventDefault();
    const age = $('#age').val();
    const sex = $('#sex').val();
    const smoke = $('#smoke').val();
    const exercise = $('#exercise').val();

    let human = new Human(age, sex, smoke, exercise);

    let mercuryAge = human.mercuryCalc(age);
    let venusAge = human.venusCalc(age);
    let marsAge = human.marsCalc(age);
    let jupiterAge = human.jupiterCalc(age);

    let earthLifeExpect = human.earthExpectCalc(human);
    let mercuryLifeExpect = human.mercuryExpectCalc(human);
    let venusLifeExpect = human.venusExpectCalc(human);
    let marsLifeExpect = human.marsExpectCalc(human);
    let jupiterLifeExpect = human.jupiterExpectCalc(human);

    let resSentence = `You said you were ${$('#age').val()} years old, and that you identify as ${$('#sex').val()}. Other than that we considered the fact that you are a ${$('#smoke').val()}, and that you ${$('#exercise').val()}. With this information, our top astro-physicists have calculated the following results for you: `;

    let planetResults = `Here on planet earth you are ${$('#age').val()},
    but on Mercury you are ${mercuryAge}.
    On Venus you are ${venusAge}.
    On Mars you are ${marsAge}.
    And on Jupiter, you are ${jupiterAge}.
    
    This info is incredible... we know, but there's more.
    
    Your life expectancy here on our planet is ${earthLifeExpect}.
    On Mercury it is ${mercuryLifeExpect}.
    On Venus it is ${venusLifeExpect}.
    On Mars it is ${marsLifeExpect}.
    And on Jupiter it is ${jupiterLifeExpect}.`;


    $("#resultH2").text(resSentence);
    $("#resultPtag").text(planetResults);
    $("#resultDiv").show();
  });
});