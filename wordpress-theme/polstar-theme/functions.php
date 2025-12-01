<?php
/**
 * Polstar AI Theme Functions
 *
 * @package PolstarTheme
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function polstar_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'polstar-theme'),
        'footer' => __('Footer Menu', 'polstar-theme'),
    ));
}
add_action('after_setup_theme', 'polstar_theme_setup');

// Enqueue scripts and styles
function polstar_theme_scripts() {
    $theme_version = wp_get_theme()->get('Version');
    
    // Google Fonts
    wp_enqueue_style('google-fonts-inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', array(), null);
    wp_enqueue_style('fontshare-satoshi', 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap', array(), null);
    
    // Main theme styles (compiled Tailwind or custom CSS)
    wp_enqueue_style('polstar-theme-style', get_template_directory_uri() . '/assets/css/style.css', array(), $theme_version);
    
    // Star background animations (MANDATORY)
    wp_enqueue_script('polstar-star-backgrounds', get_template_directory_uri() . '/assets/js/star-backgrounds.js', array(), $theme_version, true);
    
    // Scroll stars
    wp_enqueue_script('polstar-scroll-stars', get_template_directory_uri() . '/assets/js/scroll-stars.js', array(), $theme_version, true);
    
    // Cursor trail (optional)
    wp_enqueue_script('polstar-cursor-trail', get_template_directory_uri() . '/assets/js/cursor-trail.js', array(), $theme_version, true);
    
    // Main theme script
    wp_enqueue_script('polstar-theme-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), $theme_version, true);
    
    // Contact form handler
    wp_enqueue_script('polstar-contact-form', get_template_directory_uri() . '/assets/js/contact-form.js', array('jquery'), $theme_version, true);
    wp_localize_script('polstar-contact-form', 'polstarAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('polstar_contact_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'polstar_theme_scripts');

// Handle contact form submission
function polstar_handle_contact_form() {
    check_ajax_referer('polstar_contact_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $organization = sanitize_text_field($_POST['organization']);
    $role = sanitize_text_field($_POST['role']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(array('message' => 'Please fill in all required fields.'));
    }
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission from ' . $name;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Organization: $organization\n";
    $body .= "Role: $role\n\n";
    $body .= "Message:\n$message";
    
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'From: ' . $email);
    
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success(array('message' => 'Thank you for your interest! We will get back to you soon.'));
    } else {
        wp_send_json_error(array('message' => 'There was an error sending your message. Please try again.'));
    }
}
add_action('wp_ajax_polstar_contact_form', 'polstar_handle_contact_form');
add_action('wp_ajax_nopriv_polstar_contact_form', 'polstar_handle_contact_form');

// Add custom body classes
function polstar_body_classes($classes) {
    $classes[] = 'polstar-theme';
    return $classes;
}
add_filter('body_class', 'polstar_body_classes');

