$(document).ready(function(){

	// Variables
var count = 4;
var i = 0;
var h = -1;
var answersRight = 0;
var answersWrong = 0;
var currentQuestion = 0;
var q1 = $(".q1");
var q2 = $(".q2");
var q3 = $(".q3");
var questionArray = [q1, q2, q3];


console.log(questionArray);

   // Hides questions

$(".questions").hide();
$("#timer").hide();

   // Button begins quiz and timer

$(function(){
    $(".start").on("click",function(){
        $(".start").hide();
        $("#timer").show();
        $(q1).show();
        timer()
        

    });

    // Timer function
var counter = setInterval(timer, 1000);
function timer()
{
  count=count-1;
  if (count <= 0)
  {      
  	i = i + 1;
  	h = h + 1;
  	$(questionArray[h]).hide();
    $(questionArray[i]).show();

   	clearInterval(counter);
   	
     //counter ended, do something here
     return;
    
  }

$("#timer").html(count + " seconds remaining");

  if  (questionArray == questionArray.length){
		alert("end");
	}
}








});
});


