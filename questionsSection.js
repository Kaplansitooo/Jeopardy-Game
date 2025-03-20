const questions_length = 5;

const questions = Array.from({ length: questions_length }, () =>
  Array(questions_length).fill(null)
);

const answers = Array.from({ length: questions_length }, () =>
  Array(questions_length).fill(null)
);

document
  .getElementById("questions-theme-section")
  .addEventListener("submit", function (event) {
    for (let i = 0; i < questions_length; i++) {
      actTheme = "theme" + i;
      document.getElementById(actual_theme).innerHTML = actTheme;

      for (let j = 0; j < questions_length; j++) {
        readQuestion(i, j);
        readAnswer(i, j);
      }
    }
  });

//Read the questions from HTML file
function readQuestion(themeNumber, questionNumber) {
  questions[themeNumber][questionNumber] = document.getElementById(
    "theme-q" + questionNumber
  ).innerHTML;
}

//Read the answers from HTML file

function readAnswer(themeNumber, questionNumber) {
  answers[themeNumber][questionNumber] = document.getElementById(
    "theme-q" + questionNumber
  ).innerHTML;
}

export { questions, answers };
