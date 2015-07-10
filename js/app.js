$(document).ready(function() {

//Data 
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
		question: "Identify the Finkle and Garf Taproom",  
		choices: [ "images/newBelgTaproom.png", "images/finkle.png", "images/averyTaproom.png"],
		beers: "images/beer3.svg",
		correctAnswer: 2,
		},
		{
		question: "Identify the Finkle and Garf Taproom",  
		choices: [ "images/newBelgTaproom.png", "images/finkle.png", "images/averyTaproom.png"],
		beers: "images/beer4.svg",
		correctAnswer: 1,
		},
		{
		question: "This is the last question?",  
		choices: ["images/newBelgium.png", "images/coors.png", "images/miller.png"],
		beers: "images/beer5.svg",
		correctAnswer: 2,
		}
	];



	var currentQuestion;
	var score;

//New game function sets conditions for the new game
	function newGame(){
			$('#beers-won>ul').empty();
			$('#question-block').empty();
			currentQuestion = 0;
			score = 0;
			
			$('#question-block').html('Ready to play?');
			$('#next').hide();
			$('#yes').show();
			$('#timer').html("");
		}

	function startQuiz() {
		$('#yes').on('click',function(){
		changeQ();
		});
	}

	newGame();
	startQuiz();


//Timer
	var countDown  = 5;
	var countTimer = setInterval(startTimer, 1000);

	function startTimer() {
		if (countDown === 0 ){
			clearInterval(countTimer);
			alert("time is up!");
			currentQuestion++;
			changeQ();
		} else {
			countDown -= 1;
		}

		$('#timer').html(countDown);
	}


/*function startQuiz() {
	$(':button').on('click',function(){
	changeQ();
	});
}
*/

//Function that triggers functions showNextQuestion, addChoices and evaluate choice
	function changeQ() {
		$('#yes').hide();
		$('#next').hide();
		$('#comment').hide();
		$('#question-block').empty();

		$('#question-block').show();
		$('#choices-block').show();
		showNextQuestion();
		addChoices(allQuestions[currentQuestion]['choices']);
		$('#qNum').html(currentQuestion + 1);		
		evaluateChoice();
	}

//Set next question to #question-block
	function showNextQuestion() {
		if (allQuestions[currentQuestion] === undefined) {
			endOfQuiz();
		} else {
		return $('#question-block').html(allQuestions[currentQuestion]['question']);
		}
	}


//Set choices to #choices-block
	function addChoices(choices) {
		$('#choices-block').empty();
		for (var i = 0; i < choices.length; i++) {
			$(document.createElement('li')).addClass('choice').attr('data-index', i).appendTo('#choices-block').prepend('<img id="theImg" src="'+choices[i]+'" />');
			$('#choices-block>li>#theImg').css('background-color', 'rgba(0, 0, 0, .5)');
		}
	}

//Evaluate choice made, comment, change score and next steps
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
			countDown  = 5;
			startTimer();
			changeQ();
			});
		});
	}

//End of Quiz
	function endOfQuiz() {
	//    return allQuestions[currentQuestion]['question'] === "0";
	    $('#timer').html('');
	    $('#choices-block').empty();
	    $('#question-block').empty();
		$('#question-block').html('Thank you for playing. You won ' + score + ' beers out of 5.');
	}
	});


// Navbar new-game
	$('#new-game').on('click',function(){
		newGame();
	});



