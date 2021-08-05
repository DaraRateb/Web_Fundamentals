var temp;
$(document).ready(function () {
    $('img').hover(function(){
        temp=$(this).attr("src");
        $(this).attr("src",$(this).attr("data-alt-src"));
    }, function() {
       $(this).attr("data-alt-src",$(this).attr("src"));
        $(this).attr("src",temp);
    });

});
