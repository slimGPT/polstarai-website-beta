/**
 * Hero Section Animations
 * 
 * All GSAP animations for the Polstar AI hero section.
 * Designed to be calm, magical, and premium - not noisy or hyperactive.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Check for reduced motion preference
 */
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if device is mobile
 */
const isMobile = () => {
  return window.innerWidth < 768;
};

/**
 * Einstein Quote Animations
 * - Fade in after 0.3s
 * - Soft shimmer traveling across text in 3 seconds
 * - Slight upward drift (2px) on scroll
 */
export const animateQuote = (
  quoteElement: HTMLElement | null,
  blockquote: HTMLElement | null
) => {
  if (!quoteElement || prefersReducedMotion()) return;

  const tl = gsap.timeline({ delay: 0.3 });

  // Fade in animation
  tl.from(quoteElement, {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  // Shimmer effect - animate background position
  if (blockquote) {
    gsap.to(blockquote, {
      backgroundPosition: '200% 0',
      duration: 3,
      ease: 'none',
      repeat: -1,
      delay: 1.5,
    });
  }

  // Subtle scroll parallax
  ScrollTrigger.create({
    trigger: quoteElement,
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.5,
    onUpdate: (self) => {
      gsap.set(quoteElement, {
        y: -2 * self.progress,
      });
    },
  });
};

/**
 * Headline Animations
 * - Staggered letter animation (opacity + slight upward motion)
 * - Duration: 0.9s
 * - Ease: "power3.out"
 */
export const animateHeadline = (
  headlineElement: HTMLElement | null,
  startDelay: number = 0.6
) => {
  if (!headlineElement) return;

  // Ensure element is visible first
  headlineElement.style.visibility = 'visible';
  headlineElement.style.opacity = '1';

  // Preserve the original gradient classes
  const hasGradient = headlineElement.classList.contains('bg-clip-text') || 
                      headlineElement.classList.contains('text-transparent');

  if (prefersReducedMotion()) {
    // Just ensure it's visible without animation
    return;
  }

  // Split headline into words for staggered animation
  const text = headlineElement.textContent || '';
  const words = text.split(/(\s+)/);
  
  // Clear original text
  const fragment = document.createDocumentFragment();
  
  // Wrap each word in a span, preserving gradient styles
  words.forEach((word) => {
    if (word.trim()) {
      const wordSpan = document.createElement('span');
      wordSpan.textContent = word;
      wordSpan.style.display = 'inline-block';
      
      // Preserve gradient if it exists
      if (hasGradient) {
        wordSpan.className = 'bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent';
        // For gradient text, use low opacity instead of 0 to preserve visibility
        gsap.set(wordSpan, {
          opacity: 0.1,
          y: 30,
        });
      } else {
        // For regular text, can use opacity 0
        gsap.set(wordSpan, {
          opacity: 0,
          y: 30,
        });
      }
      
      fragment.appendChild(wordSpan);
    } else {
      fragment.appendChild(document.createTextNode(word));
    }
  });
  
  headlineElement.innerHTML = '';
  headlineElement.appendChild(fragment);
  
  // Animate each word
  const wordSpans = headlineElement.querySelectorAll('span');
  wordSpans.forEach((wordSpan, index) => {
    const finalOpacity = hasGradient ? 1 : 1;
    const startOpacity = hasGradient ? 0.1 : 0;
    
    gsap.fromTo(wordSpan, {
      opacity: startOpacity,
      y: 30,
    }, {
      opacity: finalOpacity,
      y: 0,
      duration: 0.9,
      delay: startDelay + index * 0.05,
      ease: 'power3.out',
    });
  });

  // Slight upward drift on scroll
  ScrollTrigger.create({
    trigger: headlineElement,
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.5,
    onUpdate: (self) => {
      gsap.set(headlineElement, {
        y: -2 * self.progress,
      });
    },
  });
};

/**
 * Subheadline Animations
 * - Fade up after headline finishes
 * - Subtle opacity pulsing every 6-8 seconds (very soft)
 */
export const animateSubheadline = (
  subheadElement: HTMLElement | null,
  startDelay: number = 1.5
) => {
  if (!subheadElement || prefersReducedMotion()) return;

  // Initial fade up
  gsap.from(subheadElement, {
    y: 20,
    opacity: 0,
    duration: 0.9,
    delay: startDelay,
    ease: 'power3.out',
  });

  // Subtle pulsing effect every 6-8 seconds
  gsap.to(subheadElement, {
    opacity: 0.92,
    duration: 3,
    delay: startDelay + 1.5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    repeatDelay: 5,
  });
};

/**
 * Button Hover Effects
 * - Hover: expand by 2-3%
 * - Glow around edges using box-shadow animation
 * - Tiny star particles appear briefly when hovering
 */
export const setupButtonAnimations = (
  buttons: (HTMLElement | null)[]
) => {
  if (prefersReducedMotion()) return;

  buttons.forEach((button) => {
    if (!button) return;

    const starParticlesContainer = document.createElement('div');
    starParticlesContainer.className = 'absolute inset-0 pointer-events-none overflow-hidden rounded-full';
    starParticlesContainer.style.zIndex = '1';
    button.style.position = 'relative';
    button.appendChild(starParticlesContainer);

    // Mouse enter animation
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.025,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Glow effect
      gsap.to(button, {
        boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)',
        duration: 0.3,
      });

      // Create star particles
      createStarParticles(starParticlesContainer, button);
    });

    // Mouse leave animation
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(button, {
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)',
        duration: 0.3,
      });
    });
  });
};

