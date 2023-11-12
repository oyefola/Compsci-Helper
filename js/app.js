const questions = [
  {
    question: "1. What is the purpose of the 'use strict' statement in JavaScript?",
    options: {
      a: "Enables stricter parsing and error handling",
      b: "Declares a variable in strict mode",
      c: "Defines a JavaScript library"
    },
    correctAnswer: "a",
    message: "Correct! 'use strict' enables stricter parsing and error handling in JavaScript."
  },
  {
    question: "2. What is the event loop in JavaScript?",
    options: {
      a: "A loop that runs indefinitely",
      b: "A mechanism that allows JavaScript to handle asynchronous operations",
      c: "A loop that iterates through arrays"
    },
    correctAnswer: "b",
    message: "Great job! The event loop is a mechanism that allows JavaScript to handle asynchronous operations."
  },
  {
    question: "3. What is a closure in JavaScript?",
    options: {
      a: "A function that has access to variables from its outer scope",
      b: "A built-in JavaScript method",
      c: "A way to close a web page"
    },
    correctAnswer: "a",
    message: "Excellent! A closure is a function that has access to variables from its outer scope."
  },
  {
    question: "4. What is the purpose of the 'call' and 'apply' methods in JavaScript?",
    options: {
      a: "To invoke a function immediately",
      b: "To change the value of 'this' in a function and pass arguments individually or as an array",
      c: "To create a new JavaScript object"
    },
    correctAnswer: "b",
    message: "Correct! 'call' and 'apply' are used to change the value of 'this' in a function and pass arguments individually or as an array."
  },
  {
    question: "5. What is the difference between 'let', 'const', and 'var' in JavaScript?",
    options: {
      a: "'let' and 'const' are block-scoped, while 'var' is function-scoped",
      b: "'const' cannot be reassigned, while 'let' and 'var' can",
      c: "All of the above"
    },
    correctAnswer: "c",
    message: "Well done! 'let' and 'const' are block-scoped, and 'const' cannot be reassigned, while 'var' is function-scoped."
  },
  {
    question: "6. What is the difference between '=='' and '===' in JavaScript?",
    options: {
      a: "'===' performs strict equality comparison, including data type",
      b: "'==' performs loose equality comparison, ignoring data type",
      c: "Both a and b"
    },
    correctAnswer: "c",
    message: "Correct! '===' performs strict equality comparison, and '==' performs loose equality comparison."
  },
  {
    question: "7. What is the purpose of the 'bind' method in JavaScript?",
    options: {
      a: "To create a new array",
      b: "To bind a function to a particular object, so that 'this' refers to that object",
      c: "To concatenate two strings"
    },
    correctAnswer: "b",
    message: "Great job! The 'bind' method is used to bind a function to a particular object, so that 'this' refers to that object."
  },
  {
    question: "8. What is the difference between 'null' and 'undefined' in JavaScript?",
    options: {
      a: "'null' is assigned by developers, while 'undefined' is automatically assigned by JavaScript",
      b: "'undefined' represents an uninitialized variable, while 'null' represents the absence of a value",
      c: "Both a and b"
    },
    correctAnswer: "c",
    message: "Correct! 'null' is assigned by developers, and 'undefined' represents an uninitialized variable."
  },
  {
    question: "9. What is a callback function in JavaScript?",
    options: {
      a: "A function passed as an argument to another function, which will be invoked later",
      b: "A function that calls another function",
      c: "A function used to validate form inputs"
    },
    correctAnswer: "a",
    message: "Excellent! A callback function is a function passed as an argument to another function, which will be invoked later."
  },
  {
    question: "10. What is the purpose of the 'this' keyword in JavaScript?",
    options: {
      a: "To declare a variable",
      b: "To refer to the current object",
      c: "To create a loop"
    },
    correctAnswer: "b",
    message: "Correct! 'this' is used to refer to the current object in JavaScript."
  },
  {
    question: "11. What is a promise in JavaScript?",
    options: {
      a: "A guarantee that a function will return a value",
      b: "An object representing the eventual completion or failure of an asynchronous operation",
      c: "A built-in JavaScript method"
    },
    correctAnswer: "b",
    message: "Well done! A promise is an object representing the eventual completion or failure of an asynchronous operation."
  },
  {
    question: "12. What is the purpose of the 'map' method in JavaScript?",
    options: {
      a: "To create a new array by applying a function to each element of an existing array",
      b: "To modify the length of an array",
      c: "To check if an array includes a certain element"
    },
    correctAnswer: "a",
    message: "Great job! The 'map' method is used to create a new array by applying a function to each element of an existing array."
  }
];

