<?php
/**
 * The main template file
 * Falls back to this if no other template matches
 */

get_header();
?>

<main id="main-content">
    <?php
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            the_content();
        }
    }
    ?>
</main>

<?php get_footer(); ?>

