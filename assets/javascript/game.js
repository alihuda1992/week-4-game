//Globally defined variables 
var winning = 0;
var losses = 0;
var number = Math.floor(Math.random() * 100) + 1;
var userInput = 0;
var button1 = Math.floor(Math.random() * 10) + 1;
var button2 = Math.floor(Math.random() * 10) + 1;
var button3 = Math.floor(Math.random() * 10) + 1;
var button4 = Math.floor(Math.random() * 10) + 1;

//On load of document assign these html elements the following values from the above correlating javascript variables
$(document).ready(function () {
    $("#win").text(winning);
    $("#loss").text(losses);
    $("#number").text(number);
    $("#your").text(userInput);



    $("#button1").click(function () {
        var valueholder = button1;
        userInput = userInput + valueholder;
        $("#your").text(userInput);
        console.log(valueholder);

        if (userInput > number) {
            var valueholder = 1;
            losses = losses + valueholder;
            $("#loss").text(losses);
        } else if (userInput === number) {
            var valueholder = 1;
            winning = winning + valueholder;
            $("#win").text(winning);
        }
    });

    $("#button2").click(function () {
        var valueholder = button2;
        userInput = userInput + valueholder;
        $("#your").text(userInput);
        console.log(valueholder);

        if (userInput > number) {
            var valueholder = 1;
            losses = losses + valueholder;
            $("#loss").text(losses);
        } else if (userInput === number) {
            var valueholder = 1;
            winning = winning + valueholder;
            $("#win").text(winning);
        }
    });

    $("#button3").click(function () {
        var valueholder = button3;
        userInput = userInput + valueholder;
        $("#your").text(userInput);
        console.log(valueholder);

        if (userInput > number) {
            var valueholder = 1;
            losses = losses + valueholder;
            $("#loss").text(losses);
        } else if (userInput === number) {
            var valueholder = 1;
            winning = winning + valueholder;
            $("#win").text(winning);
        }
    });

    $("#button4").click(function () {
        var valueholder = button4;
        userInput = userInput + valueholder;
        $("#your").text(userInput);
        console.log(valueholder);

        if (userInput > number) {
            var valueholder = 1;
            losses = losses + valueholder;
            $("#loss").text(losses);
        } else if (userInput === number) {
            var valueholder = 1;
            winning = winning + valueholder;
            $("#win").text(winning);
        }
    });
});







