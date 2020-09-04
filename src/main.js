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
  });
});