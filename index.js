//document ready
$(function () {

    

    let questionNumber = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    //the function that returns the question 
    function getQuestion() {

        let question = STORE[questionNumber].question;

        return question
      
    }

    //this is the function that displays potential answers 
    function getAnswers() {

        let answers =
            `
            <form class="form">
            <fieldset>
            <input type="radio" name="answer-cirlce" id="0">${STORE[questionNumber].answers[0]}</input>
            <input type="radio" name="answer-cirlce" id="1">${STORE[questionNumber].answers[1]}</input>
            <input type="radio" name="answer-cirlce" id="2">${STORE[questionNumber].answers[2]}</input>
            <input type="radio" name="answer-cirlce" id="3">${STORE[questionNumber].answers[3]}</input>
            <button class="submit" type="" name="submit">submit</button>
            </fieldset>
            </form>
            `      
            
            return answers;

            $(".answers").html(answers);


    }

//display progress correct Vs Incorrect answers 


            function trackProgress () {
                
                let progress = 
    
                `
                <form>
                <p>Correct answers: ${correctAnswers}</p>
                <p>Incorrect answers: ${incorrectAnswers}</p>
                </form>
                `
                
                return progress;
            }

//submit answer button and update the progress tracker 
    function submitAnswer() {
         $('.answers').on('submit', function() {
            event.preventDefault();
            let selected = $('input:checked');

            let answer = selected.val();

            if (answer === STORE[questionNumber].correctAnswer) {
                correctAnswers++;
            }      
        

         }); 
  
     }

     getAnswers();

    //when the next button is clicked, display the question and answers 
    $('.next').click(function () {

        $('.question').html(getQuestion);

        $('.answers').html(getAnswers);

        $('.progress').html(trackProgress);

        questionNumber++


    });

    submitAnswer();



});





