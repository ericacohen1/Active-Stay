
$(document).ready(function () {

$("form").on("submit", function(event) {
//call api
event.preventDefault();
$(".main-page").hide();
$(".second-page").show();
});

$(".back").on("click", function(event) {
    $(".main-page").show();
    $(".second-page").hide();

    $(".submit").on("click", function (event) {

        $(".main-page").hide();
        $(".second-page").show();
        // immediately call weather api on submit
        var userInput = $("#user-input").val().trim();
        var weatherAPIKey = "166a433c57516f51dfab1f7edaed8413";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "zip=" + userInput + "&units=imperial&appid=" + weatherAPIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            console.log(response);
        });

    });

    $(".back").on("click", function (event) {
        $(".main-page").show();
        $(".second-page").hide();

    });

});

// //call api

