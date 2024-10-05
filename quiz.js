function checkAnswer() {
    // Declare the correct answer
    var correctAnswer = "4";
    
    // Retrieve the userâ€™s answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if userAnswer is selected
    if (userAnswer) {
        userAnswer = userAnswer.value;
        
        // Compare userAnswer with correctAnswer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

	


