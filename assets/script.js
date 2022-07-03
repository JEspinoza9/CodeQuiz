// Selects element by class
var startGame = $('.start');
 var counter = 150;
 var startScreen = $('#main');
 var gameOver = $('#gameOver');
 var questionDisplay = $('#question');
 var questionText = $('#questionText')

var Questions = ['What is a tag?','','',]

 // timer function
function startTimer(){
 
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        clearInterval(counter);
        //endGame();
    }
  }, 1000);
}
// start time and display first question
startGame.on('click', function(){
    startTimer();
    startScreen.hide();
    questionDisplay.show();
    var firstQuestion = $('<h1>');
    firstQuestion.text(Questions[0]);
    questionDisplay.append(firstQuestion);

})




