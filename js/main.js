$(function() {

    $("button").on("click", function() {
        if ($(".card").hasClass("flipped")) {
            $(".card").removeClass("flipped");
        } else {
            $(".card").addClass("flipped")
        }
    });

});