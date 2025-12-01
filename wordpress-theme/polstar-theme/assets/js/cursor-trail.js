/**
 * Cursor Trail Effect (Optional)
 * Creates a trailing effect following the mouse cursor
 */

(function() {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    function initCursorTrail() {
        const container = document.getElementById('cursor-trail');
        if (!container) return;

        const points = [];
        let mouseX = 0;
        let mouseY = 0;
        let animationFrameId = null;

        function handleMouseMove(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;

            points.push({
                x: mouseX,
                y: mouseY,
                opacity: 1,
                size: 4,
            });

            if (points.length > 8) {
                points.shift();
            }

            points.forEach((point, index) => {
                const age = points.length - index;
                point.opacity = Math.max(0, 1 - age * 0.15);
                point.size = Math.max(2, 4 - age * 0.3);
            });

            renderTrail();
        }

        function renderTrail() {
            container.innerHTML = '';
            points.forEach((point, index) => {
                if (point.opacity > 0.05) {
                    const trailEl = document.createElement('div');
                    trailEl.className = 'absolute rounded-full bg-white';
                    trailEl.style.cssText = `
                        left: ${point.x}px;
                        top: ${point.y}px;
                        width: ${point.size}px;
                        height: ${point.size}px;
                        transform: translate(-50%, -50%);
                        opacity: ${point.opacity};
                        box-shadow: 0 0 ${point.size * 2}px rgba(255, 255, 255, 0.6);
                        transition: opacity 0.1s ease-out;
                    `;
                    container.appendChild(trailEl);
                }
            });
        }

        function animate() {
            // Gradually fade out all points
            let hasVisible = false;
            points.forEach(point => {
                point.opacity = Math.max(0, point.opacity - 0.1);
                if (point.opacity > 0.05) {
                    hasVisible = true;
                }
            });

            if (!hasVisible && points.length > 0) {
                points.length = 0;
            }

            renderTrail();
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        // Cleanup
        window.addEventListener('beforeunload', () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCursorTrail);
    } else {
        initCursorTrail();
    }
})();