let currentQuestionIndex = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion) {
    const questionHTML = `
      <div class="question">
        <p>${currentQuestion.question}</p>
        <label>
          <input type="radio" name="currentQuestion" value="a"> ${currentQuestion.options.a}
        </label>
        <label>
          <input type="radio" name="currentQuestion" value="b"> ${currentQuestion.options.b}
        </label>
        <label>
          <input type="radio" name="currentQuestion" value="c"> ${currentQuestion.options.c}
        </label>
        <button type="button" onclick="submitAnswer()">Next</button>
      </div>
    `;
    questionContainer.innerHTML = questionHTML;
  } else {
    // No more questions, display results
    const userScore = calculateUserScore();
    localStorage.setItem('userScore', userScore);
    displayResults(userScore);
  }
}

function submitAnswer() {
  const selectedOption = document.querySelector(`input[name="currentQuestion"]:checked`);

  if (selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption.value === currentQuestion.correctAnswer) {
      // User answered correctly, update score if needed
    }

    // Display encouraging message
    const messageContainer = document.getElementById("welcome-container");
    messageContainer.innerHTML = `<p>${currentQuestion.message}</p>`;

    // Move to the next question
    currentQuestionIndex++;
    displayQuestion();
  } else {
    // User didn't select an option, display a message or handle as needed
    alert("Please select an option before moving to the next question.");
  }
}

function calculateUserScore() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    const selectedOption = document.querySelector(`input[name="currentQuestion"]:checked`);

    if (selectedOption && selectedOption.value === currentQuestion.correctAnswer) {
      score++;
    }
  }

  return score;
}

// Display the first question when the page loads
displayQuestion();

function displayResults(userScore) {
  const resultContainer = document.getElementById("result-container");
  const quizForm = document.getElementById("quiz-form");

  resultContainer.innerHTML = `Congratulations! You scored ${userScore} out of 2!`;

  if (userScore >= 9) {
    resultContainer.innerHTML += '<p>You\'re a web development whiz! Check out these advanced resources:</p>';
    resultContainer.innerHTML += '<div><ul>\
        <li>\
          <a href="https://frontendmasters.com/">Frontend Masters</a>\
        </li>\
        <li>\
          <a href="https://www.egghead.io/">egghead.io</a>\
        </li>\
        <li>\
          <a href="https://www.lynda.com/topic/web-development/330-52456">Lynda.com Web Development Tutorials</a>\
        </li>\
        <li>\
          <a href="https://www.udemy.com/courses/web-development/">Udemy Web Development Courses</a>\
        </li>\
        <li>\
          <a href="https://www.pluralsight.com/paths/advanced-web-developer">Advanced Web Developer Path on Pluralsight</a>\
        </li>\
      </ul></div>';

  } else if (userScore >= 5 || userScore < 9) {
    resultContainer.innerHTML += '<p>You\'re on the right track! Here are some intermediate resources:</p>';
    resultContainer.innerHTML += '<ul>\
            <li>\
              <a href="https://www.w3schools.com/">W3Schools</a>\
            </li>\
            <li>\
              <a href="https://developer.mozilla.org/en-US/docs/Web">MDN Web Docs</a>\
            </li>\
            <li>\
              <a href="https://www.tutorialspoint.com/web_development_tutorials.htm">Tutorials Point Web Development Tutorials</a>\
            </li>\
            <li>\
              <a href="https://www.codecademy.com/learn/paths/web-development">Codecademy Web Development Path</a>\
            </li>\
            <li>\
              <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>\
            </li>\
          </ul>';
  } else {
    resultContainer.innerHTML += '<p>No worries! Here are some beginner resources to get you started:</p>';
    resultContainer.innerHTML += '<ul>\
        <li>\
          <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>\
        </li>\
        <li>\
          <a href="https://www.codecademy.com/">Codecademy</a>\
        </li>\
        <li>\
          <a href="https://www.theodinproject.com/">The Odin Project</a>\
        </li>\
        <li>\
          <a href="https://developer.mozilla.org/">Mozilla Developer Network</a>\
        </li>\
        <li>\
          <a href="https://www.w3schools.com/">W3Schools</a>\
        </li>\
      </ul>';
  }

  resultContainer.style.display = "block";
  quizForm.style.display = "none";
}