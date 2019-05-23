function makeHTmlForFirstPage() {
  return `
    <section>
      <h2>First page</h2>
      <p>Welcome to the quiz</p>
      <button class='start-button'>Start quiz</button>
    </section>
  `;
}

function makeHTmlForNextQuestion() {
  let currentQuestion = QUESTIONS[questionIndex];
  return `
    <section>
      <h2>${currentQuestion.question}</h2>
      <form class='question-form'>
        ${currentQuestion.answers.map((answer) => {
          return `
          <div>
            <input id="${answer}" type="radio" value="${answer}">
            <label for="${answer}">${answer}</label>
          </div>
          `
        }).join('')}
        <button>Submit answer</button>
      </form>
    </section>
  `;
}

function renderHtmlInContainer(htmlString) {
  $('.container').html(htmlString);
}

function displayTheFirstPage() {
  // put html(plug) into the container(socket)
  let htmlForFirstPage = makeHTmlForFirstPage();
  renderHtmlInContainer(htmlForFirstPage);
}

function displayTheNextQuestion(ev) {
  // put html(plug) into the container(socket)
  let htmlForNextQuestion = makeHTmlForNextQuestion();
  renderHtmlInContainer(htmlForNextQuestion);
}

function displayTheFeedback(ev) {
  ev.preventDefault();
  // get the user submitted answer
  let userSubmittedAnswer = $('input:checked').val();
  let currentQuestion = QUESTIONS[questionIndex];
  console.log({ userSubmittedAnswer, currentQuestion })
  // compare answer with correct answer
  if (userSubmittedAnswer === currentQuestion.correctAnswer) {
    // add 1 to the score
    console.log('CORRECT')
  } else {
    console.log('INCORRECT')
  }

  // move to the next question
  questionIndex++;
  // display the next question (oops should have been feedback)
  displayTheNextQuestion();
}
// function $() {
//     return {
//         on: function(){}
//     }
// }

$(function handlePageReady() {
  displayTheFirstPage();
  // setup event listeners
  // when someone clicks start, display the next question
  $('.container').on('click', '.start-button', displayTheNextQuestion);
  // when someone submits an answer, display the feedback
  $('.container').on('submit', '.question-form', displayTheFeedback);
  // when someone clicks next, display the next question
    // if it's the last question, then display results
})


const QUESTIONS = [
  {
    question: 'A or b or c?',
    answers: ['a', 'b', 'c'],
    correctAnswer: 'c'
  },
  {
    question: 'd or e or f?',
    answers: ['d', 'e', 'f'],
    correctAnswer: 'e'
  },
  {
    question: 'x or y or z?',
    answers: ['x', 'y', 'z'],
    correctAnswer: 'x'
  },
];

let questionIndex = 0;