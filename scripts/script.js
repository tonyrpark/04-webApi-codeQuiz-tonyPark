// Variables 

var beginQuiz = document.querySelector("#buttonBtn"); 
var leaderBtn = document.querySelector("#leaderBtn"); 
var timerDisplay = document.querySelector(".timer"); 
var gameCard = documet.querySelector("#gameCard"); 
var question = document.querySelector("#question"); 
var answer = document.querySelector("#answer"); 
var feedback = document.querySelector("#feedback1"); 
var card = document.querySelector("#multipleChoice"); 
var inputForm = document.querySelector("#inputForm"); 
var scoreCard = document.querySelector("#scoreCard"); 
var scoreBtn = document.querySelector ("#scoreBtn"); 
var initialsBox = document.querySelector("#initialsBox");
var submitBtn = document.querySelector("#submitBtn"); 
var backBtn = document.querySelector("#backBtn"); 
var clearBtn = document.querySelector("#clearBtn"); 
var start = document.querySelector("#.start");  

// Multiple Choice variables

var mcA = documet.querySelector("#mcA"); 
var mcB = document.querySelector("#mcB"); 
var mcC = document.querySelector("#mcC");
var mcD = document.querySelector("#mcD"); 

// Scorecard and Time

var timeLeft = questionBank.length * 15; 
var q = 0; 
var s = 0; 
var score = 0; 
var scoreList = []; 
var timeInterval; 

getScore(); 

// Timer Function

function timer() {
    timeInterval = setInterval(function () {
        timeLeft--; 
        timerDisplay.textContent = "TIMER: " + timeLeft; 

        if (timeLeft === 0 || q >= questionBank.length) {
            clearInterval(timeInterval); 
            gameOver(); 
        }
    }, 1000);
}

// Question and Answers from questionBank pulled from array positions

function displayQA() {
    if (q < questionBank.length) {
        question.textContent = questionBank[q].question; 
        mcA.textContent = questionBank[q].selection[0];
        mcB.textContent = questionBank[q].selection[1];
        mcC.textContent = questionBank[q].selection[2];
        mcD.textContent = questionBank[q].selection[3]; 
    } else {
        gameOver();
    }
}