/**
 * Create star particles on button hover
 */
const createStarParticles = (
  container: HTMLElement,
  button: HTMLElement
) => {
  const particleCount = 5;
  const rect = button.getBoundingClientRect();

  for (let i = 0; i < particleCount; i++) {
    const star = document.createElement('div');
    star.className = 'absolute w-1 h-1 bg-white rounded-full';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = '0';
    container.appendChild(star);

    const angle = Math.random() * Math.PI * 2;
    const distance = 30 + Math.random() * 20;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    gsap.fromTo(star, {
      opacity: 0,
      scale: 0,
    }, {
      x,
      y,
      opacity: 1,
      scale: 1.5,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(star, {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      delay: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        star.remove();
      },
    });
  }
};

/**
 * Star Field Animations
 * - Subtle parallax reacting to mouse movement
 * - Stars slowly drift in different directions
 * - Occasional twinkling effect
 * Note: This is handled by the HeroStarField component
 */
export const setupStarFieldAnimations = (
  starsContainer: HTMLElement | null,
  stars: HTMLElement[]
) => {
  // This function is kept for potential future use
  // The actual star field animations are in HeroStarField component
  if (!starsContainer || prefersReducedMotion()) return () => {};

  return () => {};
};

/**
 * Samy-Bear Animations
 * - Peeks upward from bottom (y: 80 → y: 0, easing: "power2.out")
 * - Idle loop: slow breathing, blinking, slight sway
 * - On scroll: Samy gently lowers, then rises into place on scroll up (parallax)
 */
export const animateSamyBear = (
  samyElement: HTMLElement | null,
  startDelay: number = 1.2
) => {
  if (!samyElement || prefersReducedMotion()) return;

  // Initial peek-up animation
  gsap.from(samyElement, {
    y: 80,
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    delay: startDelay,
    ease: 'power2.out',
  });

  // Idle breathing animation
  const breathingTL = gsap.timeline({ repeat: -1, delay: startDelay + 1.2 });
  breathingTL.to(samyElement, {
    scale: 1.02,
    duration: 2.5,
    ease: 'sine.inOut',
    yoyo: true,
  });

  // Slight sway animation
  const swayTL = gsap.timeline({ repeat: -1, delay: startDelay + 1.5 });
  swayTL.to(samyElement, {
    rotation: 2,
    duration: 4,
    ease: 'sine.inOut',
    yoyo: true,
  });

  // Scroll parallax - Samy lowers on scroll down, rises on scroll up
  ScrollTrigger.create({
    trigger: samyElement,
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
      const yOffset = 30 * self.progress;
      gsap.set(samyElement, {
        y: yOffset,
      });
    },
  });
};

/**
 * Spotlight Glow Behind Headline (Mouse Responsive)
 * Uses GSAP quickSetter for performance
 */
export const setupSpotlightGlow = (
  headlineElement: HTMLElement | null,
  glowElement: HTMLElement | null
) => {
  if (!headlineElement || !glowElement || prefersReducedMotion() || isMobile()) return () => {};

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;
  let targetOpacity = 0.4;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = headlineElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate target position (limited range)
    targetX = mouseX * 0.3;
    targetY = mouseY * 0.3;
    targetOpacity = 0.5 + Math.min(Math.abs(mouseX / rect.width), 1) * 0.3;
  };

  window.addEventListener('mousemove', handleMouseMove);

  // Smooth interpolation animation using ticker
  const tickerId = gsap.ticker.add(() => {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;
    const currentOpacity = parseFloat(glowElement.style.opacity || '0');
    const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * 0.1;
    
    gsap.set(glowElement, {
      x: currentX,
      y: currentY,
      opacity: newOpacity,
    });
  });

  // Initial fade in
  gsap.from(glowElement, {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1,
    ease: 'power2.out',
  });

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    gsap.ticker.remove(tickerId);
  };
};

