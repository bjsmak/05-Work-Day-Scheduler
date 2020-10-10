//Display current date and time at top of page
$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));


//Click event for saving tasks
$('.saveBtn').click(saveTask())

//Set variable for Moment JS current hours and CSS property for colors
var currentHour = moment().hour();
var timeId = $('#time').text();
var time = hourFromString(hourString);

//Case function for converting hours to compare to Moment JS
function hourFromString(hourString) {
    switch(hourString) {
      case "8 AM": return 8;
      case "9 AM": return 9;
      case "10 AM": return 10;
      case "11 AM": return 11;
      case "12 PM": return 12;
      case "1 PM": return 13;
      case "2 PM": return 14;
      case "3 PM": return 15;
      case "4 PM": return 16;
      case "5 PM": return 17;
    }
  }

//If/else statement for color properties

if (time < currentHour) {$('col-md-9').addClass('past');}
else if (time = currentHour){$('col-md-9').addClass('present');}
else {$('col-md-9').addClass('future');}

//Puts events into local storage
//$(document).ready(function(){
   // if(!localStorage.getItem('dayPlan')) {
      //  $(local)
   // }
//})

// Array needed for local storage

var dayPlan = {
    '8AM': '',
    '9AM': '',
    '10AM': '',
    '11AM': '',
    '12PM': '',
    '1PM': '',
    '2PM': '',
    '3PM': '',
    '4PM': '',
    '5PM': '',
};

//Save Task Function

//function saveTask() {

//}