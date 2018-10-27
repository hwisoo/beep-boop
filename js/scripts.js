// Back-end Logic

function beepBoop(){
  
  // Declare Variables
  var name = $("input#name").val();
  var num = parseInt($("input#number").val());
  var numbers = [];

  for (let i=0; i <= num; i++) {
    numbers.push(i);  
  }
  console.log(numbers);
  var strNumbers = numbers.map(function(e){
    return e.toString()
  });
  
  console.log(strNumbers);

  strNumbers.map(function(item,x){
    
    if(item.includes("0")) {
      strNumbers[x] ="Beep!";
  } else if (item.includes("1")){
      strNumbers[x] = "Boop!";
  } else if (item % 3 == 0){
      strNumbers[x] = "I'm sorry " + name + ". I'm afraid I can't do that.";
  }
  });

  console.log(strNumbers);
  
  strNumbers.forEach(function(item){
  
    $("#output").append("<li>" + item + "</li>");
  })
}
 

// Front-end Logic
$(document).ready(function(){
  $("form#form").submit(function(){
    event.preventDefault();  
    $("#output").fadeOut();
    $("li").each(function(){
      $(this).remove()
    });
    
    beepBoop(); 
    
    $("li:contains('eep')").css('color','blue').css('list-style-type','circle');
    $("li:contains('oop')").css('color','green').css('list-style-type', 'square');
    $("li:contains('sorry')").css('color','red');
    $("#output").fadeIn();
  });
});