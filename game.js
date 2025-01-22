// alert("hello");
var buttonColours  = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosencolour = buttonColours[nextSequence()];
// console.log(randomChosencolour);
gamePattern.push(randomChosencolour);

function nextSequence(){
   var randomNumber =  Math.floor(Math.random()*4);
   return randomNumber;
}

$(".btn").on("click", function(){
  $(".btn").fadeOut(100).fadeIn(100);

})