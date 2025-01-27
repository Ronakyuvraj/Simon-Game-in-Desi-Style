// alert("hello");
var buttonColours  = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;function checkAnswer(currentLevel) {

  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over")

    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();


  }

}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;

}



$(document).on("keypress",function(){
  if(!started){
    $("#level-title").text("Level: " + level);
    
    nextSequence();
    started = true;
    // $(document).off("keypress");
  }


 

});

$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
  
  playSound(userChosenColour);
  animatePress(userChosenColour);

});
function nextSequence(){

  level++;

  $("#level-title").text("Level: " + level);

  var randomNumber =  Math.floor(Math.random()*4);
 //  return randomNumber;
  var randomChosencolour = buttonColours[randomNumber];
// console.log(randomChosencolour);
gamePattern.push(randomChosencolour);
// $("#" + randomChosencolour).fadeOut(100).fadeIn(100);/
playSound(randomChosencolour);


// console.log("Level: " + level);

}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}




// $("#" + randomChosencolour).on("click", function(){
 
// });
// $("#" + randomChosencolour).on("click", function(){
// var sound = new Audio("./sounds/"+randomChosencolour+".mp3");
//   iiiiiisound.play();
// });

function playSound(name){
  var sound = new Audio("./sounds/"+name+".mp3");
  sound.play();
}





  




