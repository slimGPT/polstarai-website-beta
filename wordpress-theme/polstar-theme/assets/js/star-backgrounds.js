/**
 * Star Background Animations - MANDATORY
 * Converted from React components to vanilla JavaScript for WordPress
 */

(function() {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Skip animations if user prefers reduced motion
    }

    // ============================================
    // SpaceBackground Component (Main Background)
    // ============================================
    function initSpaceBackground() {
        const container = document.getElementById('space-background');
        if (!container) return;

        // Add pulse animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }
            
            @keyframes shootingStar {
                0% {
                    transform: translate(0, 0);
                    opacity: 1;
                }
                100% {
                    transform: translate(120vw, 60vh);
                    opacity: 0;
                }
            }
            
            @keyframes floatCloud {
                0%, 100% {
                    transform: translate(0, 0);
                    opacity: 0.1;
                }
                50% {
                    transform: translate(30px, -20px);
                    opacity: 0.2;
                }
            }
        `;
        document.head.appendChild(style);

        // Create background layers
        const blackBg = document.createElement('div');
        blackBg.className = 'absolute inset-0 bg-black';
        container.appendChild(blackBg);

        const gradient1 = document.createElement('div');
        gradient1.className = 'absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black';
        container.appendChild(gradient1);

        const gradient2 = document.createElement('div');
        gradient2.className = 'absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-cyan-950/10 opacity-60';
        container.appendChild(gradient2);

        // Generate nebula clouds
        const clouds = [];
        for (let i = 0; i < 8; i++) {
            clouds.push({
                id: i,
                size: Math.random() * 400 + 300,
                top: Math.random() * 100,
                left: Math.random() * 100,
                duration: Math.random() * 10 + 15,
                delay: Math.random() * 5,
            });
        }

        clouds.forEach(cloud => {
            const cloudEl = document.createElement('div');
            cloudEl.className = 'absolute rounded-full blur-3xl';
            cloudEl.style.cssText = `
                width: ${cloud.size}px;
                height: ${cloud.size}px;
                top: ${cloud.top}%;
                left: ${cloud.left}%;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%);
                animation: floatCloud ${cloud.duration}s ease-in-out infinite;
                animation-delay: ${cloud.delay}s;
            `;
            container.appendChild(cloudEl);
        });

        // Generate twinkling stars
        const stars = [];
        for (let i = 0; i < 84; i++) {
            stars.push({
                id: i,
                size: Math.random() * 3 + 1,
                top: Math.random() * 100,
                left: Math.random() * 100,
                delay: Math.random() * 3,
                duration: Math.random() * 2 + 1,
                opacity: Math.random() * 0.7 + 0.3,
            });
        }

        stars.forEach(star => {
            const starEl = document.createElement('div');
            starEl.className = 'absolute bg-white rounded-full';
            starEl.style.cssText = `
                width: ${star.size}px;
                height: ${star.size}px;
                top: ${star.top}%;
                left: ${star.left}%;
                animation: pulse ${star.duration}s ease-in-out infinite;
                animation-delay: ${star.delay}s;
                opacity: ${star.opacity};
                box-shadow: 0 0 ${star.size * 3}px rgba(255, 255, 255, 0.6), 0 0 ${star.size * 5}px rgba(59, 130, 246, 0.3);
            `;
            container.appendChild(starEl);
        });

        // Generate shooting stars
        const shootingStars = [];
        for (let i = 0; i < 5; i++) {
            shootingStars.push({
                id: i,
                duration: Math.random() * 5 + 4,
                delay: i * 3,
                top: Math.random() * 100,
            });
        }

        shootingStars.forEach(shootingStar => {
            const shootingStarEl = document.createElement('div');
            shootingStarEl.className = 'absolute w-1 h-1 bg-white rounded-full';
            shootingStarEl.style.cssText = `
                top: ${shootingStar.top}%;
                left: -10%;
                animation: shootingStar ${shootingStar.duration}s linear infinite;
                animation-delay: ${shootingStar.delay}s;
                box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
            `;
            container.appendChild(shootingStarEl);
        });
    }

    // ============================================
    // SubtleStarBackground Component
    // ============================================
    function initSubtleStarBackground(element, density = 'medium') {
        if (!element) return;

        const starCounts = {
            low: 15,
            medium: 25,
            high: 40,
        };

        const count = starCounts[density] || starCounts.medium;
        const stars = [];

        for (let i = 0; i < count; i++) {
            stars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                delay: Math.random() * 3,
            });
        }

        // Ensure pulse animation exists
        if (!document.getElementById('pulse-keyframes')) {
            const pulseStyle = document.createElement('style');
            pulseStyle.id = 'pulse-keyframes';
            pulseStyle.textContent = `
                @keyframes pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
            `;
            document.head.appendChild(pulseStyle);
        }

        stars.forEach(star => {
            const starEl = document.createElement('div');
            starEl.className = 'absolute rounded-full bg-white';
            starEl.style.cssText = `
                left: ${star.x}%;
                top: ${star.y}%;
                width: ${star.size}px;
                height: ${star.size}px;
                opacity: ${star.opacity};
                animation: pulse 3s ease-in-out infinite;
                animation-delay: ${star.delay}s;
            `;
            element.appendChild(starEl);
        });
    }

    // ============================================
    // StarryBackground Component (Canvas-based)
    // ============================================
    function initStarryBackground() {
        const canvas = document.getElementById('starry-background-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
            createStars();
        }

        let stars = [];
        let animationId = null;

        function createStars() {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 3000);

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2.5 + 0.5,
                    opacity: Math.random() * 0.9 + 0.3,
                    speed: Math.random() * 0.3 + 0.1,
                });
            }
        }

        function animate() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                // Twinkling effect
                star.opacity += (Math.random() - 0.5) * 0.02;
                star.opacity = Math.max(0.2, Math.min(1, star.opacity));

                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Add glow for larger stars
                if (star.size > 1.5) {
                    const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
                    gradient.addColorStop(0, `rgba(147, 197, 253, ${star.opacity * 0.4})`);
                    gradient.addColorStop(0.5, `rgba(147, 197, 253, ${star.opacity * 0.2})`);
                    gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationId = requestAnimationFrame(animate);
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animate();

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        });
    }

    // ============================================
    // ConstellationBackground Component
    // ============================================
    function initConstellationBackground(element, density = 'medium') {
        if (!element) return;

        const starCounts = {
            low: 8,
            medium: 15,
            high: 25,
        };

        const count = starCounts[density] || starCounts.medium;
        const stars = [];

        for (let i = 0; i < count; i++) {
            stars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 1.5 + 0.8,
                opacity: Math.random() * 0.4 + 0.2,
                delay: Math.random() * 2,
            });
        }

        // Create constellation lines
        const connections = [];
        for (let i = 0; i < stars.length - 1; i += 2) {
            if (Math.random() > 0.5) {
                connections.push({ from: i, to: i + 1 });
            }
        }

        // Create SVG for lines
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.className = 'absolute inset-0 w-full h-full opacity-20';
        connections.forEach((conn, idx) => {
            const fromStar = stars[conn.from];
            const toStar = stars[conn.to];
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', fromStar.x + '%');
            line.setAttribute('y1', fromStar.y + '%');
            line.setAttribute('x2', toStar.x + '%');
            line.setAttribute('y2', toStar.y + '%');
            line.setAttribute('stroke', 'rgba(255, 255, 255, 0.15)');
            line.setAttribute('stroke-width', '0.5');
            svg.appendChild(line);
        });
        element.appendChild(svg);

        // Create stars
        if (!document.getElementById('pulse-keyframes')) {
            const pulseStyle = document.createElement('style');
            pulseStyle.id = 'pulse-keyframes';
            pulseStyle.textContent = `
                @keyframes pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
            `;
            document.head.appendChild(pulseStyle);
        }

        stars.forEach(star => {
            const starEl = document.createElement('div');
            starEl.className = 'absolute rounded-full bg-white';
            starEl.style.cssText = `
                left: ${star.x}%;
                top: ${star.y}%;
                width: ${star.size}px;
                height: ${star.size}px;
                opacity: ${star.opacity};
                box-shadow: 0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3);
                animation: pulse 4s ease-in-out infinite;
                animation-delay: ${star.delay}s;
            `;
            element.appendChild(starEl);
        });
    }

    // Initialize on DOM ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize main space background
        initSpaceBackground();

        // Initialize subtle star backgrounds (for sections)
        document.querySelectorAll('[data-star-background]').forEach(el => {
            const density = el.getAttribute('data-star-background') || 'medium';
            initSubtleStarBackground(el, density);
        });

        // Initialize canvas starry background if exists
        initStarryBackground();

        // Initialize constellation backgrounds
        document.querySelectorAll('[data-constellation-background]').forEach(el => {
            const density = el.getAttribute('data-constellation-background') || 'medium';
            initConstellationBackground(el, density);
        });
    }

    init();
})();

