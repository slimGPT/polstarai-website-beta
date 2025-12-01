import { useEffect } from "react";

export default function ElevenLabsWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    document.body.appendChild(script);

    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "agent_6801kavbe1dgex7sxd399rq92adk");
    widget.style.position = "fixed";
    widget.style.bottom = "24px";
    widget.style.right = "24px";
    widget.style.zIndex = "10000";
    widget.style.transform = "translateZ(0)";
    
    // Wait for widget to render, then re-enable pointer events on the button
    const enableWidgetButton = setInterval(() => {
      const button = widget.shadowRoot?.querySelector('button');
      if (button) {
        clearInterval(enableWidgetButton);
        button.style.setProperty('pointer-events', 'auto', 'important');
      }
    }, 100);

    document.body.appendChild(widget);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      if (widget.parentNode) {
        document.body.removeChild(widget);
      }
    };
  }, []);

  return null;
}
