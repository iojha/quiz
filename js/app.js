$(document).ready(function() {

	var currentQuestion;
	var score;

function newGame(){
		$('#beers-won>ul').empty();
		$('#question-block').empty();
		currentQuestion = 0;
		score = 0;
		
		$('#question-block').html('Ready to play?');
		$('#next').hide();
		$('#yes').show();
		
		$('#yes').on('click',function(){
			changeQ();
		});
	}

	newGame();

	var allQuestions = [{
		question: "Which of these breweries is located in Denver, CO?",  
		choices: ["images/odell.png", "images/newBelgium.png", "images/greatDivide.png"],
		beers: "images/beer1.svg",
		correctAnswer: 2,
		},
		{
		question: "Which one of these is the largest brewery in Colorado?",  
		choices: [ "images/coors.png", "images/newBelgium.png", "images/miller.png"],
		beers: "images/beer2.svg",
		correctAnswer: 0
		},
		{
		question: "What is your name",  
		choices: [ "images/newBelgium.png", "images/coors.png", "images/miller.png"],
		beers: "images/beer3.svg",
		correctAnswer: 2,
		},
		{
		question: "What is your GAME",  
		choices: [ "images/newBelgium.png", "images/coors.png", "images/miller.png"],
		beers: "images/beer4.svg",
		correctAnswer: 2,
		},
		{
		question: "What is your NAME",  
		choices: [ "images/miller.png", "images/newBelgium.png", "images/coors.png"],
		beers: "images/beer5.svg",
		correctAnswer: 2,
	}];


//timer

var countDown  = 5;
var countTimer = setInterval(startTimer, 1000);


function startTimer() {
		clearInterval(countTimer);
		countDown = 5;
		$('#timer').html(countDown);
}

function timeFinished() {
	if (countDown == 0) {
		$('#question-block').empty();
		$('#choices-block').empty();
		$('#question-block').html('')
	}
}

/*function startQuiz() {
	$(':button').on('click',function(){
	changeQ();
	});
}
*/

function showNextQuestion() {
	return $('#question-block').html(allQuestions[currentQuestion]['question']);
}

function addChoices(choices) {
	$('#choices-block').empty();
	for (var i = 0; i < choices.length; i++) {
		$(document.createElement('li')).addClass('choice').attr('data-index', i).appendTo('#choices-block').prepend('<img id="theImg" src="'+choices[i]+'" />');
		$('#choices-block>li>#theImg').css('background-color', 'rgba(0, 0, 0, .5)');
	}
}

function changeQ() {
	$('#yes').hide();
	$('#next').hide();
	$('#comment').hide();
	$('#question-block').empty();

	if (allQuestions[currentQuestion]['question'] === " ") {
		endofQuiz();
    } else {
    	$('#question-block').show();
		$('#choices-block').show();
		showNextQuestion();
		addChoices(allQuestions[currentQuestion]['choices']);
		$('#qNum').html(currentQuestion + 1);		
		startTimer();
		evaluateChoice();
	}
}

function evaluateChoice() {
	$('.choice').on('click', function() {

	    $('#choices-block').hide();
	    $('#question-block').hide();
	    $('#comment').show();

		var idx = this.getAttribute('data-index');
		if (idx == allQuestions[currentQuestion].correctAnswer) {
	    	$(document.createElement('li')).appendTo('#beers-won>ul').html('<img src="' + allQuestions[currentQuestion]['beers'] + '" width="30px"' + '/>'); 
	    	$('#comment').html('That is the correct answer!');
	    	score++;
  	    } else {
 	    	$('#comment').html('Sorry but that is not the correct answer.');
		}

		$('#next').show();
		
		$('#next').on('click', function(){
		currentQuestion++;	
		changeQ();
		});
	});
}


function endOfQuiz() {
    return allQuestions[currentQuestion]['question'] === " ";
    $('#timer').html('');
    $('#choices-block').empty();
    $('#comment').empty();
    $('#question-block').empty();
	$('#choices-block').html('Thank you for playing. You won ' + score + ' beers out of 5.');
}
});


//$('#new-game').on('click',function(){
//		newGame();
//	});

// closing whole game


