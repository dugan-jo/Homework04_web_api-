// VARIABLE DECLARATIONS vvvvvvvv --------------------------------
var startBtnEl = document.querySelector(".startBtn");
var countDown = document.querySelector("#countDown");
var startTime = 20;
var form = document.querySelector("#form");
var falseBtnEl = document.querySelector("#false");
var trueBtnEl = document.querySelector("#true");
var answerButtonEl = document.querySelector(".btn");
var questionText = document.querySelector(".questionText");
var scoresContainer = document.querySelector("#scoresContainer");
var highScores = document.querySelector("#highscores");
var questionContainer = document.querySelector(".questionContainer");
var questionResult = document.querySelector(".questionResult");
var initials = document.querySelector("#initials");
var ulScore = document.querySelector("#li-score");

var questionList = 0;
var savedScores = 0;
var score = 0;

var count = localStorage.getItem("count");

// counter.textContent = count;





// QUIZ QUESTIONS - - START - - - - - - - - - - - - - - - - - - - - - - -

var quizQuestions = [{
    question: "I like apples",
    correctAnswer: "FALSE",
  },
  {
    question: "I like JavaScript",
    correctAnswer: "TRUE",
  },
  {
    question: "I like bees",
    correctAnswer: "TRUE",
  },
  {
    question: "I like the ocean",
    correctAnswer: "FALSE",
  },
  {
    question: "I like to go to the park",
    correctAnswer: "TRUE",
  },
  {
    question: "I like to hamburgers",
    correctAnswer: "FALSE",
  },
  {
    question: "I like the sky",
    correctAnswer: "TRUE",
  },
  {
    question: "dirt is fun",
    correctAnswer: "FALSE",
  },
  {
    question: "Are you happy?",
    correctAnswer: "FALSE",
  },
  {
    question: "Is this the end",
    correctAnswer: "TRUE",
  },
];


// QUIZ QUESTIONS  - - END - - - - - - - - - - - - - - - - - - - - - - -
//
//
//
//
//
//
// EVENT LISTENERS - - START - - - - - - - - - - - - - - - - - -


// START BUTTON EVENT LISTENER
startBtnEl.addEventListener("click", function () {
  timer();
  askQuestion();
});

// TRUE/FALSE EVENT LISTENER
falseBtnEl.addEventListener("click", checkAnswer);
trueBtnEl.addEventListener("click", checkAnswer);


// EVENT LISTENERS - - END - - - - - - - - - - - - - - - - - -
//
//
//
//
//
//
// FUNCTIONS - - START - - - - - - - - - - - - - - - - - - - - - - -


// INITIAL FUNCTION - - START
function init() {
  startBtnEl.style.display = "block";
  questionContainer.style.display = "none";
  scoresContainer.style.display = "none";
}

init();
// INITIAL FUNCTION - - END
// 
// 
// ASK-QUESTION FUNCTION - - START
function askQuestion() {
  startBtnEl.style.display = "none";
  questionContainer.style.display = "block";


  if (questionList < quizQuestions.length ) {
    questionText.textContent = quizQuestions[questionList].question
  }
};
// ASK-QUESTION FUNCTION - - END
// 
// 
// TIMER FUNCTION - - START
function timer() {
  timeInterval = setInterval(function () {
    startTime--;
    countDown.innerHTML = startTime.toString();
    console.log(startTime);


    if (startTime <= 0 || questionList >= quizQuestions.length) {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}
// TIMER FUNCTION - - END
// 
// 
// CHECK-ANSWER FUNCTION - - START
function checkAnswer() {

  if (questionList <= quizQuestions.length) {
    questionText.textContent = quizQuestions[questionList].correctAnswer
  }

  var trueOrFalse = quizQuestions[questionList].correctAnswer
  var correctChoice = this.textContent;


  console.log("My Answer: ", trueOrFalse)
  console.log("Correct Answer: ", correctChoice)

  if (trueOrFalse == correctChoice) {
    questionResult.textContent = "CORRECT"
    score++
  } else {
    questionResult.textContent = "WRONG"
    startTime -= 10;
  }

  console.log(score);

  questionList += 1;
  askQuestion()
};
// CHECK-ANSWER FUNCTION - - END
//
// 
// END-GAME FUNCTION - - START
function endGame() {
  var userName = window.prompt("THANKS FOR PLAYING! What is your name?")
  var userObj = {
    userName,
    score,
}
 
  scoresContainer.style.display = "block";
  questionContainer.style.display = "none";
  startBtnEl.style.display = "block";

  var savedScores = JSON.parse(localStorage.getItem("score")) || []
  console.log(savedScores);

  savedScores.push(userObj);

  localStorage.setItem("score", JSON.stringify(savedScores))

  alert("Here is your score, " + userName + "\nScore: " + score)
  
  startTime = 20;
  score = 0;

  

  highScore(savedScores);
};
// END-GAME FUNCTION - - END
// 
// 
// HIGH-SCORE - - START
function highScore(savedScores) {
  for (let i = 0; i < savedScores.length; i++) {
    const element = savedScores[i];
    console.log(element);
    var userName = document.createElement("li")
    // create a text node
    textnode = document.createTextNode(element.userName + " -- " + element.score)
    userName.appendChild(textnode)
    document.getElementById("ulScore").appendChild(userName);
  };
};


 // FINAL MESSAGE - - END
// 
// 
// FUNCTIONS - - END - - - - - - - - - - - - - - - - - - - - - - -
//
//
//
//
//
//