$(document).ready(function(){
    request();
});

function request(){
    $.ajax({
        cache:      false,
        dataType:   "json",
        url:        "/images",
        statusCode: {
            404: function() {
                alert("Could not fetch list of images");
            }
        },
    })
    .done(function(data){
        var nms = [];
        $.each(data, function(i,j){
            nms.push(j.name);
        });
        console.log(nms);
    });
}
