// Back-end Logic
var msg = "";

function beepBoop(){

  var name = $("input#name").val();
  var num = $("input#number").val();
  var includes1 = num.includes("1");
  var includes0 = num.includes("0");
  
  console.log("number was " + num);
  if (parseInt(num) % 3 === 0) {
    msg = "I'm sorry " + name + ". I'm afraid I can't do that."; 
  } else if (includes1){
    msg = "Boop!";
  } else if (includes0) {
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