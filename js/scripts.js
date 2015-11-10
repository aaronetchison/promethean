jQuery(document).ready(function($) {

    $('.owl-carousel').owlCarousel({
        items : 1,
        itemsDesktop : [1280,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        autoPlay : 9999,
        stopOnHover : true,
    });
});