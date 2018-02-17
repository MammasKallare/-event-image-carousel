$(document).ready(function(){
    var soundList = [];
    var soundList2 = {};

    //Load sound
    $.ajax({
        cache:      false,
        dataType:   "json",
        url:        "/sounds", // TODO: Place in config
        statusCode: {
            404: function() {
                console.log("404: Could not fetch list of sound files");
            }
        },
    })
    .done(function(data){
        $.each(data, function(i,j){
            soundList.push(new Audio("/sounds" + "/" + j.name)) // TODO: Place in config
            //soundList["test"] = as;
        });
        console.log("All sound files fetched");
    });

    $(document).on("keypress", function (e) {
    // use e.which
    if(e.which === 104){
        console.log(soundList);
        soundList[0].play();
        //soundList["test"].play();
    }
});
});
//audio.play();
