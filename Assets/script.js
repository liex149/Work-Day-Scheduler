// this shows the current date and time
let time = dayjs().format('dddd, MMMM D YYYY');
$('#currentDay').text(time);
// this is shows where the current time is using the id and dayjs
let currentRow = $('#hour-' + dayjs().format('H'))
// this adds class present to current time and turns row to red
currentRow.addClass('present');
// this adds class to past and turns past time to grey
currentRow.prevAll('.row').addClass('past');
// this adds class to future and turns future time to green
currentRow.nextAll('.row').addClass('future');
// this is for hours not rpesent on the schedule to make the schedule grey
if (dayjs().format('H') < 9) {
  $('.row').addClass('future')
} else if (dayjs().format('H') > 17) {
  $('.row').addClass('past')
};
// this is a button
let saveBtn = $('.saveBtn');
saveBtn.on('click', function () {
  // this shows that when button was clicked it saved content
  $('#savedContent').text('Your ' + $(this).siblings('div').text() + ' has been saved')

  // this is where information is stored and retrieved
  localStorage.setItem($(this).parents().attr('id'), $(this).siblings('textarea').val());
  console.log();
})
for (let index = 9; index < 18; index++) {
  $('#hour-' + index).children('textarea').val(localStorage.getItem('hour-' + index));
}
