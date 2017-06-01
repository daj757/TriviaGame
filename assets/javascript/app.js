$(document).ready(function(){

	// Variables
var count = 10;
var i = 0;
var h = -1;
var answersRight = 0;
var answersWrong = 0;
var currentQuestion = 0;

// Question Slides

var q1 = $(".q1");
var q2 = $(".q2");
var q3 = $(".q3");

	// Answer slides

var a1 = $(".a1");
var a2 = $(".a2");
var a3 = $(".a3");

// Answer Arrays
var answerSlides = [a1, a2, a3];
var questionArray = [q1, q2, q3];
var answerkeyArray = [1, 2, 3, 4, 1];
var answer = 0;


console.log(questionArray);

   // Hides questions/answers

$(".questions").hide();
$("#timer").hide();
$(".answerSlides").hide();


   // Button begins quiz and timer

$(function(){
    $(".start").on("click",function(){
        $(".start").hide();
        $("#timer").show();
        $(q1).show();
        timer();
        

    });

    // Radio button clicked function

 $(".option").on("click",function(){
answer = $("form input[type='radio']:checked").val();

})


    // Timer function

function timer()
{	
	$("#timer").html(count + " seconds remaining");
	var counter = setTimeout(timer, 1000);
	count=count-1;
	

  if (count <= -1 || answer >=1)
  {   
  	answer = 0;   
    answers();
  	i = i + 1;
  	h = h + 1;
  	$(questionArray[h]).hide();
    $(questionArray[i]).show();
   	count = 10;

  }


}

	// Checks for correct and incorrect answers

function answers() {
	
	var answerCheck = answerkeyArray[i];
	var correctA = answerSlides[i];

		if(answer === answerCheck) {
			answersRight = answersRight + 1;
			console.log(answersRight);
			
		}
		else if(answer !== answerCheck){
			answersWrong = answersWrong + 1;
			console.log(answersWrong);
			
		}
		else if (i === questionkeyArray.length){
		alert("end");
	}
	
}

	// Resets program




});
});


