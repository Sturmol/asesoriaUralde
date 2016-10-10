
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    //add bootstrap's scrollspy
    $('body').scrollspy({
    	target: '.navbar'
    });
    
});