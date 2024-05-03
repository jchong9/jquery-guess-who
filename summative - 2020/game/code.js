/*
	Jeremy Chong, Karson Chan and Manash Mathan
	2021/01/04
	External javascript and jquery page
	This page shows all the javascript and jquery for the game.
*/
let name="";
let redOption=false;
let blueOption=false;
let userGuess="";
let compGuess="";
let userSelectedCharacter="";
let compSelectedCharacter="";

let userCharacters=["Baldie", "Joe", "Karen", "Beanie", "Mary", "Will", "Anita", "Claire", "Eyepatch", "Bob", "Santa", "Michael", "Susan", "Emoji", "Bernard", "Charlie", "Mia", "Frank", "Louis", "Dreads"];
let compCharacters=["Baldie", "Joe", "Karen", "Beanie", "Mary", "Will", "Anita", "Claire", "Eyepatch", "Bob", "Santa", "Michael", "Susan", "Emoji", "Bernard", "Charlie", "Mia", "Frank", "Louis", "Dreads"];

let compQuestions=[
"Is your character male?",
"Does your character wear an eyepatch?",
"Is your character bald?",
"Does your character wear glasses?",
"Does your character wear a hat?",
"Does your character have facial hair?",
"Does your character have pink hair?",
"Does your character wear pink clothes?",
"Does your character have heart eyes?", 
"Does your character have long hair?",
"Does your character have black hair?"
];
let userQuestions=[
"Is your character male?",
"Does your character wear an eyepatch?",
"Is your character bald?",
"Does your character wear glasses?",
"Does your character wear a hat?",
"Does your character have facial hair?",
"Does your character have pink hair?",
"Does your character wear pink clothes?",
"Does your character have heart eyes?", 
"Does your character have long hair?",
"Does your character have black hair?"
];

let compQuestionIndex=0;
let userQuestionIndex=0;

let compSelectedQuestion="";
let userSelectedQuestion="";

let compAnswers=[];

let userAnswer1="";
let userAnswer2="";
let userAnswer3="";
let userAnswer4="";
let userAnswer5="";
let userAnswer6="";
let userAnswer7="";
let userAnswer8="";
let userAnswer9="";
let userAnswer10="";
let userAnswer11="";
let userCorrectAnswers=[];

let question1Answered=false;
let question2Answered=false;
let question3Answered=false;
let question4Answered=false;
let question5Answered=false;
let question6Answered=false;
let question7Answered=false;
let question8Answered=false;
let question9Answered=false;
let question10Answered=false;
let question11Answered=false;
let questionAnsweredCorrectly=false;

let character1Index=0;
let character2Index=0;
let character3Index=0;
let character4Index=0;
let character5Index=0;
let character6Index=0;
let character7Index=0;
let character8Index=0;
let character9Index=0;
let character10Index=0;
let character11Index=0;
let character12Index=0;
let character13Index=0;
let character14Index=0;
let character15Index=0;
let character16Index=0;
let character17Index=0;
let character18Index=0;
let character19Index=0;
let character20Index=0;

let eliminatedCharacterIndex=[];
let userTipShown=false;
let turn=1;

