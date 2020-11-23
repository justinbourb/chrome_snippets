/* Purpose: unchecks the radio buttons for https://wgu-nx.acrobatiq.com/ personal 
    practice assignments and reset answer text.
*/

//reset radio check to uncheck
let list = document.getElementsByClassName('answer-choice');
for (let i = 0; i < list.length; i++) {
  list[i].checked = false;
}

//reset answer text to blank
list = document.getElementsByClassName('feedback');
for (let i = 0; i < list.length; i++) {
  list[i].textContent = '';
}
