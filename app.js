 
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
	Question	:	"Which band headlined the first Monsters of Rock festival",
	Choices		:	["The Scorpions", "Saxxon", "Black Sabbath", "Rainbow", "Kiss"],
	Answer		:	3	
	}
];

console.log(questions[0].question);
console.log(questions[0].choices[0]);
console.log(questions[0].answer);
console.log(questions[0].choices.length);

//for(var i=0; i < questions.length; i++) {
	$("#question").html("  "+ questions[0].question);
	for(var j = 0; j < questions[0].choices.length; j++) {
	$("#choices" + j).append("   " + questions[0].choices[j]);
	}

//$('#submit').on('click').checked


function getRadioButton (){
	
	var radios = document.getElementsByName('Trivia');
	console.log(radios);
	console.log(radios.length);
		for (var k = 0; k < radios.length; k++) {
	
    		if (radios[k].checked === true && radios[k].value == questions[0].answer) {
				console.log(radios[k].value);
				console.log(questions[0].answer);
				alert('Your a rock star');
        // do whatever you want with the checked radio
				
				
			}else {
				alert("metal up");
			}
        // only one radio can be logically checked, don't check the rest
        	
			} 
				
				
    
}

var sec = 15;
var timer = setInterval(function() { 
   $('#display').text(sec--);
   if (sec == -1) {
      $('#display').fadeOut('fast');
      clearInterval(timer);
   } 
}, 1000);