// function randomGenerator (minValue = 1, maxValue = 7){
//     var difference = maxValue - minValue;
//     var randomNumber = Math.random();
//     var multiplication = Math.floor(difference*randomNumber);
//     return multiplication+minValue;
// }
// console.log(randomGenerator())

var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomImg1 = "/Dice Game/images/dice" + randomNumber1 + ".png"
var randomImg2 = "/Dice Game/images/dice" + randomNumber2 + ".png"

var Img1 = document.querySelectorAll("img")[0];
Img1.setAttribute("src", randomImg1);

var Img2 = document.querySelectorAll("img")[1];
Img2.setAttribute("src", randomImg2);

var result = document.querySelector("h1")
if (randomNumber1 > randomNumber2) {
    result.innerText = "Player 1 Wins 🚩"
} else if (randomNumber1 < randomNumber2) {
    result.innerText = "Player 2 Wins 🚩"
} else {
    result.innerText = "It's A Draw"
}

