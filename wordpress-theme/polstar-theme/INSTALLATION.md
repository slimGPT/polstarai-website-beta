# Installation Guide for Polstar AI WordPress Theme

## Quick Start

1. **Copy the theme folder to WordPress:**
   ```
   Copy: wordpress-theme/polstar-theme
   To: wp-content/themes/polstar-theme
   ```

2. **Copy your images:**
   - Copy all files from `client/public/images/` 
   - To `wordpress-theme/polstar-theme/assets/images/`
   - Ensure `logomain.png` exists

3. **Activate the theme:**
   - Go to WordPress Admin → Appearance → Themes
   - Find "Polstar AI Theme"
   - Click "Activate"

4. **Set homepage (optional):**
   - Go to Settings → Reading
   - Choose "A static page" for homepage
   - The theme will use `front-page.php` automatically

## CSS Setup Options

### Option 1: Use Tailwind CDN (Quick - Development)
The theme already includes Tailwind CDN in `assets/css/style.css`. This works out of the box but is not recommended for production.

### Option 2: Compile Tailwind CSS (Recommended - Production)
1. Install Tailwind CSS in the theme directory:
   ```bash
   cd wp-content/themes/polstar-theme
   npm init -y
   npm install -D tailwindcss
   npx tailwindcss init
   ```

2. Create `tailwind.config.js`:
   ```js
   module.exports = {
     content: [
       './**/*.php',
       './assets/js/**/*.js',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. Create `input.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. Build CSS:
   ```bash
   npx tailwindcss -i ./input.css -o ./assets/css/style.css --minify
   ```

5. Update `assets/css/style.css` to remove the CDN import and use the compiled CSS.

### Option 3: Replace with Custom CSS
Replace all Tailwind classes in PHP templates with custom CSS classes and create your own stylesheet.

## Testing Star Animations

After installation, verify:
1. Open the homepage in a browser
2. Check browser console for errors
3. Verify stars are visible on the page
4. Test scrolling to see scroll-based star movement
5. Move mouse to see cursor trail (if enabled)

## Troubleshooting

**Stars not showing:**
- Open browser developer tools (F12)
- Check Console tab for JavaScript errors
- Verify files are loaded in Network tab:
  - `star-backgrounds.js`
  - `scroll-stars.js`

**Styles broken:**
- Clear WordPress cache
- Clear browser cache
- Check that `style.css` is loading
- If using Tailwind: ensure classes are compiled

**Contact form not working:**
- Check WordPress email settings (Settings → General)
- Test with Contact Form 7 plugin first
- Check browser console for AJAX errors

## Next Steps

1. Customize section content in `template-parts/section-*.php`
2. Add your logo and images to `assets/images/`
3. Customize colors in CSS or Tailwind config
4. Add more sections as needed

