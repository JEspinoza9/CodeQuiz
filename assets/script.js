// Selects element by class
var startGame = $('.start');
 var counter = 5;
 var startScreen = $('.main');
 var gameOver = $('#gameOver');


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
        endGame();
    }
  }, 1000);
}
// start time and display first question
startGame.on('click', function(){
    startTimer();
    startScreen.hide();
    //firstQuestion();

})




