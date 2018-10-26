// Back-end Logic
var num = parseInt($("#number").val());
var msg;

if (num % 3 === 0) {
  msg = "I'm sorry. I'm afraid I can't do that."
} 






// Front-end Logic
$(document).ready(function(){
  $("form#form").submit(function(){
    event.preventDefault();
  });
});