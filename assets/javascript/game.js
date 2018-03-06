var winning = 0;
var losses =0;
var number = Math.floor(Math.random() * 100) + 1;
var userInput =0;
var button1 = Math.floor(Math.random() * 10) + 1;

window.onload = function() {
document.getElementById("W").innerHTML=winning;
document.getElementById("L").innerHTML=losses;
document.getElementById("N").innerHTML= number;
document.getElementById("y").innerHTML= userInput;

}