//This function determines the correct answers to the  questions based on the computer and user's character.
function questionAnswers () {
	//Computer's predetermined question answers.
	if (compSelectedCharacter=="Baldie")
	{
		compAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Joe")
	{
		compAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Karen")
	{
		compAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Beanie")
	{
		compAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Mary")
	{
		compAnswers=["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Will")
	{
		compAnswers=["Yes", "No", "Yes", "Yes", "Yes", "No", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Anita")
	{
		compAnswers=["No", "No", "No", "No", "No", "No", "Yes", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Claire")
	{
		compAnswers=["No", "No", "No", "Yes", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Eyepatch")
	{
		compAnswers=["Yes", "Yes", "Yes", "No", "No", "Yes", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Bob")
	{
		compAnswers=["Yes", "No", "No", "Yes", "No", "Yes", "No", "No", "No", "Yes", "Yes"];
	}
	else if (compSelectedCharacter=="Santa")
	{
		compAnswers=["Yes", "No", "Yes", "No", "Yes", "Yes", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Michael")
	{
		compAnswers=["Yes", "No", "No", "No", "No", "No", "Yes", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Susan")
	{
		compAnswers=["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "Yes"];
	}
	else if (compSelectedCharacter=="Emoji")
	{
		compAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "Yes", "No", "No"];
	}
	else if (compSelectedCharacter=="Bernard")
	{
		compAnswers=["Yes", "Yes", "Yes", "No", "No", "No", "No", "No", "Yes", "No", "No"];
	}
	else if (compSelectedCharacter=="Charlie")
	{
		compAnswers=["No", "No", "No", "No", "No", "No", "No", "Yes", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Mia")
	{
		compAnswers=["No", "No", "No", "Yes", "No", "No", "No", "Yes", "No", "Yes", "No"];
	}
	else if (compSelectedCharacter=="Frank") 
	{
		compAnswers=["Yes", "No", "No", "Yes", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (compSelectedCharacter=="Louis")
	{
		compAnswers=["Yes", "No", "No", "No", "No", "No", "Yes", "No", "No", "Yes", "No"];
	}
	else
	{
		compAnswers=["Yes", "No", "No", "No", "No", "Yes", "No", "No", "No", "Yes", "No"];
	}
	//User's predetermined question answers.
	if (userSelectedCharacter=="Baldie")
	{
		userCorrectAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Joe")
	{
		userCorrectAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Karen")
	{
		userCorrectAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Beanie")
	{
		userCorrectAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Mary")
	{
		userCorrectAnswers=["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Will")
	{
		userCorrectAnswers=["Yes", "No", "Yes", "Yes", "Yes", "No", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Anita")
	{
		userCorrectAnswers=["No", "No", "No", "No", "No", "No", "Yes", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Claire")
	{
		userCorrectAnswers=["No", "No", "No", "Yes", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Eyepatch")
	{
		userCorrectAnswers=["Yes", "Yes", "Yes", "No", "No", "Yes", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Bob")
	{
		userCorrectAnswers=["Yes", "No", "No", "Yes", "No", "Yes", "No", "No", "No", "Yes", "Yes"];
	}
	else if (userSelectedCharacter=="Santa")
	{
		userCorrectAnswers=["Yes", "No", "Yes", "No", "Yes", "Yes", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Michael")
	{
		userCorrectAnswers=["Yes", "No", "No", "No", "No", "No", "Yes", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Susan")
	{
		userCorrectAnswers=["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "Yes"];
	}
	else if (userSelectedCharacter=="Emoji")
	{
		userCorrectAnswers=["Yes", "No", "Yes", "No", "No", "No", "No", "No", "Yes", "No", "No"];
	}
	else if (userSelectedCharacter=="Bernard")
	{
		userCorrectAnswers=["Yes", "Yes", "Yes", "No", "No", "No", "No", "No", "Yes", "No", "No"];
	}
	else if (userSelectedCharacter=="Charlie")
	{
		userCorrectAnswers=["No", "No", "No", "No", "No", "No", "No", "Yes", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Mia")
	{
		userCorrectAnswers=["No", "No", "No", "Yes", "No", "No", "No", "Yes", "No", "Yes", "No"];
	}
	else if (userSelectedCharacter=="Frank") 
	{
		userCorrectAnswers=["Yes", "No", "No", "Yes", "No", "No", "No", "No", "No", "No", "No"];
	}
	else if (userSelectedCharacter=="Louis")
	{
		userCorrectAnswers=["Yes", "No", "No", "No", "No", "No", "Yes", "No", "No", "Yes", "No"];
	}
	else
	{
		userCorrectAnswers=["Yes", "No", "No", "No", "No", "Yes", "No", "No", "No", "Yes", "No"];
	}
}

//This function determines if the user is lying to the computer about their character and shows an error.
function lieDetection () { 
	if (userAnswer1!=userCorrectAnswers[0] && question1Answered==true) //If the user answers with a lie, an error will occur. 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();
	}
	else if (userAnswer2!=userCorrectAnswers[1] && question2Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();
	}
	else if (userAnswer3!=userCorrectAnswers[2] && question3Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();	
	}
	else if (userAnswer4!=userCorrectAnswers[3] && question4Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();		
	}
	else if (userAnswer5!=userCorrectAnswers[4] && question5Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();		
	}
	else if (userAnswer6!=userCorrectAnswers[5] && question6Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();		
	}
	else if (userAnswer7!=userCorrectAnswers[6] && question7Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();		
	}
	else if (userAnswer8!=userCorrectAnswers[7] && question8Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();		
	}
	else if (userAnswer9!=userCorrectAnswers[8] && question9Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();		
	}
	else if (userAnswer10!=userCorrectAnswers[9] && question10Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();		
	}
	else if (userAnswer11!=userCorrectAnswers[10] && question11Answered==true) 
	{
		$("#lblError").text("LYING IS NOT GOOD!");
		$("#errorScreen").show();		
	}
	else // If the user answers the computer's question truthfully.
	{
		questionAnsweredCorrectly=true;
	}
}

//This function determines the win and loss of the user and computer.
function winSystem () { 
	if (userCharacters.length==1) //If there is only one character left on the board.
	{
		userGuess=userCharacters;
		$("#lblUserGuess").text(userGuess);
		$("#userGuessScreen").delay(1000).show();
		$("#userGuessScreen").delay(0.5).animate({"opacity": "1"}, 700);
		if (userGuess==compSelectedCharacter) //If the user's guess is correct, it will be the computer's loss.
		{
			$("#winScreen").delay(3250).show();
			$("#winScreen").delay(0.5).animate({"opacity": "1"}, 700);
		}
		else //If the user's guess is wrong, they will lose.
		{
			$("#loseScreen").delay(3250).show();
			$("#loseScreen").delay(0.5).animate({"opacity": "1"}, 700);
		}
	}

	if (compCharacters.length==1)
	{
		compGuess=compCharacters;
		$("#lblCompGuess").text(compGuess); 
		$("#compGuessScreen").delay(250).show();
		$("#compGuessScreen").delay(0.5).animate({"opacity": "1"}, 700);
		if (compGuess==userSelectedCharacter) //If the computer's guess is correct, it will be the user's loss.
		{
			$("#loseScreen").delay(3250).show();
			$("#loseScreen").delay(0.5).animate({"opacity": "1"}, 700);
		}
		else //If the computer's guess is wrong, the computer will lose.
		{
			$("#winScreen").delay(3250).show();
			$("#winScreen").delay(0.5).animate({"opacity": "1"}, 700);
		}
	}
}

//This function determines what question the user is asking to the computer and removes the characters based on the answer.
function playUserTurn () {
	//If the character is eliminated, the index will return -1.
	character1Index=userCharacters.indexOf("Baldie");
	character2Index=userCharacters.indexOf("Joe");
	character3Index=userCharacters.indexOf("Karen");
	character4Index=userCharacters.indexOf("Beanie");
	character5Index=userCharacters.indexOf("Mary");
	character6Index=userCharacters.indexOf("Will");
	character7Index=userCharacters.indexOf("Anita");
	character8Index=userCharacters.indexOf("Claire");
	character9Index=userCharacters.indexOf("Eyepatch");
	character10Index=userCharacters.indexOf("Bob");
	character11Index=userCharacters.indexOf("Santa");
	character12Index=userCharacters.indexOf("Michael");
	character13Index=userCharacters.indexOf("Susan");
	character14Index=userCharacters.indexOf("Emoji");
	character15Index=userCharacters.indexOf("Bernard");
	character16Index=userCharacters.indexOf("Charlie");
	character17Index=userCharacters.indexOf("Mia");
	character18Index=userCharacters.indexOf("Frank");
	character19Index=userCharacters.indexOf("Louis");
	character20Index=userCharacters.indexOf("Dreads");

	if (userSelectedQuestion=="Is your character male?") //This determines what question the user is asking and eliminates the characters appropriately based on computer's answer.
	{
		if (compAnswers[0]=="Yes") //If computer's answer is "Yes" on question 1
		{
			$("#character3").delay(4).animate({"opacity": "0"}, 700); // Fades out the cards that are being eliminated.
			$("#character5").delay(4).animate({"opacity": "0"}, 700);
			$("#character7").delay(4).animate({"opacity": "0"}, 700);
			$("#character8").delay(4).animate({"opacity": "0"}, 700);
			$("#character13").delay(4).animate({"opacity": "0"}, 700);
			$("#character16").delay(4).animate({"opacity": "0"}, 700);
			$("#character17").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character3Index, character5Index, character7Index, character8Index, character13Index, character16Index, character17Index]; //Adds the index of the eliminated characters to the array.
		}
		else //If computer's answer is "No" on question 1
		{
			$("td:not(#character3, #character5, #character7, #character8, #character13, #character16, #character17)").animate({"opacity": "0"}, 700);  //Removes all characters except 5, 7, 8, 13, 16 and 17.
			eliminatedCharacterIndex=[character1Index, character2Index, character4Index, character6Index, character9Index, character10Index, character11Index, character12Index, character14Index, character15Index, character18Index, character19Index, character20Index];
		}
	}
	else if (userSelectedQuestion=="Does your character wear an eyepatch?")
	{
		if (compAnswers[1]=="Yes")
		{
			$("td:not(#character9, #character15)").animate({"opacity": "0"}, 700); 
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character4Index, character5Index, character6Index, character7Index, character8Index, character10Index, character11Index, character12Index, character13Index, character14Index, character16Index, character17Index, character18Index, character19Index, character20Index];

		}
		else
		{
			$("#character9").delay(4).animate({"opacity": "0"}, 700);
			$("#character15").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character9Index, character15Index];
		}
	}
	else if (userSelectedQuestion=="Is your character bald?") 
	{
		if (compAnswers[2]=="Yes")
		{
			$("td:not(#character1, #character4, #character6, #character9, #character11, #character14, #character15)").animate({"opacity": "0"}, 700); 
			eliminatedCharacterIndex=[character2Index, character3Index, character5Index, character7Index, character8Index, character10Index, character12Index, character13Index, character16Index, character17Index, character18Index, character19Index, character20Index];
			
		}
		else
		{
			$("#character1").delay(4).animate({"opacity": "0"}, 700);
			$("#character4").delay(4).animate({"opacity": "0"}, 700);
			$("#character6").delay(4).animate({"opacity": "0"}, 700);
			$("#character9").delay(4).animate({"opacity": "0"}, 700);
			$("#character11").delay(4).animate({"opacity": "0"}, 700);
			$("#character14").delay(4).animate({"opacity": "0"}, 700);
			$("#character15").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character1Index, character4Index, character6Index, character9Index, character11Index, character14Index, character15Index];
		}
	}
	else if (userSelectedQuestion=="Does your character wear glasses?")
	{
		if (compAnswers[3]=="Yes")
		{
			$("td:not(#character3, #character6, #character8, #character10, #character17, #character18)").animate({"opacity": "0"}, 700); 
			eliminatedCharacterIndex=[character1Index, character2Index, character4Index, character5Index, character7Index, character9Index, character11Index, character12Index, character13Index, character14Index, character15Index, character16Index, character19Index, character20Index];
		}
		else
		{
			$("#character3").delay(4).animate({"opacity": "0"}, 700);
			$("#character6").delay(4).animate({"opacity": "0"}, 700);
			$("#character8").delay(4).animate({"opacity": "0"}, 700);
			$("#character10").delay(4).animate({"opacity": "0"}, 700);
			$("#character17").delay(4).animate({"opacity": "0"}, 700);
			$("#character18").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character3Index, character6Index, character8Index, character10Index, character17Index, character18Index];
		}
	}
	else if (userSelectedQuestion=="Does your character wear a hat?") 
	{
		if (compAnswers[4]=="Yes")
		{
			$("td:not(#character4, #character6, #character11)").animate({"opacity": "0"}, 700); 
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character5Index, character7Index, character8Index, character9Index, character10Index, character12Index, character13Index, character14Index, character15Index, character16Index, character17Index, character18Index, character19Index, character20Index];
		}
		else
		{
			$("#character4").delay(4).animate({"opacity": "0"}, 700);
			$("#character6").delay(4).animate({"opacity": "0"}, 700);
			$("#character11").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character4Index, character6Index, character11Index];
		}
	}
	else if (userSelectedQuestion=="Does your character have facial hair?")
	{
		if (compAnswers[5]=="Yes")
		{
			$("td:not(#character2, #character9, #character10, #character11, #character20)").animate({"opacity": "0"}, 700); 
			eliminatedCharacterIndex=[character1Index, character3Index, character4Index, character5Index, character6Index, character7Index, character8Index, character12Index, character13Index, character14Index, character15Index, character16Index, character17Index, character18Index, character19Index];

		}
		else
		{
			$("#character2").delay(4).animate({"opacity": "0"}, 700);
			$("#character9").delay(4).animate({"opacity": "0"}, 700);
			$("#character10").delay(4).animate({"opacity": "0"}, 700);
			$("#character11").delay(4).animate({"opacity": "0"}, 700);
			$("#character20").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character2Index, character9Index, character10Index, character11Index, character20Index];
		}
	}
	else if (userSelectedQuestion=="Does your character have pink hair?")
	{
		if (compAnswers[6]=="Yes")
		{
			$("td:not(#character7, #character12, #character19)").animate({"opacity": "0"}, 700); 	
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character4Index, character5Index, character6Index, character8Index, character9Index, character10Index, character11Index, character13Index, character14Index, character15Index, character16Index, character17Index, character18Index, character20Index];

		}
		else
		{
			$("#character7").delay(4).animate({"opacity": "0"}, 700);
			$("#character12").delay(4).animate({"opacity": "0"}, 700);
			$("#character19").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character7Index, character12Index, character19Index];
		}
	}
	else if (userSelectedQuestion=="Does your character wear pink clothes?")
	{
		if (compAnswers[7]=="Yes")
		{
			$("td:not(#character16, #character17)").animate({"opacity": "0"}, 700); 
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character4Index, character5Index, character6Index, character7Index, character8Index, character9Index, character10Index, character11Index, character12Index, character13Index, character14Index, character15Index, character18Index, character19Index, character20Index];

		}
		else
		{
			$("#character16").delay(4).animate({"opacity": "0"}, 700);
			$("#character17").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character16Index, character17Index];
		}
	}
	else if (userSelectedQuestion=="Does your character have heart eyes?")
	{
		if (compAnswers[8]=="Yes")
		{
			$("td:not(#character14, #character15)").animate({"opacity": "0"}, 700); 
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character4Index, character5Index, character6Index, character7Index, character8Index, character9Index, character10Index, character11Index, character12Index, character13Index, character16Index, character17Index, character18Index, character19Index, character20Index];

		}
		else
		{
			$("#character14").delay(4).animate({"opacity": "0"}, 700);
			$("#character15").delay(4).animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character14Index, character15Index];

		}
	}
	else if (userSelectedQuestion=="Does your character have long hair?") 
	{
		if (compAnswers[9]=="Yes")
		{
			$("td:not(#character3, #character17, #character19, #character20)").animate({"opacity": "0"}, 700);
			eliminatedCharacterIndex=[character1Index, character2Index, character4Index, character5Index, character6Index, character7Index, character8Index, character9Index, character11Index, character12Index, character13Index, character14Index, character15Index, character16Index, character18Index]; 	

		}
		else
		{
			$("#character3").delay(4).animate({"opacity": "0"}, 700);
			$("#character17").delay(4).animate({"opacity": "0"}, 700);		
			$("#character19").delay(4).animate({"opacity": "0"}, 700);	
			$("#character20").delay(4).animate({"opacity": "0"}, 700);	
			eliminatedCharacterIndex=[character3Index, character10Index, character17Index, character19Index, character20Index];
		}
	}
	else 
	{
		if (compAnswers[10]=="Yes")
		{
			$("td:not(#character2, #character3, #character10, #character13)").animate({"opacity": "0"}, 700); 	
			eliminatedCharacterIndex=[character1Index, character4Index, character5Index, character6Index, character7Index, character8Index, character9Index, character11Index, character12Index, character14Index, character15Index, character16Index, character17Index, character18Index, character19Index, character20Index];

		}
		else
		{
			$("#character2").delay(4).animate({"opacity": "0"}, 700);		
			$("#character3").delay(4).animate({"opacity": "0"}, 700);		
			$("#character10").delay(4).animate({"opacity": "0"}, 700);		
			$("#character13").delay(4).animate({"opacity": "0"}, 700);		
			eliminatedCharacterIndex=[character2Index, character3Index, character10Index, character13Index];
		}
	}
	eliminatedCharacterIndex.sort((a, b) => a - b); // Sorts the array from least to greatest. Specifically used to put the eliminated character indexes of -1 in the front of array.
	while (eliminatedCharacterIndex[0]==-1) // Loop that continuously gets rid of the first element in array if it equals to -1.
	{
		eliminatedCharacterIndex.shift();
	}
	for (let i=eliminatedCharacterIndex.length-1; i>=0; i=i-1) // Goes through the array in a reverse order and removes the appropriate characters from array based on the user's question and the computer's answer.
	{
		userCharacters.splice(eliminatedCharacterIndex[i], 1);
	}
	userQuestions.splice(userQuestionIndex, 1) //Gets rid of the question that was used.
	if (userQuestionIndex>userQuestions.length-1) //If the last question is removed, it will go back to the question before it.
	{
		userQuestionIndex=userQuestionIndex-1;
	}
	userSelectedQuestion=userQuestions[userQuestionIndex];
	$("#lblUserSelectedQuestion").text(userSelectedQuestion);
	winSystem();
}

//This function makes the computer generate a random question and shows the user a popup of said question.
function playCompTurn () {
	compQuestionIndex=Math.round(Math.random()*(compQuestions.length-1)); //Generates a random number that corresponds with a question.
	compSelectedQuestion=compQuestions[compQuestionIndex];
	compQuestions.splice(compQuestionIndex, 1); //Removes the questions that has already been used from the array.
	$("#lblCompQuestion").text(compSelectedQuestion);
	$("#compTurn").delay(1150).show();
	$("#compTurn").delay(0.5).animate({"opacity": "1"}, 700);	
}

//This function determines what question the computer is asking and removes the character based on the answer.
function compCharacterElimination () {
	character1Index=compCharacters.indexOf("Baldie");
	character2Index=compCharacters.indexOf("Joe");
	character3Index=compCharacters.indexOf("Karen");
	character4Index=compCharacters.indexOf("Beanie");
	character5Index=compCharacters.indexOf("Mary");
	character6Index=compCharacters.indexOf("Will");
	character7Index=compCharacters.indexOf("Anita");
	character8Index=compCharacters.indexOf("Claire");
	character9Index=compCharacters.indexOf("Eyepatch");
	character10Index=compCharacters.indexOf("Bob");
	character11Index=compCharacters.indexOf("Santa");
	character12Index=compCharacters.indexOf("Michael");
	character13Index=compCharacters.indexOf("Susan");
	character14Index=compCharacters.indexOf("Emoji");
	character15Index=compCharacters.indexOf("Bernard");
	character16Index=compCharacters.indexOf("Charlie");
	character17Index=compCharacters.indexOf("Mia");
	character18Index=compCharacters.indexOf("Frank");
	character19Index=compCharacters.indexOf("Louis");
	character20Index=compCharacters.indexOf("Dreads");

	if (compSelectedQuestion=="Is your character male?") //This determines what question the computer is asking and eliminates the characters appropriately based on user's answer.
	{
		if (userAnswer1=="Yes")
		{
			eliminatedCharacterIndex=[character3Index, character5Index, character7Index, character8Index, character13Index, character16Index, character17Index];
		}
		else
		{
			eliminatedCharacterIndex=[character1Index, character2Index, character4Index, character6Index, character9Index, character10Index, character11Index, character12Index, character14Index, character15Index, character18Index, character19Index, character20Index];
		}
	}
	else if (compSelectedQuestion=="Does your character wear an eyepatch?")
	{
		if (userAnswer2=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character4Index, character5Index, character6Index, character7Index, character8Index, character10Index, character11Index, character12Index, character13Index, character14Index, character16Index, character17Index, character18Index, character19Index, character20Index];
		}
		else
		{
			eliminatedCharacterIndex=[character9Index, character15Index];
		}
	}
	else if (compSelectedQuestion=="Is your character bald?") 
	{
		if (userAnswer3=="Yes")
		{
			eliminatedCharacterIndex=[character2Index, character3Index, character5Index, character7Index, character8Index, character10Index, character12Index, character13Index, character16Index, character17Index, character18Index, character19Index, character20Index];
		}
		else
		{
			eliminatedCharacterIndex=[character1Index, character4Index, character6Index, character9Index, character11Index, character14Index, character15Index];
		}
	}
	else if (compSelectedQuestion=="Does your character wear glasses?")
	{
		if (userAnswer4=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character2Index, character4Index, character5Index, character7Index, character9Index, character11Index, character12Index, character13Index, character14Index, character15Index, character16Index, character19Index, character20Index];
		}
		else
		{
			eliminatedCharacterIndex=[character3Index, character6Index, character8Index, character10Index, character17Index, character18Index];
		}
	}
	else if (compSelectedQuestion=="Does your character wear a hat?")
	{
		if (userAnswer5=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character5Index, character7Index, character8Index, character9Index, character10Index, character12Index, character13Index, character14Index, character15Index, character16Index, character17Index, character18Index, character19Index, character20Index];
		}
		else
		{
			eliminatedCharacterIndex=[character4Index, character6Index, character11Index];
		}
	}
	else if (compSelectedQuestion=="Does your character have facial hair?")
	{
		if (userAnswer6=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character3Index, character4Index, character5Index, character6Index, character7Index, character8Index, character12Index, character13Index, character14Index, character15Index, character16Index, character17Index, character18Index, character19Index];
		}
		else
		{
			eliminatedCharacterIndex=[character2Index, character9Index, character10Index, character11Index, character20Index];
		}
	}
	else if (compSelectedQuestion=="Does your character have pink hair?")
	{
		if (userAnswer7=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character4Index, character5Index, character6Index, character8Index, character9Index, character10Index, character11Index, character13Index, character14Index, character15Index, character16Index, character17Index, character18Index, character20Index];
		}
		else
		{
			eliminatedCharacterIndex=[character7Index, character12Index, character19Index];
		}
	}
	else if (compSelectedQuestion=="Does your character wear pink clothes?")
	{
		if (userAnswer8=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character4Index, character5Index, character6Index, character7Index, character8Index, character9Index, character10Index, character11Index, character12Index, character13Index, character14Index, character15Index, character18Index, character19Index, character20Index];
		}
		else
		{
			eliminatedCharacterIndex=[character16Index, character17Index];
		}
	}
	else if (compSelectedQuestion=="Does your character have heart eyes?")
	{
		if (userAnswer9=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character2Index, character3Index, character4Index, character5Index, character6Index, character7Index, character8Index, character9Index, character10Index, character11Index, character12Index, character13Index, character16Index, character17Index, character18Index, character19Index, character20Index];
		}
		else
		{
			eliminatedCharacterIndex=[character14Index, character15Index];
		}
	}
	else if (compSelectedQuestion=="Does your character have long hair?")
	{
		if (userAnswer10=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character2Index, character4Index, character5Index, character6Index, character7Index, character8Index, character9Index, character11Index, character12Index, character13Index, character14Index, character15Index, character16Index, character18Index];
		}
		else
		{
			eliminatedCharacterIndex=[character3Index, character10Index, character17Index, character19Index, character20Index];
		}
	}
	else 
	{
		if (userAnswer11=="Yes")
		{
			eliminatedCharacterIndex=[character1Index, character4Index, character5Index, character6Index, character7Index, character8Index, character9Index, character11Index, character12Index, character14Index, character15Index, character16Index, character17Index, character18Index, character19Index, character20Index];
		}
		else
		{
			eliminatedCharacterIndex=[character2Index, character3Index, character10Index, character13Index];
		}
	}
	eliminatedCharacterIndex.sort((a, b) => a - b); // Sorts the array from least to greatest. Specifically used to put the eliminated character indexes of -1 in the front of array.
	while (eliminatedCharacterIndex[0]==-1)
	{
		eliminatedCharacterIndex.shift();
	}
	for (let i=eliminatedCharacterIndex.length-1; i>=0; i--) // Goes through the array in a reverse order and removes the appropriate characters from array based on the computer's question and the user's answer.
	{
		compCharacters.splice(eliminatedCharacterIndex[i], 1);
	}
}

$(document).ready(function() {

	// Setting the background music and how loud it will be.
	var bgMusic=document.getElementById("backgroundAudio");
  	bgMusic.volume=0.2;

	compSelectedCharacter=Math.round(Math.random()*20);
	compSelectedCharacter=compCharacters[compSelectedCharacter];
	console.log(compSelectedCharacter);

	userSelectedQuestion=userQuestions[userQuestionIndex];
	$("#lblUserSelectedQuestion").text(userSelectedQuestion);

	$("#btnPlay").click(function(event) {
		/* Act on the event */
		name=$("#txtName").val();
		redOption=$("#radRed").prop("checked");
		blueOption=$("#radBlue").prop("checked");
		if (name=="")
		{
			$("#lblError").text("PLEASE ENTER A VALID NAME!");
			$("#errorScreen").show();
		}
		else
		{
			$("#startScreen").hide();
			$("#guessWhoGame").show(); // The show function makes hidden elements visible.
			$("#lblChooseCharacter").html(name + ", <br/> CHOOSE YOUR CHARACTER!"); // The HTML function allows the programmer to use HTML tags within the element such as <br/>
			$("#startUp").delay(0.5).animate({"opacity": "1"}, 700);
			$("#startUp").delay(1650).fadeOut(500, function() { // Delays the fade out animation.
				$("#startUp").hide();
			}); //END OF START UP FADE OUT FUNCTION
		}
		if (redOption==true) 
		{
			$("td").css('background-color', '#d31c2c'); // Changes the background colour of the table cells based off the user's choice.
			$("#sideBar").css('background-color', '#d31c2c'); 
		}
		else 
		{
			$("td").css('background-color', '#3c94cc');
			$("#sideBar").css('background-color', '#3c94cc');
		}
	}); //END OF CLICK PLAY BUTTON FUNCTION

	$("#closeButton").click(function(event) {
		/* Act on the event */
		$("#errorScreen").hide();
	}); //END OF CLOSE BUTTON CLICK FUNCTION 

	//The 20 functions below are to assign the character to the user, according to their choice, and include the images of said characters in the div.
	$("#character1").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character1.png", width:"300", height:"300"})); // The prepend function allows the programmer to insert elements such as images.
			userSelectedCharacter="Baldie";
		}
	}); //END OF CHARACTER 1 CLICK FUNCTION

	$("#character2").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character2.png", width:"300", height:"300"}));
			userSelectedCharacter="Joe";
		}
	}); //END OF CHARACTER 2 CLICK FUNCTION

	$("#character3").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character3.png", width:"300", height:"300"}));
			userSelectedCharacter="Karen";
		}
	}); //END OF CHARACTER 3 CLICK FUNCTION

	$("#character4").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character4.png", width:"300", height:"300"}));
			userSelectedCharacter="Beanie";
		}
	}); //END OF CHARACTER 4 CLICK FUNCTION

	$("#character5").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character5.png", width:"300", height:"300"}));
			userSelectedCharacter="Mary";
		}
	}); //END OF CHARACTER 5 CLICK FUNCTION

	$("#character6").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character6.png", width:"300", height:"300"}));
			userSelectedCharacter="Will";
		}
	}); //END OF CHARACTER 6 CLICK FUNCTION

	$("#character7").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character7.png", width:"300", height:"300"}));
			userSelectedCharacter="Anita";
		}
	}); //END OF CHARACTER 7 CLICK FUNCTION

	$("#character8").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character8.png", width:"300", height:"300"}));
			userSelectedCharacter="Claire";
		}
	}); //END OF CHARACTER 8 CLICK FUNCTION

	$("#character9").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character9.png", width:"300", height:"300"}));
			userSelectedCharacter="Eyepatch";
		}
	}); //END OF CHARACTER 9 CLICK FUNCTION

	$("#character10").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character10.png", width:"300", height:"300"}));
			userSelectedCharacter="Bob";
		}
	}); //END OF CHARACTER 10 CLICK FUNCTION

	$("#character11").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character11.png", width:"300", height:"300"}));
			userSelectedCharacter="Santa";
		}
	}); //END OF CHARACTER 11 CLICK FUNCTION

	$("#character12").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character12.png", width:"300", height:"300"}));
			userSelectedCharacter="Michael";
		}
	}); //END OF CHARACTER 12 CLICK FUNCTION

	$("#character13").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character13.png", width:"300", height:"300"}));
			userSelectedCharacter="Susan";
		}
	}); //END OF CHARACTER 13 CLICK FUNCTION

	$("#character14").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character14.png", width:"300", height:"300"}));
			userSelectedCharacter="Emoji";
		}
	}); //END OF CHARACTER 14 CLICK FUNCTION

	$("#character15").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character15.png", width:"300", height:"300"}));
			userSelectedCharacter="Bernard";
		}
	}); //END OF CHARACTER 15 CLICK FUNCTION

	$("#character16").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character16.png", width:"300", height:"300"}));
			userSelectedCharacter="Charlie";
		}
	}); //END OF CHARACTER 16 CLICK FUNCTION

	$("#character17").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character17.png", width:"300", height:"300"}));
			userSelectedCharacter="Mia";
		}
	}); //END OF CHARACTER 17 CLICK FUNCTION

	$("#character18").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character18.png", width:"300", height:"300"}));
			userSelectedCharacter="Frank";
		}
	}); //END OF CHARACTER 18 CLICK FUNCTION

	$("#character19").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character19.png", width:"300", height:"300"}));
			userSelectedCharacter="Louis";
		}
	}); //END OF CHARACTER 19 CLICK FUNCTION

	$("#character20").click(function(event) {
		/* Act on the event */
		if (userSelectedCharacter=="")
		{
			$("#userCharacterImg").prepend($("<img>",{id:"characterImg",src:"../images/character20.png", width:"300", height:"300"}));
			userSelectedCharacter="Dreads";
		}
	}); //END OF CHARACTER 20 CLICK FUNCTION
	// This is the end of the click functions of the 20 characters.

	$("td").hover(function() {
		/* Stuff to do when the mouse enters the element */
		if (userSelectedCharacter!="")
		{
			$("td").css('box-shadow', '0 0 0 0');
		}
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		if (userSelectedCharacter!="")
		{
			$("td").css('box-shadow', '0 0 0 0');
		}
	}); //END OF TD HOVER FUNCTION

	$("td").click(function(event) { //If any character card is clicked
		/* Act on the event */
		if (userSelectedCharacter!="")  
		{
			if (userTipShown==false) //Makes sure that the user tip screen only shows once after they have picked their character.
			{
				$("#userTurn").show();
				$("#userTurn").delay(0.5).animate({"opacity": "1"}, 700);
				$("#userTurn").delay(2700).fadeOut(500, function() { // Delays the fade out animation.
					$("#userTurn").hide();
				}); //END OF USER TURN FADE OUT FUNCTION
				userTipShown=true;
				$("td").css('pointer-events', 'none'); // Gets rid of the pointer styles once a character is chosen.
				questionAnswers();
			}	
		}
	}); // END OF TD CLICK FUNCTION

	$("#prevQuestionBox").click(function(event) {
		/* Act on the event */
		userQuestionIndex=userQuestionIndex-1;
		if (userQuestionIndex<0) //If the user clicks the previous button when the index is 0, it will go to the last element in the array.
		{
			userQuestionIndex=userQuestions.length-1;
		}
		userSelectedQuestion=userQuestions[userQuestionIndex];
		$("#lblUserSelectedQuestion").text(userSelectedQuestion);
	}); //END OF PREVQUESTIONBOX CLICK FUNCTION

	$("#nextQuestionBox").click(function(event) {
		/* Act on the event */
		userQuestionIndex=userQuestionIndex+1;
		if (userQuestionIndex>userQuestions.length-1) //If the user clicks the next button when the index is the last element, it will go to the first element in the array.
		{
			userQuestionIndex=0;
		}
		userSelectedQuestion=userQuestions[userQuestionIndex];
		$("#lblUserSelectedQuestion").text(userSelectedQuestion);	
	}); //END OF NEXTQUESTIONBOX CLICK FUNCTION

	$("#btnSubmit").click(function(event) {
		/* Act on the event */	
		if (userSelectedCharacter=="")
		{
			$("#lblError").text("PLEASE SELECT A CHARACTER!");
			$("#errorScreen").show();
		}
		else 
		{
			if (turn==1) // The user's turn.
			{
				if (userSelectedQuestion=="Is your character male?") //Depending on the question, the computer's answer will change.
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[0]);
				}
				else if (userSelectedQuestion=="Does your character wear an eyepatch?")
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[1]);
				}
				else if (userSelectedQuestion=="Is your character bald?") 
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[2]);
				}
				else if (userSelectedQuestion=="Does your character wear glasses?")
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[3]);
				}
				else if (userSelectedQuestion=="Does your character wear a hat?") 
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[4]);
				}
				else if (userSelectedQuestion=="Does your character have facial hair?")
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[5]);
				}
				else if (userSelectedQuestion=="Does your character have pink hair?")
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[6]);
				}
				else if (userSelectedQuestion=="Does your character wear pink clothes?")
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[7]);
				}
				else if (userSelectedQuestion=="Does your character have heart eyes?")
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[8]);
				}
				else if (userSelectedQuestion=="Does your character have long hair?") 
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[9]);
				}
				else 
				{
					$("#lblCompAnswer").text("COMPUTER'S ANSWER: " + compAnswers[10]);
				}
				$("#compAnswerPopUp").slideDown('slow', function() { //slides the msg up
					$("#compAnswerPopUp").show();
					$("#compAnswerPopUp").delay(1200).slideUp('slow', function() { //slides msg down
						$("#compAnswerPopUp").hide();
						playUserTurn();
						turn=2;
						if (userGuess=="") // If the user has not guessed yet, it will be the computer's turn.
						{
							playCompTurn();
							turn=1;
						}
					}); // END OF COMPUTER ANSWER POPUP SLIDE UP.
				}); // END OF COMPUTER ANSWER POPUP SLIDE DOWN.
			}
		}
	}); //END OF BUTTON SUBMIT CLICK FUNCTION

	$("#btnYes").click(function(event) {
		/* Act on the event */	
		if (compSelectedQuestion=="Is your character male?")
		{
			userAnswer1="Yes";
			question1Answered=true;
		}
		else if (compSelectedQuestion=="Does your character wear an eyepatch?")
		{
			userAnswer2="Yes";
			question2Answered=true;
		}
		else if (compSelectedQuestion=="Is your character bald?")
		{
			userAnswer3="Yes";
			question3Answered=true;
		}
		else if (compSelectedQuestion=="Does your character wear glasses?")
		{
			userAnswer4="Yes";
			question4Answered=true;
		}
		else if (compSelectedQuestion=="Does your character wear a hat?")
		{
			userAnswer5="Yes";
			question5Answered=true;
		}
		else if (compSelectedQuestion=="Does your character have facial hair?")
		{
			userAnswer6="Yes";
			question6Answered=true;
		}
		else if (compSelectedQuestion=="Does your character have pink hair?")
		{
			userAnswer7="Yes";
			question7Answered=true;
		}
		else if (compSelectedQuestion=="Does your character wear pink clothes?")
		{
			userAnswer8="Yes";
			question8Answered=true;
		}
		else if (compSelectedQuestion=="Does your character have heart eyes?")
		{
			userAnswer9="Yes";
			question9Answered=true;
		}
		else if (compSelectedQuestion=="Does your character have long hair?")
		{
			userAnswer10="Yes";
			question10Answered=true;
		}
		else 
		{
			userAnswer11="Yes";
			question11Answered=true;
		}
		lieDetection();
		if (questionAnsweredCorrectly==true) //If the user answered truthfully.
		{
			compCharacterElimination();
			$("#compTurn").fadeOut(500, function() { // Delays the fade out animation.
				$("#compTurn").css('opacity', '0');
				$("#compTurn").hide();
				winSystem(); //Win screen appears once the user has answered the computer's question.
			}); //END OF USER TURN FADE OUT FUNCTION
			questionAnsweredCorrectly=false;
			question1Answered=false;
			question2Answered=false;
			question3Answered=false;
			question4Answered=false;
			question5Answered=false;
			question6Answered=false;
			question7Answered=false;	
			question8Answered=false;
			question9Answered=false;
			question10Answered=false;
			question11Answered=false;
		}
	}); //END OF BUTTON YES CLICK FUNCTION

	$("#btnNo").click(function(event) {
		/* Act on the event */
		if (compSelectedQuestion=="Is your character male?")
		{
			userAnswer1="No";
			question1Answered=true;
		}
		else if (compSelectedQuestion=="Does your character wear an eyepatch?")
		{
			userAnswer2="No";
			question2Answered=true;
		}
		else if (compSelectedQuestion=="Is your character bald?")
		{
			userAnswer3="No";
			question3Answered=true;
		}
		else if (compSelectedQuestion=="Does your character wear glasses?")
		{
			userAnswer4="No";
			question4Answered=true;
		}
		else if (compSelectedQuestion=="Does your character wear a hat?")
		{
			userAnswer5="No";
			question5Answered=true;
		}
		else if (compSelectedQuestion=="Does your character have facial hair?")
		{
			userAnswer6="No";
			question6Answered=true;
		}
		else if (compSelectedQuestion=="Does your character have pink hair?")
		{
			userAnswer7="No";
			question7Answered=true;
		}
		else if (compSelectedQuestion=="Does your character wear pink clothes?")
		{
			userAnswer8="No";
			question8Answered=true;
		}
		else if (compSelectedQuestion=="Does your character have heart eyes?")
		{
			userAnswer9="No";
			question9Answered=true;
		}
		else if (compSelectedQuestion=="Does your character have long hair?")
		{
			userAnswer10="No";
			question10Answered=true;
		}
		else 
		{
			userAnswer11="No";
			question11Answered=true;
		}
		lieDetection();
		if (questionAnsweredCorrectly==true)
		{
			compCharacterElimination();
			$("#compTurn").fadeOut(500, function() { // Delays the fade out animation.
				$("#compTurn").css('opacity', '0');
				$("#compTurn").hide();
				winSystem();
			}); //END OF USER TURN FADE OUT FUNCTION
			questionAnsweredCorrectly=false;
			question1Answered=false;
			question2Answered=false;
			question3Answered=false;
			question4Answered=false;
			question5Answered=false;
			question6Answered=false;
			question7Answered=false;	
			question8Answered=false;
			question9Answered=false;
			question10Answered=false;
			question11Answered=false;
		}
	}); //END OF BUTTON NO CLICK FUNCTION

	$("#btnWinReturn, #btnLoseReturn").click(function(event) {
		/* Act on the event */
		window.location.replace("index.html"); //Switches the page to itself, thus returning everything to default.
	}); //END OF WIN RETURN BUTTON AND LOSE RETURN BUTTON CLICK FUNCTION

}); //END OF DOCUMENT READY FUNCTION