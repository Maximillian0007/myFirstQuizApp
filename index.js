$(function () {


    let questionNumber = 0;

    //the function that returns the question 
    function getQuestion() {

        let question = STORE[questionNumber].question;

        questionNumber++

        return question


    }

    //this is the function that returns the answers 
    function getAnswers() {

        let answers =
            `
            
            <form>
            <fieldset>
            <input type="radio" name="answer-cirlce" id="0">${STORE[questionNumber].answers[0]}</input>
            <input type="radio" name="answer-cirlce" id="1">${STORE[questionNumber].answers[1]}</input>
            <input type="radio" name="answer-cirlce" id="2">${STORE[questionNumber].answers[2]}</input>
            <input type="radio" name="answer-cirlce" id="3">${STORE[questionNumber].answers[3]}</input>
            <button class="jdg" type="" name="submit">jdg</button>
            </fieldset>
            </form>
            

            `
            // $('.submit').click(function(){

            //     submitAnswer();
        
            // });

        return answers;
    }

    getAnswers();

    //submit answer
    function submitAnswer() {
         $('form').on('jdg', function (event) {
             event.preventDefault();
             
            console.log("test");
            
            // event.preventDefault();
            //  let selected = $('input:checked');
            //  let answer = selected.val();
            //  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
            //  if (answer === correctAnswer) {
            //     selected.parent().addClass('correct');
            //     ifAnswerIsCorrect();
            //   } else {
            //     selected.parent().addClass('wrong');
            //     ifAnswerIsWrong();
            //   }

         }); 

        
  
     }

    //when the button is clicked, display the question and answers 
    $('.next').click(function () {

        $('.question').html(getQuestion);

        $('.answers').html(getAnswers);



    });

    submitAnswer();





});





