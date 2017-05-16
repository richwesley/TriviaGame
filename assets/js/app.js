
//                   Global Vars

var seconds = 15;
var selectedAnswer;
var correct = 0; 
var	wrong = 0;
var qnumber = 0;
var radios;
var j = 0;
var k;
$('#triviaPage').hide();
$('#scoreBoard').hide();
$('#strike').hide();


var questions = [
	{
	question	:	"Who is the current Foreigner singer?",
	choices		:	["Lou Gramm", "Kelley Hansen", "Mick Jones", "Al Greenwood", "Johnny Edwards"],
	answer		:	1
	},
	{
	question	:	"Which guitarist was never in Whitesnake",
	choices		:	["Adrian Vandenberg", "Steve Vai", "Jeff Watson", "Mel Galley", "Vivian ampbell"],
	answer		:	2
	},
	{
	question	:	"Which band headlined the first Monsters of Rock festival",
	choices		:	["The Scorpions", "Saxxon", "Black Sabbath", "Rainbow", "Kiss"],
	answer		:	3
	},
	{
	question	:	"What is Alice Cooper's boa contrictor's name?",
	choices		:	["Julius Squeezer", "Gigantus Erectis", "Lovie", "Big Ed", "Stephen"],
	answer		:	0
	},
	{
	question	:	"Which band has only one guitarist?",
	choices		:	["Styx", "Boston", "Iron Maiden", "Judas Priest", "Deep Purple"],
	answer		:	4
	}
];



//        Functions

function startGame () {
	$('#startPage').hide();
	
	loadQuestion ();
}


function loadQuestion () {
	$('#triviaPage').show();
	$("#question").html("  "+ questions[qnumber].question);
	for(j = 0; j < questions[qnumber].choices.length; j++) {
		$("#choices" + j).text("   " + questions[qnumber].choices[j]);	
	}
	seconds = 15;
	startCountdown();
}

function startCountdown () {
	
	var timer = setInterval(function() {
		seconds--;
		$('#display').text(seconds);
		console.log(seconds);
		  if (seconds <= 0) {
			$('#display').hide();			  
			clearInterval(timer);
			radios = document.getElementsByName('Trivia');  
			wrongAnswer (); 
		} 
	}, 1000);	
}


function getSubmit (){
	
	radios = document.getElementsByName('Trivia');
		for  (k = 0; k < radios.length; k++) {
			if (radios[k].checked === true) {
				selectedAnswer = radios[k].value;
				checkChoice();
			}
		}
}
			
function checkChoice () {
			       				
			if(selectedAnswer == questions[qnumber].answer) {
				correctAnswer ();
			}	
			else {
				wrongAnswer ();   
			}
} 
	
function correctAnswer () {
	correct++;
	console.log("correct " + correct);
	scoreBoard();
	
}

function wrongAnswer () {
	wrong++;
	console.log("wrong " + wrong);
	scoreBoard();
	
}

function scoreBoard () {
	$('#triviaPage').hide();
	$('#scoreBoard').show();
	
	var rightAnswer = questions[qnumber].answer;
	
	console.log("player Chose " + questions[qnumber].choices[selectedAnswer] + " The correct answer was " + questions[qnumber].choices[rightAnswer]);
	
	if(selectedAnswer == questions[qnumber].answer) {
		$('#results').html("You are a Rock Star");
	}	
	else {
		$('#results').html("The correct answer is " +  questions[qnumber].choices[rightAnswer]); 
	}
	
	$('#wins').text("Wins:   " + correct);
	$('#losses').text("Losses: " + wrong);
	var lastQuestion = qnumber + 1;
	console.log(lastQuestion);
	
	if(lastQuestion == questions.length) {
		setTimeout(function(){
			$('#results').hide();
			$('#gameOver').text("Game Over");    
	  	}, 2000);
		
		$('#gameOver').text("Game Over");
	}
	else {
		console.log(lastQuestion + "  " + questions.length);
		setTimeout(function(){
			 clearBoard();   
	  	}, 3000);
	}
					
}


function clearBoard () {
	document.getElementsByName('Trivia');
	for  (k = 0; k < 5; k++) {
		radios[k].checked = false;
	}
	qnumber++;
	$('#scoreBoard').hide();
	loadQuestion();
}



//        Event Handlers  

$('#start').on('click', function() {
	startGame();
});
	
$('#submit').on('click', function() {
	getSubmit();
});
