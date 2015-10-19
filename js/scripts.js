jQuery(document).ready(function($) {
    /* prepend menu icon */
    $('#nav-wrap').prepend('<div id="menu-icon"><div class="logo"></div><h2 class="button">Promethean</h2></div>');
    
    /* toggle nav */
    $("#menu-icon").on("click", function(){
        $("#nav-menu").slideToggle();
        $(this).toggleClass("active");
    });


});