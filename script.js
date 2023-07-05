let ouput = document.getElementById('output');
let showScore = document.getElementById('score');
let submitBtn = document.getElementById('submitBtn');
let score = 0;


function showResult() {
    if(document.getElementById('correct1').checked) {
        score++;
        output.innerHTML = "correct!"
    }
    else {
        output.innerHTML = "Question 1 incorrect. The correct answer is 12.";
    }

 if(document.getElementById('correct2').checked) {
        score++;
        output.innerHTML += "<br>correct!"
    }
    else {
        output.innerHTML += "<br>Question 2 incorrect. The correct answer is Spanish.";
    }

 if(document.getElementById('correct3').checked) {
        score++;
        output.innerHTML += "<br>correct!"
    }
    else {
        output.innerHTML += "<br>Question 3 incorrect. The correct answer is 1945.";
    }
    showScore.innerHTML = "Your score: " + score + "/3";
    submitBtn.disabled = true;

}
  