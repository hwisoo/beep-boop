// Back-end Logic
var msg = "";

function beepBoop(){

  var num = $("input#number").val();
  var contains1 = num.includes("1");
  var contains0 = num.includes("0");
  
  console.log("number was " + num);
if (num % 3 === 0) {
  msg = "I'm sorry. I'm afraid I can't do that."; 
} else if (contains1){
  msg = "Boop!";
} else if (contains0) {
  msg = "Beep!";
} else {
  msg = num;
}



}





// Front-end Logic
$(document).ready(function(){
  $("form#form").submit(function(){
    event.preventDefault();
    beepBoop();
    $("#output").append("<li>" + msg + "</li>");
  });
});