var apiKey = AIzaSyA24sEl2FysMt7XpDPElGLP5TPtzygg9d4;
var queryURL = "https://maps.googleapis.com/maps/api/js?" + apiKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      
    
     
    });