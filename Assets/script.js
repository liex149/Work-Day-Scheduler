// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




// this shows the current date and time
let time = dayjs().format('dddd, MMMM D YYYY, h:mm a');
$('#currentDay').text(time);
// this is shows where the current time is using the id and dayjs
let currentRow = $('#hour-' + dayjs().format('H')) 
// this adds class present to current time and turns row to red
currentRow.addClass('present'); 
// this adds class to past and turns past time to grey
currentRow.prevAll('.row').addClass('past');
// this adds class to future and turns future time to green
currentRow.nextAll('.row').addClass('future');


// function stored() {
//   localStorage.setItem('.row', JSON.stringify(row))
//   console.log('hi')

let saveBtn = $('.saveBtn');

saveBtn.on('click', function () {

$(this).text('Your ' + $(this).siblings('div').text() + ' has been saved')




  localStorage.setItem($(this).parents().attr('id'), $(this).siblings('textarea').val());
console.log();

})

for (let index = 9; index < 18; index++) {

$('#hour-' + index).children('textarea').val(localStorage.getItem('hour-' + index));
  // console.log(localStorage.getItem('hour-' + index))

}




// $(function () {
//   TODO: Add a listener for click events on the save button. This code should
//   use the id in the containing time-block as a key to save the user input in
//   local storage. HINT: What does `this` reference in the click listener
//   function? How can DOM traversal be used to get the "hour-x" id of the
//   time-block containing the button that was clicked? How might the id be
//   useful when saving the description in local storage?
  
//   TODO: Add code to apply the past, present, or future class to each time
//   block by comparing the id to the current hour. HINTS: How can the id
//   attribute of each time-block be used to conditionally add or remove the
//   past, present, and future classes? How can Day.js be used to get the
//   current hour in 24-hour time?
  
//   TODO: Add code to get any user input that was saved in localStorage and set
//   the values of the corresponding textarea elements. HINT: How can the id
//   attribute of each time-block be used to do this?
  
//   TODO: Add code to display the current date in the header of the page.
// });