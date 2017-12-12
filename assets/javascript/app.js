$(document).ready(function() {

$(".second-page").hide();

$(".submit").on("click", function(event) {
//call api
$(".main-page").hide();
$(".second-page").show();
});

$(".back").on("click", function(event) {
    $(".main-page").show();
    $(".second-page").hide();
    });

})