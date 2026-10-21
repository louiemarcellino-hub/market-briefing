// quiz.js: the "Test yourself" quiz. One question at a time:
// pick an answer → see if you were right and why → next question → score at the end.
// Each round picks 10 random questions from the full bank and shuffles the answer
// choices, so you're learning the ideas, not memorizing "the answer is B".
// Nothing is saved; each round starts fresh.

(function () {
  var bank = window.QUIZ_QUESTIONS;
  var box = document.getElementById("quiz");
  if (!box) return;
  if (!Array.isArray(bank) || !bank.length) {
    box.textContent = "Couldn't load the quiz questions.";
    return;
  }

  var ROUND_SIZE = Math.min(10, bank.length);
  var questions = []; // this round's questions
  var index = 0;
  var score = 0;
  var letters = ["A", "B", "C", "D"];

  // Shuffle a copy of a list (the Fisher–Yates method: fair, every order equally likely).
  function shuffled(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
    }
    return copy;
  }

  // Build a new round: 10 random questions, each with its choices shuffled.
  // We track where the right answer ends up after shuffling.
  function newRound() {
    questions = shuffled(bank).slice(0, ROUND_SIZE).map(function (item) {
      var order = shuffled(item.choices.map(function (_, i) { return i; }));
      return {
        q: item.q,
        why: item.why,
        choices: order.map(function (i) { return item.choices[i]; }),
        answer: order.indexOf(item.answer)
      };
    });
    index = 0;
    score = 0;
  }

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function showQuestion() {
    var item = questions[index];
    box.textContent = "";

    var progress = make("p", "quiz-progress", "Question " + (index + 1) + " of " + questions.length + " · Score: " + score);
    var question = make("h3", "quiz-question", item.q);
    var choices = make("div", "quiz-choices");
    var feedback = make("div", "quiz-feedback");
    feedback.hidden = true;

    item.choices.forEach(function (choice, i) {
      var btn = make("button", "quiz-choice", letters[i] + ") " + choice);
      btn.type = "button";
      btn.addEventListener("click", function () { answer(i); });
      choices.append(btn);
    });

    function answer(picked) {
      var right = picked === item.answer;
      if (right) score++;

      // Lock the buttons and mark the right one (and the wrong pick, if any).
      // ✓ and ✗ marks are added so it's never color alone.
      Array.prototype.forEach.call(choices.children, function (btn, i) {
        btn.disabled = true;
        if (i === item.answer) { btn.classList.add("is-right"); btn.textContent = "✓ " + btn.textContent; }
        else if (i === picked) { btn.classList.add("is-wrong"); btn.textContent = "✗ " + btn.textContent; }
      });

      feedback.append(
        make("p", "quiz-verdict", right ? "Correct!" : "Not quite. The answer is " + letters[item.answer] + "."),
        make("p", "quiz-why", item.why)
      );
      var next = make("button", "quiz-next", index + 1 < questions.length ? "Next question ▸" : "See my score ▸");
      next.type = "button";
      next.addEventListener("click", function () {
        index++;
        if (index < questions.length) showQuestion(); else showScore();
      });
      feedback.append(next);
      feedback.hidden = false;
      progress.textContent = "Question " + (index + 1) + " of " + questions.length + " · Score: " + score;
      next.focus();
    }

    box.append(progress, question, choices, feedback);
  }

  function showScore() {
    box.textContent = "";
    var pct = score / questions.length;
    var message = pct === 1 ? "Perfect! You could explain this to a client."
      : pct >= 0.75 ? "Strong! Review the ones you missed and you've got it."
      : pct >= 0.5 ? "Good start. Open the tiles' lessons for the ones you missed, then try again."
      : "Everyone starts somewhere. Read through the tiles' lessons, then give it another shot.";

    var again = make("button", "quiz-next", "New round ↻");
    again.type = "button";
    again.addEventListener("click", function () {
      newRound();
      showQuestion();
    });

    box.append(
      make("p", "quiz-progress", "Done!"),
      make("p", "quiz-score", score + " / " + questions.length),
      make("p", "quiz-why", message),
      make("p", "quiz-why", "Each new round picks " + ROUND_SIZE + " random questions from a bank of " + bank.length + ", with the answers in a new order."),
      again
    );
  }

  newRound();
  showQuestion();
})();
