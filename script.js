//Display current date and time at top of page
$('#date-today h2').text(moment().format('dddd'));

//Puts events into local storage
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