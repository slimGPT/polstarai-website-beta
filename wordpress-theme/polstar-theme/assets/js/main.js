/**
 * Main Theme JavaScript
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        // Smooth scrolling for anchor links
        $('a[href^="#"]').on('click', function(e) {
            const target = $(this.getAttribute('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        });

        // Mobile menu toggle (if needed)
        $('.mobile-menu-toggle').on('click', function() {
            $(this).toggleClass('active');
            $('.mobile-menu').toggleClass('active');
        });

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.mobile-menu, .mobile-menu-toggle').length) {
                $('.mobile-menu').removeClass('active');
                $('.mobile-menu-toggle').removeClass('active');
            }
        });
    });

})(jQuery);

