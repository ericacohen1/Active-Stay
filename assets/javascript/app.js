$(document).ready(function () {

    $(".second-page").hide();

    $(".submit").on("click", function (event) {

        $(".main-page").hide();
        $(".second-page").show();
    });

    $(".back").on("click", function (event) {
        $(".main-page").show();
        $(".second-page").hide();
    });

})

// //call api
// weather api call
var userInput = $("#user-input").val().trim();
var weatherAPIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "zip=" + userInput + "&units=imperial&appid=" + weatherAPIKey;
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    console.log(response);
});