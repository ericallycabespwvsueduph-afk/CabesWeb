function compute() {
    let attendance = parseFloat(document.getElementById("attendance").value);
    let quiz = parseFloat(document.getElementById("quiz").value);
    let exam = parseFloat(document.getElementById("exam").value);

    let attendanceWeight = 0.25;
    let quizWeight = 0.25;
    let examWeight = 0.50;

    let totalScore = (attendance * attendanceWeight) + (quiz * quizWeight) + (exam * examWeight);

    let resultText;
    if (totalScore >= 74) {
        resultText = "Total Score: " + totalScore + ". Congratulations, you passed!";
    } else {
        resultText = "Total Score: " + totalScore + ". Sorry, you failed.";
    }

    document.getElementById("result").textContent = resultText;
}
