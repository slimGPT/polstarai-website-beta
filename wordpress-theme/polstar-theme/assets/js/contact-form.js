/**
 * Contact Form Handler
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        $('#polstar-contact-form').on('submit', function(e) {
            e.preventDefault();

            const $form = $(this);
            const $submitBtn = $form.find('button[type="submit"]');
            const originalText = $submitBtn.text();
            
            // Disable submit button
            $submitBtn.prop('disabled', true).text('Sending...');

            const formData = {
                action: 'polstar_contact_form',
                nonce: polstarAjax.nonce,
                name: $form.find('#contact-name').val(),
                email: $form.find('#contact-email').val(),
                organization: $form.find('#contact-organization').val(),
                role: $form.find('#contact-role').val(),
                message: $form.find('#contact-message').val(),
            };

            $.ajax({
                url: polstarAjax.ajaxurl,
                type: 'POST',
                data: formData,
                success: function(response) {
                    if (response.success) {
                        alert(response.data.message);
                        $form[0].reset();
                    } else {
                        alert(response.data.message || 'There was an error. Please try again.');
                    }
                },
                error: function() {
                    alert('There was an error sending your message. Please try again.');
                },
                complete: function() {
                    $submitBtn.prop('disabled', false).text(originalText);
                }
            });
        });
    });

})(jQuery);

