var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];


var started = false;
var level = 0 ;

$(document).keypress(function(){
if(!started){
     $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
}
});




 
 $(".btn").click( function(){
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);

  });
  


 
  function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("sucess");
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
    }
    else{
      console.log("wrong");
      playSound("wrong")
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over")
      },200);
      $("#level-title").text("Game Over,press any key to restart")
      startOver();
    }
}


function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  
  gamePattern.push(randomChosenColour);


  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}



function playSound(name){ 
  var audio = new Audio("sounds/" + name + ".mp3");/////problem was here when function name is called inside playsoud(name) the rference containing them should also call the name. youcalled random chosen color directly 
  audio.play();

}

function animatePress(currentColor){
   $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}

function startOver(){
 
  level = 0;
  gamePattern =[];
  started = false;  
  
}














/*var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = []; ////create a new empty array called gamePattern.


function nextSequence() { ///new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

    var randomNumber = Math.floor(Math.random() * 4); ////stores the created random number in the variable randomNumber
    var randomChooseColor = buttonColors[randomNumber]; //creates a new variable and matches the created random number at buttonColors array //create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
    gamePattern.push(randomChooseColor); ///Add the new randomChosenColour generated  to the end of the gamePattern.
    $("#" + randomChooseColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChooseColor + ".mp3");
    audio.play();
}
*/