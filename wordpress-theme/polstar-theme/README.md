# Polstar AI WordPress Theme

A modern WordPress theme for Polstar AI with animated star backgrounds and smooth scrolling effects.

## Features

- **Star Background Animations** (MANDATORY)
  - SpaceBackground: Full-page animated starfield with shooting stars and nebula clouds
  - ScrollStars: Stars that move based on scroll position
  - SubtleStarBackground: Subtle star animations for sections
  - ConstellationBackground: Constellation patterns with connecting lines
  - StarryBackground: Canvas-based animated starfield

- **Modern Design**
  - Responsive layout
  - Smooth scrolling
  - Mobile-friendly navigation
  - Contact form with AJAX submission

## Installation

1. **Upload the theme to WordPress:**
   - Zip the `polstar-theme` folder
   - Go to WordPress Admin → Appearance → Themes
   - Click "Add New" → "Upload Theme"
   - Upload the zip file
   - Activate the theme

2. **Set up the homepage:**
   - Go to Settings → Reading
   - Set "Your homepage displays" to "A static page"
   - Select the page you want as your homepage
   - Or use the built-in front-page.php template

3. **Add assets:**
   - Copy images from `client/public/images/` to `wordpress-theme/polstar-theme/assets/images/`
   - Ensure `logomain.png` is in `assets/images/`

4. **Configure CSS:**
   - Option A: Use Tailwind CSS CDN (already included in style.css for development)
   - Option B: Compile Tailwind CSS from your existing config and replace `assets/css/style.css`
   - Option C: Replace Tailwind classes with custom CSS

## File Structure

```
polstar-theme/
├── style.css              # Theme header (required by WordPress)
├── functions.php          # Theme functions and enqueues
├── header.php            # Header template
├── footer.php            # Footer template
├── front-page.php        # Homepage template
├── index.php             # Fallback template
├── assets/
│   ├── css/
│   │   └── style.css     # Main stylesheet
│   ├── js/
│   │   ├── star-backgrounds.js  # Star animations (MANDATORY)
│   │   ├── scroll-stars.js      # Scroll-based stars
│   │   ├── cursor-trail.js      # Cursor trail effect
│   │   ├── main.js              # Main theme script
│   │   └── contact-form.js      # Contact form handler
│   └── images/           # Theme images (copy from client/public/images/)
└── template-parts/
    ├── section-contact.php
    ├── section-problem.php
    ├── section-vertical-ai.php
    ├── section-about-us.php
    ├── section-behavioral-architecture.php
    ├── section-rag.php
    ├── section-ai-constellation.php
    ├── section-why-polstar.php
    └── section-partners.php
```

## Required Elements for Star Backgrounds

The star backgrounds require these HTML elements in `header.php`:

```html
<!-- Main Space Background -->
<div id="space-background" class="fixed inset-0 overflow-hidden pointer-events-none z-0"></div>

<!-- Scroll Stars -->
<div id="scroll-stars" class="fixed inset-0 pointer-events-none z-0 overflow-hidden"></div>

<!-- Cursor Trail (Optional) -->
<div id="cursor-trail" class="fixed inset-0 pointer-events-none z-50"></div>
```

For sections, use data attributes:
```html
<div data-star-background="medium" class="absolute inset-0 overflow-hidden pointer-events-none"></div>
<div data-constellation-background="high" class="absolute inset-0 overflow-hidden pointer-events-none"></div>
```

## Customization

### Star Background Density
- `low`: 15 stars
- `medium`: 25 stars (default)
- `high`: 40 stars

### Contact Form
The contact form uses WordPress AJAX. Emails are sent to the admin email address.

### Navigation
Edit navigation items in `header.php` or use WordPress menus by modifying the header template.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Respects `prefers-reduced-motion` media query

## Troubleshooting

1. **Star backgrounds not showing:**
   - Check browser console for JavaScript errors
   - Ensure `star-backgrounds.js` is enqueued in `functions.php`
   - Verify the required HTML elements exist in `header.php`

2. **Styles not loading:**
   - Check that CSS is properly enqueued
   - Clear WordPress cache if using caching plugins
   - Verify Tailwind CSS is loaded (if using Tailwind classes)

3. **Contact form not working:**
   - Check browser console for AJAX errors
   - Verify nonce is properly set in `functions.php`
   - Check WordPress email settings

## Development

To customize the star animations, edit the JavaScript files in `assets/js/`:
- `star-backgrounds.js`: Main star animations
- `scroll-stars.js`: Scroll-based star movement
- `cursor-trail.js`: Cursor trail effect

## License

MIT License

