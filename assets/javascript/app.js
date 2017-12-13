$(document).ready(function () {
    
       $(".second-page").hide();
    
       $("form").on("submit", function (event) {
           event.preventDefault();
    
           $(".main-page").hide();
           $(".second-page").show();
    
           var userInput = $("#addZip").val();
           var weatherAPIKey = "166a433c57516f51dfab1f7edaed8413";;
           var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + userInput + "&units=imperial&appid=" + weatherAPIKey;
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
           $("#addZip").val("");
       });
    
    });