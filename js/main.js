(function ($) {
    "use strict";

    if (!$) return;

    $(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').off('mouseover mouseout').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover mouseout');
            }
        }

        toggleNavbarMethod();
        $(window).on('resize', toggleNavbarMethod);

        if ($.fn.datetimepicker) {
            $('.date').datetimepicker({ format: 'L' });
            $('.time').datetimepicker({ format: 'LT' });
        }

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        $('.back-to-top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 900);
            return false;
        });

        if ($.fn.owlCarousel) {
            $('.price-carousel').owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                margin: 45,
                dots: false,
                loop: true,
                nav: true,
                rtl: true,
                navText: [
                    '<i class="bi bi-arrow-right"></i>',
                    '<i class="bi bi-arrow-left"></i>'
                ],
                responsive: {
                    0: { items: 1 },
                    992: { items: 2 },
                    1200: { items: 3 }
                }
            });

            $('.team-carousel, .related-carousel').owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                margin: 45,
                dots: false,
                loop: true,
                nav: true,
                rtl: true,
                navText: [
                    '<i class="bi bi-arrow-right"></i>',
                    '<i class="bi bi-arrow-left"></i>'
                ],
                responsive: {
                    0: { items: 1 },
                    992: { items: 2 }
                }
            });

            $('.testimonial-carousel').owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                items: 1,
                dots: true,
                loop: true,
                rtl: true
            });
        }
    });
})(window.jQuery);