// Function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Reference to the feedback element
    const feedback = document.getElementById("feedback");

    // Check if an answer is selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
        return;
    }

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Provide feedback for the correct answer
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        // Provide feedback for an incorrect answer
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Retrieve the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");

// Add an event listener to the "Submit Answer" button
submitButton.addEventListener("click", checkAnswer);
