
//                   Global Vars

var seconds = 30;
var selectedAnswer;
var correct = 0; 
var timer = 0;
var	wrong = 0;
var qnumber = 0;
var radios;
var j = 0;
var k;
$('#triviaPage').hide();
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
	answer		:	1
	},
	{
	question	:	"Which band has only one guitarist?",
	choices		:	["Styx", "Boston", "Iron Maiden", "Judas Priest", "Deep Purple"],
	answer		:	5
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
	for(var j = 0; j < questions[qnumber].choices.length; j++) {
		$("#choices" + j).text("   " + questions[qnumber].choices[j]);
		seconds = 30;
		//startCountdown();
	}
	
}

function startCountdown () {
	var timer = setTimeout(function() { 
		$('#display').text(seconds--);
		  if (seconds <= 0) {
			$('#display').fadeOut('fast');
			clearTimeout(timer);			
		} 
	}, 1000);
	wrongAnswer ();
}


function getSubmit (){
	
	radios = document.getElementsByName('Trivia');
		for  (k = 0; k < radios.length; k++) {
			if (radios[k].checked === true) {
				selectedAnswer = radios[k].value;
				console.log(selectedAnswer);
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
	
	console.log("player Chose " + selectedAnswer + " The correct answer was " + questions[qnumber].choices[rightAnswer]);
	
	if(selectedAnswer == questions[qnumber].answer) {
		$('#results').html("You are a Rock Star");
	}	
	else {
		$('#results').html("The correct answer is " +  questions[qnumber].choices[rightAnswer]); 
	}
	
	$('#wins').text("Wins:   " + correct);
	$('#losses').text("Losses: " + wrong);
	
	if(questions[qnumber].question == questions.length) {
		$('#gameOver').text("Game Over");
	}
	else {
		//var pauseTime = setInterval(function(){ console.log("pause 5 seconds"); }, 5000);
			
		clearBoard();
	}
}

function clearBoard () {
	document.getElementsByName('Trivia');
	for  (k = 0; k < radios.length; k++) {
		radios[k].checked = false;
	}
	qnumber++;
	//$('#scoreBoard').hide();
	loadQuestion();
}



//        Event Handlers  

$('#start').on('click', function() {
	startGame();
});
	
$('#submit').on('click', function() {
	getSubmit();
});
