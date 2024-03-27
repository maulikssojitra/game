!(function($) {
    "use strict";

    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#header').addClass('header-scroll');
        }
        else{
            $('#header').removeClass('header-scroll');
        }
    })

    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('.back-to-top').fadeIn('slow');
        }
        else{
            $('.back-to-top').fadeOut('slow');
        }
    })
    $('.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        },300,'easeInOutExpo');

        return false;
    })


})(jQuery);