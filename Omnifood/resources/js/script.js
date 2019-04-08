$(document).ready(function() {

    /* For the sticky navigation */
    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
            if(direction == "down"){
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }
    })

    /* Scroll to sections */
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })

    $('.js--scroll-to-steps').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
    })

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    })

    $('.js--scroll-to-cities').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);
    })

    $('.js--scroll-to-forms').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-forms').offset().top}, 1000);
    })

    /* animations on  Scroll*/
    var waypoint = new Waypoint({
        element: $('.js--wp-1'),
        handler: function() {
            $('.js--wp-1').addClass('animated fadeIn');
        },
        offset: '75%'
    });

    var waypoint = new Waypoint({
        element: $('.js--wp-2'),
        handler: function() {
            $('.js--wp-2').addClass('animated fadeInUp');
        },
        offset: '75%'
    });

    var waypoint = new Waypoint({
        element: $('.js--wp-3'),
        handler: function() {
            $('.js--wp-3').addClass('animated fadeIn');
        },
        offset: '75%'
    });

    var waypoint = new Waypoint({
        element: $('.js--wp-4'),
        handler: function() {
            $('.js--wp-4').addClass('animated pulse');
        },
        offset: '75%'
    });
});