let STORE = [
//question 1
{
    "question" : "Which of the following food items provides the biggest boost in testosterone?",
    "answers" : [
        "soy",
        "grass-fed steak",
        "canned tuna",
        "black beans"
    ],
    "correctAnswer" : "grass-fed steak"

},
//question 2
{
    "question" : "In what year was Harley Davidson founded?",
    "answers" : [
        "1903",
        "1926",
        "1985",
        "1964"
    ],
    "correctAnswer" : "1903"

},
//question 3
{
    "question" : "Which is the most dominant martial arts in the UFC?",
    "answers" : [
        "Boxing",
        "Brazilian Jiu-Jitsu",
        "Muay-Thai",
        "Krav-Maga"
    ],
    "correctAnswer" : "Brazilian Jiu-Jitsu"

},
//question 4 
{
    "question" : "Which famous fighter is known for biting his opponent’s ear off?",
    "answers" : [
        "Mohammed Ali",
        "Conor McGregor",
        "Mike Tyson",
        "Rocky Balboa"
    ],
    "correctAnswer" : "Mike Tyson"

},
//question 5
{
    "question" : "How many pull-ups did David Goggins do when he broke the “most pull ups done in a day record?",
    "answers" : [
        "4,030 reps",
        "20,989 reps",
        "2,345 reps",
        "10,122 reps"
    ],
    "correctAnswer" : "4,030 reps"

},
//question 6
{
    "question" : "What is the world’s hottest pepper?",
    "answers" : [
        "Ghost Pepper",
        "Trinidad Scorpion",
        "Naga Viper",
        "Carolina Reaper"
    ],
    "correctAnswer" : "Carolina Reaper"

}


]; 

const STATE = {
    render: {
      startPage: true,
      questionPage: false,
      answerPage: false,
      resultsPage: false,
      noAnswerPage: false
    },
  
    currentQuestion: 0,
    currentScore: 0,
    currentQuestionCorrect: false,
    noAnswerSubmitted: false,
    onLastQuestion: false
  };