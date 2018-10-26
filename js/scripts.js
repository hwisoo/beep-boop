// Back-end Logic
var msg = "";
var item = "";

function beepBoop(){
  
  // Declare Variables
  var name = $("input#name").val();
  var num = parseInt($("input#number").val());
  var array = [];

  for (let i=0; i <num; i++) {
    array.push(i);  
  }
  
  
  array.forEach(function(item,x){
    item.toString();
    if(item.includes("0")) {
      array[x] ="Beep!";
  } else if (item.includes("1")){
      array[x] = "Boop!";
  } else if (item % 3 == 0){
      array[x] = "I'm sorry " + name + ". I'm afraid I can't do that.";
  }
  });

  console.log(array);




  
  // console.log(num);
  // var includes1 = num.includes("1");
  // var includes0 = num.includes("0");
  
  var beep = false;
  var boop = false;
  var error = false;
  num = Array.from(num.toString()).map(Number);

  
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
    
    $("#output").append("<li>" + item + "</li>");
    $("li:contains('eep')").css('color','blue').css('list-style-type','circle');
    $("li:contains('oop')").css('color','green').css('list-style-type', 'square');
    $("li:contains('sorry')").css('color','red');
    $("#output").fadeIn();
  });
});