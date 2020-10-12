//Display current date and time at top of page
$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));


//Click event for saving tasks
$('.saveBtn').click(saveTask);

//Set variable for Moment JS current hours and CSS property for colors
var currentHour = moment().hour();
var timeId = $('#time').text();

//Array function to compare to Moment JS
  var militaryHrArr = [8,9,10,11,12,13,14,15,16,17];

//If/else statement for color properties
//i cycles to 10 for number of hours in day planner
for (var i = 0; i < 10; i++) {


  if (localStorage.getItem('event-' + i)) {
      $('#event-' + i).val(localStorage.getItem('event-' + i));
  }

  console.log(currentHour, militaryHrArr[i]);
  if (militaryHrArr[i] < currentHour) {
    $('#event-' + i).addClass('past');
  }
  else if (militaryHrArr[i] === currentHour){
    $('#event-' + i).addClass('present');
  }
  else {
    $('#event-' + i).addClass('future');
  }
}


//Puts events into local storage
function saveTask(){
  var id = $(this).attr('data-id');
  var getValue = $('#event-' + id).val();
  localStorage.setItem('event-' + id, getValue);  
}

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