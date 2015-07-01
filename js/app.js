$(document).ready(function() {


	var currentQuestion;
	var score;

	var newGame = function(){
		currentQuestion = 0;
		score = 0;

		changeQ();
	}

	var allQuestions = [{
		        question      :   "What is the name of the Game0?",  
		        choices       : 	[ "images/Odell_Brewing_Company_logo.png",
		        					  "images/Odell_Brewing_Company_logo.png",
		        					  "images/Odell_Brewing_Company_logo.png"],
		        correctAnswer :   2
		    },
		    {
		        question      :   "What is the name of the Game1?",  
		        choices       : 	[ "images/Odell_Brewing_Company_logo.png",
		        					  "images/Odell_Brewing_Company_logo.png",
		        					  "images/Odell_Brewing_Company_logo.png"],
		        correctAnswer :   2
		    },
		    {
		        question      :   "What is the name of the Game2?",  
		        choices       : 	[ "images/Odell_Brewing_Company_logo.png",
		        					  "images/Odell_Brewing_Company_logo.png",
		        					  "images/Odell_Brewing_Company_logo.png"],
		        correctAnswer :   2
		    }];


//timer

	var countDown  = 5;
	var countTimer = setInterval(timer, 1000);

	function timer() {
		countDown -= 1;
		if (countDown === 0 ){
			clearInterval(countTimer);
			alert("Time is up! Next Question");
	    	currentQuestion++;
	    	changeQ();
		}

		$('#timer').html(countDown);
	}


//Add new questions

	function changeQ() {
        $('#question-block').empty();
		$('#question-block').append(allQuestions[currentQuestion]['question']);

		countDown = 5;
		countTimer = setInterval(timer, 1000); 
		timer();

		$('#qNum').html(currentQuestion + 1);
		if (allQuestions[currentQuestion].hasOwnProperty('choices') && allQuestions[currentQuestion]['choices'].length > 0) {
			addChoices(allQuestions[currentQuestion]['choices']);
	     }

	}


	function addChoices(choices) {
        $('#choices-block').empty();
        for (var i = 0; i < choices.length; i++) {
            $(document.createElement('li')).addClass('choice').attr('data-index', i).appendTo('#choices-block').prepend('<img id="theImg" src="'+choices[i]+'" />');
        }

	    $('.choice').on('click', function(e) {
	    	var idx = this.getAttribute('data-index');
	    	console.log(idx);
	    	if (idx == allQuestions[currentQuestion].correctAnswer) {
	    		// do correct question logic here
				$('#beers-won>ul').append('<li>' + score + '</li>');
				score++;
	    		alert("CORRECT!");
	    	} else {
	    		// do incorrect question logic here
	    		alert("INCORRECT");
	    	}

	    	if (currentQuestion + 1 == allQuestions.length) {
	    		countDown = 0;
	    		alert("You answered " + score + " questions correctly. Thank you for playing!");
	    	} else {
		    	currentQuestion++;
		    	changeQ();
		    }
	    });
    }

	newGame();

// closing whole game
});



/*
			function processQuestion(choice) {
         if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
             $('.choice').eq(choice).css({
                 'background-color': '#50D943'
             });
             $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
             score++;
         } else {
             $('.choice').eq(choice).css({
                 'background-color': '#D92623'
             });
*/

			//check which choice was picked
			//check if the picked choice is correct
			//move to next question.
		






/*		var $choice1 = $('#choice1');
		var $choice2 = $('#choice2');
		var $choice4 = $('#choice3')


	var q1 = new Question('Where is Blue Moon from?', 'images/new_belgium.jpg', 'images/new_belgium.jpg', 'images/new_belgium.jpg', 2);
	var q2 = new Question('Where is Clue Moon from?', 'images/new_belgium.jpg', 'images/new_belgium.jpg', 'images/new_belgium.jpg', 2);
	var q3 = new Question('Where is Dlue Moon from?', 'images/new_belgium.jpg', 'images/new_belgium.jpg', 'images/new_belgium.jpg', 2);


	function updateQuiz(Question) {
		Question.Ask();
		$('.choice1').src(Question.choice1);
		$('.choice2').src(Question.choice2);
		$('.choice3').src(Question.choice3);
	}

	updateQuiz(q3);


	$(".answer").click(function (e) {
        e.preventDefault(); 

		q1.Ask();

		//Counter

			$('.choices-block>img').on('click',function() {
			//evaluate if answer is correct
			var count = 0;
			count++;
			$('#count').innerHtml(count);

		//Timer
//

 	})
 });
});



//Prompt to start game

/*       	var QuestionManager = {
    			this.question = function(qString, aNum) {
    				this.qString = qString;
    				this.aNum = aNum;
    			};

    		this.display = function() {
    			$('#question-block').innerHtml('<p> ' + qString + ' ' + '</p>');
    			};

    		};

   		// this.teardown = function() {
   		// 	$('.choices-block').on('click', function() {
   		// 	$(this).hide;
   		// 	})
   		// };
   			
    	// Teardown: 2 conditions: if user click on answer, if timer runs out
    	// put you run out of time in the timer
  


    	

    	this.next = function() {
	    	qs[this.currentQuestion].display();
	    }

	    this.eval = function() {
	    	qs[this.currentQuestion].teardown();
	    	this.currentQuestion += 1;
	    	this.next();
	    }

    };

    // put the onClick here
    QuestionManager.eval()
    // end onClick
});

*/




