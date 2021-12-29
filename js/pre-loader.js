;(function ($) {
    "use strict";

    /*============= preloader js css =============*/
    var cites = [];
    cites[0] = "Welcome to pubbox the ultimate flutter dashboard template";
    cites[1] = "fast development and fast deployment";
    cites[2] = "You can create any type of Dashboard in a blink of an eye";
    cites[3] = "fast development and fast deployment";
    var cite = cites[Math.floor(Math.random() * cites.length)];
    $('#preloader p').text(cite);
    $('#preloader').addClass('loading');

    $(window).on( 'load', function() {
        setTimeout(function () {
            $('#preloader').fadeOut(500, function () {
                $('#preloader').removeClass('loading');
            });
        }, 500);
    })

})(jQuery)