// Back-end Logic
var msg = "";

function beepBoop(){
  
  // Declare Variables
  var name = $("input#name").val();
  var num = $("input#number").val();
  var includes1 = num.includes("1");
  var includes0 = num.includes("0");
  
  var beep = false;
  var boop = false;
  var error = false;
  
  // Check condition and assign message
  if (parseInt(num) % 3 === 0) {
    msg = "I'm sorry " + name + ". I'm afraid I can't do that.";
    error= true;    
  } else if (includes1){
    msg = "Boop!";
    boop = true;
  } else if (includes0) {
    msg = "Beep!";
    beep = true;
    } else {
    msg = num;
  };
  
  // Play audio based on condition
  if(error){
  $("#error")[0].play();
  } else if (boop) {
  $("#boop")[0].play();
  } else if (beep) {
  $("#beep")[0].play();
  };   
};

// Front-end Logic
$(document).ready(function(){
  $("form#form").submit(function(){
    event.preventDefault();  
    
    beepBoop(); 
    
    $("#output").append("<li>" + msg + "</li>");
    $("li:contains('eep')").css('color','blue').css('list-style-type','circle');
    $("li:contains('oop')").css('color','green').css('list-style-type', 'square');
    $("li:contains('sorry')").css('color','red');
    $("#output").fadeIn();
  });
});