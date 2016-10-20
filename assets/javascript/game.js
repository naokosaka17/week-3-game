//variables that holds data.
var wordArray = ["pumpkin","witch","mummy","vampire","halloween"];
var selectedword ="";
var correctLetters = [];
var numBlanks = 0;
var blankAndSuccesses = []; //p_ _ _ _
var wrongLetters =[];
var guessesLeft = 15;
var winCount = 0;

//change to HTML 
var correctLetters = document.getElementById("correctLetters");
var lifeLeft = document.getElementById("lifeLeft");
var wrongLetters = document.getElementById("wrongLetters");


function startGame() {
	selectedword = wordArray[Math.floor(Math.random() * wordArray.length)];
	correctLetters = selectedword.split("");
	numBlanks = correctLetters.length;

	//Reset 
	guessesLeft = 15;
	wrongLetters = [];
	blankAndSuccesses = [];
	



	for (var i = 0; i < numBlanks; i++) { 
		blankAndSuccesses.push("_");
	}

	document.getElementById("correctLetters").innerHTML = blankAndSuccesses.join(" ");
	document.getElementById("winCount").innerHTML = winCount;

	console.log(selectedword);
	console.log(correctLetters);
	console.log(numBlanks);
}

function checkletters(letter){
	var letterInword = false;
	for (var i=0; i<numBlanks; i++){
		if(selectedword[i] == letter){
			letterInword = true;
		}
	}

	if(letterInword){
		for (var i = 0; i<numBlanks; i++){
			if(selectedword[i] == letter){
				blankAndSuccesses[i] = letter;
			}
		}
	}
	else{
		wrongLetters.push(letter);
		guessesLeft--;
	}
	console.log(blankAndSuccesses);
}

function gameover(){
	console.log("win Count:" + winCount + "| Life left:" + guessesLeft);

	document.getElementById("lifeLeft").innerHTML = guessesLeft;
	document.getElementById("correctLetters").innerHTML = blankAndSuccesses.join(" ");
	document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");

	if (correctLetters.toString() == blankAndSuccesses.toString()){
		winCount++;
	 	//alert("You Won!");
	 	correctLetters.innerHTML = correctLetters;
	 	document.getElementById("answer").innerHTML = "YOU WON!!! " + correctLetters.join(" ") + "!";
	 	


		startGame();
	}
	else if (guessesLeft== 0){
	 	//alert("You Lost");
	 	document.getElementById("answer").innerHTML = "YOU LOST!!!";
	 	document.getElementById("picture").src = "assets/images/ghostlady.jpg";
	  	startGame();
	}
}

startGame();
checkletters();

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkletters(letterGuessed);
	gameover(" ");

console.log(letterGuessed);
}



