var carouselNames = [];
var carouselOn = false;

$(document).ready(function(){
    $(carouselConfig.images.target).on("carouselNames-data", function(){
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
        url:        carouselConfig.images.url,
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
        $(carouselConfig.images.target).trigger("carouselNames-data");
    });
}
//Start carousel
function carousel(){
    if(carouselNames.length == 0){
        setTimeout(carousel, carouselConfig.images.time);
        return;
    }
    if(carouselNames.length == 1){
        request();
    }
    setImage(carouselNames.shift()); // XXX: The time for shift is O(n). Works okey for smaller sets of array sizes
    setTimeout(carousel, carouselConfig.images.time);
}
function setImage(name){
    $(carouselConfig.images.target).attr("src", carouselConfig.images.url + "/" + name);
}
