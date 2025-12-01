import { useEffect, useRef } from 'react';

/**
 * ElevenLabs Voyager Widget Component
 * 
 * Mounts the widget inline in the hero section next to "Explore Our Agents" button.
 * Prevents auto-floating by mounting directly into our container and overriding shadow DOM styles.
 */
export default function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initializeWidget = () => {
      // Ensure script is loaded
      const loadScript = (): Promise<void> => {
        return new Promise((resolve, reject) => {
          const existing = document.querySelector('script[src*="convai-widget-embed"]') as HTMLScriptElement;
          if (existing) {
            if (existing.complete || existing.readyState === 'complete') {
              resolve();
            } else {
              existing.onload = () => resolve();
              existing.onerror = () => reject(new Error('Script failed'));
            }
            return;
          }

          const script = document.createElement('script');
          script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
          script.async = true;
          script.type = 'text/javascript';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Script load failed'));
          document.body.appendChild(script);
        });
      };

      const setupWidget = async () => {
        try {
          // Load script first
          await loadScript();

          // Wait for custom element to be defined
          let attempts = 0;
          while (!customElements.get('elevenlabs-convai') && attempts < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
          }

          if (!customElements.get('elevenlabs-convai')) {
            console.warn('ElevenLabs custom element not defined');
            return;
          }

          // Remove any floating widgets that might have been auto-created
          document.querySelectorAll('elevenlabs-convai').forEach((w) => {
            if (w.parentElement !== containerRef.current) {
              (w as HTMLElement).style.display = 'none';
              w.remove();
            }
          });

          // Create widget in our container if it doesn't exist
          if (!widgetRef.current && containerRef.current) {
            const widget = document.createElement('elevenlabs-convai');
            widget.setAttribute('agent-id', 'agent_6801kavbe1dgex7sxd399rq92adk');
            
            // Set inline styles BEFORE appending to prevent default positioning
            widget.style.position = 'relative';
            widget.style.display = 'flex';
            widget.style.alignItems = 'center';
            widget.style.visibility = 'visible';
            widget.style.opacity = '1';
            widget.style.bottom = 'auto';
            widget.style.right = 'auto';
            widget.style.left = 'auto';
            widget.style.top = 'auto';
            widget.style.margin = '0';
            widget.style.padding = '0';
            widget.style.width = 'auto';
            widget.style.maxWidth = '100%';
            widget.style.minWidth = 'auto';
            widget.style.minHeight = 'auto';
            widget.style.height = 'auto';
            widget.style.verticalAlign = 'middle';
            widget.style.zIndex = '10';

            containerRef.current.appendChild(widget);
            widgetRef.current = widget;

            // Override shadow DOM styles - MINIMAL: only prevent fixed positioning on host
            // Don't touch internal elements to preserve widget functionality
            const overrideShadowDOM = () => {
              if (widget.shadowRoot) {
                // Remove any existing override styles
                const existing = widget.shadowRoot.querySelector('style[data-position-override]');
                if (existing) existing.remove();

                // Inject ONLY host-level positioning override - don't touch internal elements
                const style = document.createElement('style');
                style.setAttribute('data-position-override', 'true');
                style.textContent = `
                  :host {
                    position: relative !important;
                    display: flex !important;
                    align-items: center !important;
                    bottom: auto !important;
                    right: auto !important;
                    left: auto !important;
                    top: auto !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: auto !important;
                    max-width: 100% !important;
                    min-width: auto !important;
                    height: auto !important;
                    min-height: auto !important;
                    vertical-align: middle !important;
                    z-index: 10 !important;
                  }
                `;
                widget.shadowRoot.appendChild(style);
              }
            };

            // Try immediately
            overrideShadowDOM();

            // Observe for shadow DOM creation and continuously override
            const observer = new MutationObserver(() => {
              overrideShadowDOM();
            });

            observer.observe(widget, {
              childList: true,
              subtree: true,
              attributes: true,
              attributeFilter: ['style'],
            });

            // Keep observing for a while to catch any delayed style injections
            setTimeout(() => {
              overrideShadowDOM();
              // Disconnect after 10 seconds, but keep a periodic check
              setTimeout(() => observer.disconnect(), 10000);
            }, 100);

            // Periodic check - only reset host element, never touch internal widget elements
            const periodicOverride = setInterval(() => {
              if (widget.parentElement === containerRef.current) {
                // Only reset the host element positioning
                widget.style.position = 'relative';
                widget.style.display = 'flex';
                widget.style.alignItems = 'center';
                widget.style.bottom = 'auto';
                widget.style.right = 'auto';
                widget.style.left = 'auto';
                widget.style.top = 'auto';
                widget.style.verticalAlign = 'middle';
              } else {
                clearInterval(periodicOverride);
              }
            }, 3000);

            // Cleanup after 30 seconds
            setTimeout(() => clearInterval(periodicOverride), 30000);
          }

          // Continuously monitor and remove any floating widgets
          const monitorFloating = setInterval(() => {
            document.querySelectorAll('elevenlabs-convai').forEach((w) => {
              if (w.parentElement !== containerRef.current) {
                (w as HTMLElement).style.display = 'none';
                w.remove();
              }
            });
          }, 500);

          // Cleanup
          return () => {
            clearInterval(monitorFloating);
          };

        } catch (error) {
          console.error('Failed to initialize ElevenLabs widget:', error);
        }
      };

      setupWidget();
    };

    // Initialize after a short delay to ensure container is in DOM
    const timeout = setTimeout(initializeWidget, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      id="voyager-widget-slot"
      ref={containerRef}
      className="hero-widget-container"
    />
  );
}

// TypeScript declaration for custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id': string;
      }, HTMLElement>;
    }
  }
}

