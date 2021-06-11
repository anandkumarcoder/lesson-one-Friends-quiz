
  //Importing libraries
  var readlineSync = require('readline-sync');
  const chalk = require('chalk');
  




//Universal variables
  var score = 0;

var userName = readlineSync.question("what's your name?  ");

console.log(chalk.yellowBright("Welcome " + userName  +  
"\nLet's play FRIENDS trivia Quiz" + " \nFor each correct answer you will get 1 score\n" ));
//" For each correct answer you will get 1 score" );


var highScores = [
  {
    name: "Rahul",
    score: 4,
  },

  {
    name: "Manok",
    score: 4,
  },
]

//function

  function play(question, answer) {
    var userAnswer= readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log(chalk.green.bold("Correct!"));
      score = score + 1;
    }
    else {
      console.log(chalk.red.bold("Incorrect" + chalk.green("\ncorrect answer is : " + answer)))
    }

    console.log("current score is : ", score)
    console.log("--------")
  }


var question = [{
  question: "Q1:Which character has a twin?\n\n a)Rachel\n b)Phoebe\n c)Ross\n",
  answer: "b"
  }, {
  question: "Q2:Who was Monica’s first kiss? \n a)Chandler\n b)Ross\n c)Joey\n", 
  answer: "b"},
{
 question: "Q3: How many sisters does Joey have? \n\n a)6\n b)7\n c)10\n", 
  answer: "b"},

 { question: "Q4: Where did Carol first meet Susan? \n\n a)At work\n b)At GYm\n c)In college\n", 
  answer: "b"},


 { question: "Q5: What were Ben's first word? \n\n a)Mom\n b)Hi\n c)Dumb\n ", 
  answer: "b"
}];


//function game (){
for (var i=0; i< question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer)}



function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

 highScores.map(score => console.log(score.name, " : ", score.score))
}

 showScores();
