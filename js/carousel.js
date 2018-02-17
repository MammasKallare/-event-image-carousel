var carouselNames = [];
var carouselOn = false;

$(document).ready(function(){
    $("#carousel-image-slide").on("carouselNames-data", function(){
        if(carouselOn == false){
            carousel();
            carouselOn = true;
        }
    });

    request(); // Make the first request
});

function request(){
    $.ajax({
        cache:      false,
        dataType:   "json",
        url:        "/images", // TODO: Place in config
        statusCode: {
            404: function() {
                alert("Could not fetch list of images");
            }
        },
    })
    .done(function(data){
        $.each(data, function(i,j){
            carouselNames.push(j.name);
        });
        $("#carousel-image-slide").trigger("carouselNames-data");
    });
}
//Start carousel
function carousel(){
    if(carouselNames.length == 0){
        setTimeout(carousel, 10000); // 10 seconds image, TODO: Put this in a config
        return;
    }
    if(carouselNames.length == 1){
        request();
    }
    setImage(carouselNames.shift()); // XXX: The time for shift is O(n). Works okey for smaller sets of array sizes
    setTimeout(carousel, 10000); // 10 seconds image, TODO: Put this in a config
}
function setImage(name){
    $("#carousel-image-slide").attr("src", "/images/"+name); // TODO: Put target in a config file
}
