// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let pastClass = $('#past');
let presentClass = $('#present');
let futureClass = $('#future');

let saveBtn = $('.saveBtn');


// let time = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
// console.log(time);
// $('#currentDay').text(time);

// let hour9El = $('time-block');
// // time-block.addClass('past')

  console.log(dayjs().format('H') == 13);
if (dayjs().format('H') < 9) {
return '.past'; {

}else if (dayjs().format('H') < 9) {

}
} else if (dayjs().format('H') > 12 || dayjs().format('H') < 5) {
  
} else {
  

 };




// let hour10El = $('#hour-10');
// hour10El.addClass('present')

// let hour11El = $('#hour-11');
// hour11El.addClass('future')

// saveBtn.on('click', function () {
// console.log('hello');
// })







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