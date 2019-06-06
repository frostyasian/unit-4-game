//generate number between 19-120
var goalNumber = Math.floor(Math.random() * 120) + 19;

//print the random goal number
$("#goal-number").text(goalNumber);

//score
var counter = 0;

//crystals
var imagesArr = [
  "assets/images/blue.png",
  "assets/images/orange.png",
  "assets/images/pink.png",
  "assets/images/purple.png"
];

//generate random numbers between 1-12 for crystals
var numberOptions = [
  Math.floor(Math.random() * 12) + 1,
  Math.floor(Math.random() * 12) + 1,
  Math.floor(Math.random() * 12) + 1,
  Math.floor(Math.random() * 12) + 1
];
var wins = 0;
var losses = 0;

//loop

for (var i = 0; i < numberOptions.length; i++) {
  //linking crystal image to random number
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image"); //assigning a class
  imageCrystal.attr("src", imagesArr[i]);
  imageCrystal.attr("data-crystalValue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}

//click function for crystals
$(".crystal-image").on("click", function() {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#counter-score").text(counter);

  //our win-lose

  if (counter === goalNumber) {
    wins++;
    $("#win-lose").html("<h2>Winner!</h2>");
    $("#wins").text(wins);
    counter = 0;
  }

  if (counter >= goalNumber) {
    losses++;
    $("#win-lose").html("<h2>You Lose! </h2>");
    $("#losses").text(losses);
    counter = 0;
  }
});
