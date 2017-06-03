$(document).ready(function(){

	// Variables
var count = 10;
var count2 = 4;
var i = 0;
var h = -1;
var j = 0;
var answersRight = 0;
var answersWrong = 0;


// Question Slides

var q1 = $(".q1");
var q2 = $(".q2");
var q3 = $(".q3");
var q4 = $(".q4");
var q5 = $(".q5");
var q6 = $(".q6");
var q7 = $(".q7");
var q8 = $(".q8");
var q9 = $(".q9");
var q10 = $(".q10");
	// Answer slides

var a1 = $(".a1");
var a2 = $(".a2");
var a3 = $(".a3");
var a4 = $(".a4");
var a5 = $(".a5");
var a6 = $(".a6");
var a7 = $(".a7");
var a8 = $(".a8");
var a9 = $(".a9");
var a10 = $(".a10");

// Answer Arrays
var answerSlides = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var answerkeyArray = [4, 1, 1, 2, 2, 1, 4, 2, 3, 2];
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

 $("input").on("click",function(){

answer = $(".q"+(i+1)+" form input[type='radio']:checked").val();

})


    // Timer function on questions

function timer()
{	
	$("#timer").html(count);
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
  	else if (j === answerSlides.length){
  		clearTimeout(counter);
  		$("#timer").html(" ");
  		$("#timer").hide();
		$(".scoreboard").show();
		$("#rightA").html("You got " + answersRight + " right");
		$("#wrongA").html("You got " + answersWrong + " wrong");

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


		if(answer == answerCheck) {
			answersRight = answersRight + 1;
			
			$(".genAnswer").html("You were right!!");
			
		}

		else if(answer == 0){
			$(".genAnswer").html("You ran out of time :("); 
		}
		
		else if(answer !== answerCheck){
			answersWrong = answersWrong + 1;
			$(".genAnswer").html("Not quite... ");
			
		}
		
	
}



	// Resets program
	
$( ".restart" ).on( "click", function() {
   
    i = 0;
 	h = -1;
 	j = 0;
 	answersRight = 0;
 	answersWrong = 0;
 	$(".scoreboard").hide();
 	$("timer").hide();
 	$(".start").show();
})



});
});

