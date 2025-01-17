// Function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Reference to feedback element
    const feedback = document.getElementById("feedback");

    // Check if an answer is selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    // Compare userAnswer's value with correctAnswer
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener to the Submit button
document
    .getElementById("submit-answer")
    .addEventListener("click", checkAnswer);
