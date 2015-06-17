$(document).ready(function() {
	$(".answer").click(function (e) {
        e.preventDefault();

        

        function qManager(qString, choice1, choice2, choice3, correctAnswer) {
		  this.qString    = qString;
		  this.aImg       = aImg;
		  this.correctAnswer  = correctAnswer;

			var q1 = new qManager('Where is Blue Moon from?', 'Belgium', 'Colorado', 'Nepal', choice2);
			var q2 = new qManager('Where is Green Flash from?', 'Belgium', 'Cali', 'India', choice2);
			var q3 = new qManager('Where is Taj Mahal from?', 'Colorado', 'Holland', 'India', choice3);

			this.Ask = function() {
			var question = document.getElementById('question-block');
			$(question).innerHtml = ('Test');
		}

		q1.Ask();
		
		}

		$('.choices-block>img').on('click',function() {
			//evaluate if answer is correct
			var count = 0;
			count++;
			$('#count').html(count);
		});
		//Timer
//

 	})
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
  


    	/*

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