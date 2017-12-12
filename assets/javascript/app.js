$(document).ready(function() {

$(".second-page").hide();

$("form").on("submit", function(event) {
//call api
event.preventDefault();
$(".main-page").hide();
$(".second-page").show();
});

$(".back").on("click", function(event) {
    $(".main-page").show();
    $(".second-page").hide();
    });

})