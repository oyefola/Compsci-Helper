const questions = [
    {
        question: "1. What is Object-Oriented Programming (OOP)?",
        options: {
            a: "A programming paradigm that uses objects and classes",
            b: "A style of writing functions in JavaScript",
            c: "A method for organizing code using loops"
        },
        correctAnswer: "a",
        message: "Great start! You can do this."
    },
    {
        question: "2. What is a class in OOP?",
        options: {
            a: "A blueprint for creating objects",
            b: "A built-in JavaScript function",
            c: "A way to define variables"
        },
        correctAnswer: "a",
        message: "Well done! Keep it up."
    },
    {
        question: "3. What is the principle of encapsulation in OOP?",
        options: {
            a: "The ability to hide implementation details and only show the necessary features",
            b: "The process of compressing data",
            c: "The practice of using classes"
        },
        correctAnswer: "a",
        message: "Excellent! Only one more question to go."
    },
    {
        question: "4. What is the 'this' keyword in OOP?",
        options: {
            a: "A way to declare a variable",
            b: "A reference to the current object",
            c: "A type of loop"
        },
        correctAnswer: "b",
        message: "You're doing great! Keep pushing."
    },
    {
        question: "5. What is the difference between a class and an object in OOP?",
        options: {
            a: "A class is a blueprint, and an object is an instance of a class",
            b: "A class and an object are the same thing",
            c: "An object is a blueprint, and a class is an instance of an object"
        },
        correctAnswer: "a",
        message: "Fantastic! Almost there, stay focused."
    },
    {
        question: "6. What is inheritance in OOP?",
        options: {
            a: "The process of creating a new class from an existing class",
            b: "A way to hide properties in a class",
            c: "The practice of creating objects"
        },
        correctAnswer: "a",
        message: "You're on fire! Keep going."
    },
    {
        question: "7. What is polymorphism in OOP?",
        options: {
            a: "The ability of a function to perform different actions based on the object it is acting upon",
            b: "A way to create multiple variables with the same name",
            c: "The process of defining multiple classes"
        },
        correctAnswer: "a",
        message: "Amazing! Just a few more questions."
    },
    {
        question: "8. What is composition in OOP?",
        options: {
            a: "The combination of simple objects to create more complex ones",
            b: "The process of creating new classes from existing ones",
            c: "The practice of using loops in classes"
        },
        correctAnswer: "a",
        message: "You're unstoppable! Keep it up."
    },
    {
        question: "9. What is an abstract class in OOP?",
        options: {
            a: "A class that cannot be instantiated and is typically used as a base class",
            b: "A class that only contains static methods",
            c: "A class with no methods"
        },
        correctAnswer: "a",
        message: "Fantastic! Only a few more questions to go."
    },
    {
        question: "10. What is a design pattern in OOP?",
        options: {
            a: "A general repeatable solution to a commonly occurring problem",
            b: "A specific way of writing code in JavaScript",
            c: "A method for organizing variables in a class"
        },
        correctAnswer: "a",
        message: "You're doing excellent! Stay focused on the finish line."
    },
    {
        question: "11. What is the SOLID principles in OOP?",
        options: {
            a: "A set of five design principles for writing maintainable and scalable software",
            b: "A naming convention for variables in JavaScript",
            c: "A method for creating objects"
        },
        correctAnswer: "a",
        message: "Incredible! Keep it up, you're almost there."
    },
    {
        question: "12. What is the difference between composition and inheritance in OOP?",
        options: {
            a: "Composition is the combination of simple objects, while inheritance is creating new classes from existing ones",
            b: "Composition and inheritance are the same thing",
            c: "Inheritance is the combination of simple objects, while composition is creating new classes from existing ones"
        },
        correctAnswer: "a",
        message: "Congratulations! You've mastered Object-Oriented Programming."
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
                    <li><label>
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
       
        // Display encouraging message in the result-container
        const messageContainer = document.getElementById("result-container");
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

    for (let i = 0; i <= currentQuestionIndex; i++) {
        const currentQuestion = oopQuestions[i];
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

    resultContainer.innerHTML = `Congratulations! You scored ${userScore} out of ${oopQuestions.length}!`;

    if (userScore >= 9) {
        resultContainer.innerHTML += '<p>You\'re an Object-Oriented Programming master! Check out these advanced resources:</p>';
        // Add advanced resources here
    } else if (userScore >= 5 && userScore < 9) {
        resultContainer.innerHTML += '<p>You\'re on the right track! Here are some intermediate resources:</p>';
        // Add intermediate resources here
    } else {
        resultContainer.innerHTML += '<p>No worries! Here are some beginner resources to get you started:</p>';
        // Add beginner resources here
    }

    resultContainer.style.display = "block";
    quizForm.style.display = "none";
}

// Display the first question when the page loads
displayQuestion();
