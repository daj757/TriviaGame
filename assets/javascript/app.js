$(document).ready(function(){

	// Variables
var count = 10;
var count2 = 4;
var i = 0;
var h = -1;
var j = 0;
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
var answerkeyArray = [4, 2, 3, 4, 1];
var answer = 0;




   // Hides questions/answers

$(".questions").hide();
$("#timer").hide();
$(".answerSlides").hide();
$(".scoreboard").hide();


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


    // Timer function on questions

function timer()
{	
	$("#timer").html("You have " + count + " seconds remaining");
	var counter = setTimeout(timer, 1000);
	count=count-1;
	

  if (count <= -1 || answer >=1)
  {    
    answers();
  	i = i + 1;
  	h = h + 1;
  	$(questionArray[h]).hide();
  	clearTimeout(counter);
  	answerSlide();
   	count = 10;

  }
  	else if (j >= answerSlides.length){
		alert("end");
	}


}
// Sets answer slides with timer

function answerSlide(){
	var timer1 = setTimeout(answerSlide, 1000);
	answer = 0;
	$("#timer").hide();

	$(answerSlides[j]).show();
	count2=count2-1;

		if(count2<=-1){
		count2 = 4;
		j = j + 1;
		clearTimeout(timer1);
		timer();
		$("#timer").show();
		$(questionArray[i]).show();
		$(answerSlides[h]).hide();

		}


}

	// Checks for correct and incorrect answers

function answers() {
	
	var answerCheck = answerkeyArray[i];
	var correctA = answerSlides[i];
	console.log(answerCheck);
	console.log(answer);

		if(answer == answerCheck) {
			answersRight = answersRight + 1;
			
			$("#genAnswer").html("You have were right!");
			
		}

		else if(answer == 0){
			$("#genAnswer").html("You ran out of time :("); 
		}
		
		else if(answer !== answerCheck){
			answersWrong = answersWrong + 1;
			$("#genAnswer").html("You have were wrong");
			
		}
		
	
}

	// Resets program




});
});


