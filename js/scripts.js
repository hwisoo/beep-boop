// Back-end Logic
function beepBoop(){

  var num = $("input#number").val();
  var msg = "";
  console.log("number was " + num);
if (num % 3 === 0) {
  msg = "I'm sorry. I'm afraid I can't do that."; 
} 


$("#output").append("<li>" + msg + "</li>");
}





// Front-end Logic
$(document).ready(function(){
  $("form#form").submit(function(){
    event.preventDefault();
    beepBoop();
    
  });
});