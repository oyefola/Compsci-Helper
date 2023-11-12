const questions = [
    {
        question: "1. What is a higher-order function?",
        options: {
            a: "A function that takes another function as an argument or returns a function",
            b: "A function that performs arithmetic operations",
            c: "A function that has a high level of complexity"
        },
        correctAnswer: "a",
        message: "Great start! You can do this."
    },
    {
        question: "2. What is immutability in functional programming?",
        options: {
            a: "The ability to modify variables freely",
            b: "The practice of avoiding changing state after it's been set",
            c: "A feature that allows variables to change type"
        },
        correctAnswer: "b",
        message: "Well done! Keep it up."
    },
    {
        question: "3. What is the purpose of the 'map' function in functional programming?",
        options: {
            a: "To iterate over an array and transform each element",
            b: "To filter elements in an array",
            c: "To check if an array includes a certain element"
        },
        correctAnswer: "a",
        message: "Excellent! Only one more question to go."
    },
    {
        question: "4. What is a closure in JavaScript?",
        options: {
            a: "A function that has access to variables from its outer scope",
            b: "A built-in JavaScript method",
            c: "A way to close a web page"
        },
        correctAnswer: "a",
        message: "You're doing great! Keep pushing."
    },
    {
        question: "5. What is currying in functional programming?",
        options: {
            a: "A way to make functions more complex",
            b: "A technique to transform a function with multiple arguments into a sequence of functions",
            c: "A method to reduce the size of the code"
        },
        correctAnswer: "b",
        message: "Fantastic! Almost there, stay focused."
    },
    {
        question: "6. What is the difference between 'map' and 'filter' in functional programming?",
        options: {
            a: "'map' transforms each element and returns a new array, while 'filter' returns elements that satisfy a condition",
            b: "'map' and 'filter' are the same",
            c: "'filter' transforms each element and returns a new array, while 'map' returns elements that satisfy a condition"
        },
        correctAnswer: "a",
        message: "You're on fire! Keep going."
    },
    {
        question: "7. What is a monad in functional programming?",
        options: {
            a: "A mathematical concept used to represent computations",
            b: "A variable with a single value",
            c: "A function that takes no arguments"
        },
        correctAnswer: "a",
        message: "Amazing! Just a few more questions."
    },
    {
        question: "8. What is tail recursion?",
        options: {
            a: "A type of recursion that involves the head of a list",
            b: "A recursion that involves a single function call at the end of the function",
            c: "A recursion technique to optimize loops"
        },
        correctAnswer: "b",
        message: "You're unstoppable! Keep it up."
    },
    {
        question: "9. What is the purpose of the 'reduce' function in functional programming?",
        options: {
            a: "To concatenate two arrays",
            b: "To iterate over an array and accumulate a single result",
            c: "To reverse the elements of an array"
        },
        correctAnswer: "b",
        message: "Fantastic! Only a few more questions to go."
    },
    {
        question: "10. What is lazy evaluation in functional programming?",
        options: {
            a: "The delayed execution of a function until its result is actually needed",
            b: "A function that never evaluates its arguments",
            c: "A technique to avoid recursion"
        },
        correctAnswer: "a",
        message: "You're doing excellent! Stay focused on the finish line."
    },
    {
        question: "11. What is referential transparency in functional programming?",
        options: {
            a: "The ability to reference variables from outer scopes",
            b: "The property that a function with the same input will always return the same output",
            c: "The use of references in the code"
        },
        correctAnswer: "b",
        message: "Incredible! Keep it up, you're almost there."
    },
    {
        question: "12. What is a functor in functional programming?",
        options: {
            a: "A function that takes no arguments",
            b: "A data structure that can be mapped over",
            c: "A type of recursion"
        },
        correctAnswer: "b",
        message: "Congratulations!you can now view your score and recommended resources"
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
                <ul>
                <li><label>
                    <input type="radio" name="currentQuestion" value="a"> ${currentQuestion.options.a}
                </label></li>
                <li><label>
                    <input type="radio" name="currentQuestion" value="b"> ${currentQuestion.options.b}
                </label></li>
               <li> <label>
                    <input type="radio" name="currentQuestion" value="c"> ${currentQuestion.options.c}
                </label></li>
                </ul>
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

function displayResults(userScore) {
    const resultContainer = document.getElementById("result-container");
    const quizForm = document.getElementById("quiz-form");

    resultContainer.innerHTML = `Congratulations! You scored ${userScore} out of ${questions.length}!`;

    if (userScore >= 9) {
        resultContainer.innerHTML += `
            <div>
                <p>You're a functional Development GOAT! Check out these advanced resources:</p>
                <ul>
                    <li>
                        <a href="https://www.coursera.org/specializations/functional-programming-in-scala">Functional Programming in Scala Specialization on Coursera</a>
                    </li>
                    <li>
                        <a href="https://www.edx.org/course/advanced-functional-programming">Advanced Functional Programming on edX</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=9p_9_7w39bY">Advanced Functional Programming in Haskell by Erik Meijer</a>
                    </li>
                    <li>
                        <a href="https://www.amazon.com/Programming-Haskell-Graham-Hutton/dp/0521764048">Programming in Haskell by Graham Hutton</a>
                    </li>
                    <li>
                        <a href="https://www.packtpub.com/product/category/programming/functional-programming">Functional Programming books on PacktPub</a>
                    </li>
                </ul>
            </div>
        `;
    } else {
        resultContainer.innerHTML += '<p>No worries! Here are some beginner resources to get you started:</p>';
        resultContainer.innerHTML += '<div><ul>\
            <li>\
                <a href="https://www.coursera.org/learn/functional-programming">Functional Programming Principles and Applications on Coursera</a>\
            </li>\
            <li>\
                <a href="https://www.edx.org/course/introduction-to-functional-programming">Introduction to Functional Programming on edX</a>\
            </li>\
            <li>\
                <a href="https://www.youtube.com/watch?v=IH4z5H8_x9Y">Learn Functional Programming in 1 Hour by Richard Feldman</a>\
            </li>\
            <li>\
                <a href="https://www.amazon.com/Functional-Programming-Made-Easy-Introduction/dp/1491951198">Functional Programming Made Easy: A Step-by-Step Guide by Adam Chapman</a>\
            </li>\
            <li>\
                <a href="https://www.packtpub.com/product/learn-functional-programming-with-javascript-by-rafael-schaefer-9781802261555">Learn Functional Programming with JavaScript by Rafael Schaefer</a>\
            </li>\
        </ul></div>';
    }

    resultContainer.style.display = "block";
    quizForm.style.display = "none";
}

// Display the first question when the page loads
displayQuestion();
