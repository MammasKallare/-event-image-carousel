$(document).ready(function(){
    var soundList = [];
    var soundList2 = {};

    //Load sound
    $.ajax({
        cache:      false,
        dataType:   "json",
        url:        carouselConfig.sounds.url,
        statusCode: {
            404: function() {
                console.log("404: Could not fetch list of sound files");
            }
        },
    })
    .done(function(data){
        $.each(data, function(i,j){
            soundList.push(new Audio(carouselConfig.sounds.url + "/" + j.name))
        });
        console.log("All sound files fetched");
    });

    $(document).on("keypress", function (e) {
        if(e.which === 104){
            console.log(soundList);
            soundList[0].play();
        }
    });
});
