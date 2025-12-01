// Initialize GSAP and ScrollTrigger globally
// This ensures all animations work reliably

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin once globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Refresh ScrollTrigger after DOM is ready
  const refreshScrollTrigger = () => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };
  
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    refreshScrollTrigger();
  } else {
    window.addEventListener('DOMContentLoaded', refreshScrollTrigger);
    window.addEventListener('load', refreshScrollTrigger);
  }
  
  // Refresh on resize
  let resizeTimer: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  });
}

export { gsap, ScrollTrigger };

