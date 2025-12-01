/**
 * Scroll Stars Animation
 * Stars that move based on scroll position
 */

(function() {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    function initScrollStars() {
        const container = document.getElementById('scroll-stars');
        if (!container) return;

        // Create stars
        const starCount = 30;
        const stars = [];
        
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                speed: Math.random() * 0.3 + 0.1,
            });
        }

        // Create star elements
        stars.forEach(star => {
            const starEl = document.createElement('div');
            starEl.className = 'absolute rounded-full bg-white';
            starEl.style.cssText = `
                width: ${star.size}px;
                height: ${star.size}px;
                left: ${star.x}vw;
                top: ${star.y}vh;
                opacity: ${star.opacity};
                box-shadow: 0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5);
                transition: transform 0.1s linear;
            `;
            container.appendChild(starEl);
        });

        // Handle scroll
        let rafId = null;
        function handleScroll() {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const scrollFactor = scrollY * 0.15;

                const starElements = container.children;
                stars.forEach((star, index) => {
                    if (starElements[index]) {
                        const newY = (star.y + scrollFactor * star.speed) % 100;
                        starElements[index].style.transform = `translate(${star.x}vw, ${newY}vh)`;
                    }
                });
            });
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial position

        // Cleanup
        window.addEventListener('beforeunload', () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollStars);
    } else {
        initScrollStars();
    }
})();

