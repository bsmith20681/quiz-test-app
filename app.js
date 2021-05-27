var questionBoxEl = document.getElementById("question-box");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");

// Timer
let time = 59;

var countdoenEl = document.getElementById("countdown");
function updateCountdown(e) {
  var minutes = Math.floor(time / 60);
  time = time < 1 ? "0" + time : time;
  countdoenEl.innerHTML = `${minutes}: ${time}`;
  e === true ? (time = time - 5) : time--;
  //time--;
  time = time < 0 ? 0 : time;
  console.log(time);
}

function minusSeconds() {
  return time - 5;
}

// Making questions random
let randomQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
//Start the Game
function startGame() {
  startButton.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionBoxEl.classList.remove("hide");
  setNextQuestion();
  setInterval(updateCountdown, 1000);
}
//Setting up questions
function setNextQuestion() {
  resetState();
  showQuestion(randomQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}
//Answers
function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  if (correct === undefined) {
    updateCountdown(true);
  }
  setStatusClass(document.body, correct);

  Array.from(answerButtonsEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}
//Righ or Wrong Answer
function setStatusClass(element, correct) {
  clearStatusClass(element);
  element.classList.add("start");
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// Submit Results
function submitScore() {
  let userScore = submitScoreEl.value.trim();
}
//Quiz questions
var questions = [
  {
    question:
      "Which of the following is not Javascript frameworks or libraries?",
    answers: [
      { text: "Polymer", correct: false },
      { text: "Meteor", correct: false },
      { text: "Cassandra", correct: true },
      { text: "jQuery", correct: false },
    ],
  },
  {
    question: "Which of the following is not JavaScript Data Types?",
    answers: [
      { text: "Undefined", correct: false },
      { text: "Number", correct: false },
      { text: "Boolean", correct: false },
      { text: "Float", correct: true },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<head>", correct: false },
      { text: "meta", correct: false },
      { text: "style", correct: false },
    ],
  },
  {
    question:
      "Which of the following is correct about features of JavaScript? ",
    answers: [
      { text: "It can not handle dates and time", correct: false },
      {
        text: "JavaScript is a object-based scripting language",
        correct: true,
      },
      {
        text: "JavaScript is not interpreter based scripting language",
        correct: false,
      },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "What is the orginial name of JavaScript?",
    answers: [
      { text: "LiveScript", correct: false },
      { text: "EScript", correct: false },
      { text: "Mocha", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question:
      "Which method of an Array object adds and/or removes elements from an array",
    answers: [
      { text: "Reverse", correct: false },
      { text: "Shift", correct: false },
      { text: "Slice", correct: false },
      { text: "Splice", correct: true },
    ],
  },
  {
    question: "What is the purpose of the Attr object in the HTML DOM? ",
    answers: [
      {
        text: "Used to focus on a particular part of the HTML page",
        correct: false,
      },
      { text: "HTML Attribute", correct: true },
      { text: "Used to arrange elements", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question: "JavaScript is ideal to?",
    answers: [
      { text: "Make computations in HTML simpler", correct: false },
      {
        text: "Minimize storage requirements on the web server ",
        correct: true,
      },
      { text: "Increase the download time for the client", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question:
      "What does the interpreter do when you reference variables in other scopes?",
    answers: [
      { text: "Traverse the queue", correct: false },
      { text: "Traverse the stack", correct: true },
      { text: "Find the bugs", correct: false },
      { text: "Traverse the array", correct: false },
    ],
  },
  {
    question: " JavaScript is designed for following purpose",
    answers: [
      { text: "To style HTML pages", correct: false },
      {
        text: "to execute Queries related to databases on a server",
        correct: false,
      },
      { text: "To add interactivity to HTML pages", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  //   {
  //     question: 'What does javascript use instead of == and !=?',
  //     answers: [
  //       { text: 'It uses bitwise checking', correct: false },
  //       { text: 'it uses === and !== instead', correct: true },
  //       { text: 'It uses equals () and notequals() instead', correct: false },
  //       { text: 'It uses equalto()', correct: false }
  //     ]
  //   },
  //   {
  //     question: 'What should appear at the very end of your JavaScript?',
  //     answers: [
  //       { text: '</script>', correct: true },
  //       { text: '<script>', correct: false },
  //       { text: '</script language= javascript>', correct: false },
  //       { text: 'All of the above', correct: false }
  //     ]
  //   },
  //   {
  //     question: 'Javascript string using double quotes is exactly the same as a string using single quotes?',
  //     answers: [
  //       { text: 'True', correct: true },
  //       { text: 'False', correct: false },
  //       { text: 'Maybe', correct: false },
  //       { text: 'It does not matter', correct: false }
  //     ]
  //   },
  //   {
  //     question: 'Which of the following are errors in JavaScript?',
  //     answers: [
  //       { text: '<Load time errors', correct: false },
  //       { text: '<Run time errors', correct: true },
  //       { text: 'Logical errors', correct: false },
  //       { text: 'Data errors', correct: false }
  //     ]
  //   },
  //   {
  //     question: 'What are the two basic groups of data types in JavaScript?',
  //     answers: [
  //       { text: 'Primitive', correct: false },
  //       { text: 'Reference types', correct: false },
  //       { text: 'All of the above', correct: true },
  //       { text: 'None of the above', correct: false }
  //     ]
  //   },
  //   {
  //     question: 'What is a definition of an undefined value in JavaScript?',
  //     answers: [
  //       { text: 'Variable used in the code does not exist', correct: false },
  //       { text: 'Variable is not assigned to any value', correct: false },
  //       { text: 'Property does not exist', correct: false },
  //       { text: 'All of the above', correct: true }
  //     ]
  //   },
  //   {
  //     question: 'Which of them is not the looping structures in JavaScript?',
  //     answers: [
  //       { text: 'for', correct: false },
  //       { text: 'while', correct: true },
  //       { text: 'forwhich', correct: false },
  //       { text: 'dowhile', correct: false }
  //     ]
  //   },
  //   {
  //     question: 'How do we define the term Thread?',
  //     answers: [
  //       { text: 'Device that controls input', correct: false },
  //       { text: 'Variable that controls movement', correct: false },
  //       { text: 'Controlled execution of applications', correct: true },
  //       { text: 'None of the above', correct: false }
  //     ]
  //   },
  //   {
  //     question: 'Among the keywords below, which one is not a statement?',
  //     answers: [
  //       { text: 'If', correct: false },
  //       { text: 'With', correct: false },
  //       { text: 'Debugger', correct: false },
  //       { text: 'Use Strict', correct: true }
  //     ]
  //   },
  //   {
  //     question: 'Which symbol is used for comments in Javascript?',
  //     answers: [
  //       { text: '//', correct: true },
  //       { text: '--', correct: false },
  //       { text: '/*', correct: false },
  //       { text: '!!', correct: false }
  //     ]
  //   },
];
