// Simple test component to verify animations are working
// This will be removed after verification

import { useEffect } from 'react';

export default function AnimationTest() {
  useEffect(() => {
    // Test if GSAP is loaded
    if (typeof window !== 'undefined') {
      try {
        const gsap = (window as any).gsap;
        if (gsap) {
          console.log('✓ GSAP loaded');
        } else {
          console.warn('✗ GSAP not found');
        }
      } catch (e) {
        console.warn('Error checking GSAP:', e);
      }
    }
  }, []);

  return null;
}

