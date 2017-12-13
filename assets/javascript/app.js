
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

               var cityName = $("<div>");
               cityName.text(response.name);
               $(".city-name").text("City Name: " + response.name);

               var weather = $("<div>");
               weather.text(response.weather[0].description);
               $(".weather").text("Weather: " + response.weather[0].description);

               var temp = $("<div>");
               temp.text(response.main.temp); 
               $(".temp").html("<p>" + "Current Temperature: " + response.main.temp + "°F" + "</p>");
               $(".temp").append("<p>" + "High: " + response.main.temp_max + "°F" + "</p>");
               $(".temp").append("<p>" + "Low: " + response.main.temp_min + "°F" + "</p>");
               
           });
    
       });
    
       $(".back").on("click", function (event) {
           $(".main-page").show();
           $(".second-page").hide();
           $("#addZip").val("");
       });
    
    });
