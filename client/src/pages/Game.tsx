import { useEffect, useRef, useState } from "react";

/**
 * Game Component
 * 
 * Embeds the 3D Space Shooter game using an iframe to ensure isolation and proper script execution.
 * The game is served from the public directory (index.html).
 */
export default function Game() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Focus iframe on click to ensure keyboard events are captured
    const handleClick = () => {
      if (iframeRef.current) {
        iframeRef.current.focus();
      }
    };

    window.addEventListener('click', handleClick);
    
    // Initial focus attempt with error suppression
    const timer = setTimeout(() => {
      if (iframeRef.current && document.activeElement !== iframeRef.current) {
        try {
          // Check if document already has focus to avoid error
          if (!document.activeElement || document.activeElement === document.body) {
            iframeRef.current.focus();
          }
        } catch (e) {
          // Ignore autofocus errors
        }
      }
    }, 1000);

    return () => {
      window.removeEventListener('click', handleClick);
      clearTimeout(timer);
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    if (iframeRef.current) {
      iframeRef.current.focus();
      // Try to access the iframe content to remove any potential scrollbars if needed
      // though CSS should handle it.
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative">
      <h1 className="sr-only">STELLAR ASSAULT - 3D Space Shooter</h1>
      <h2 className="sr-only">Intense arcade space combat game with waves of enemies and epic boss battles</h2>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10 text-green-500 font-mono">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            <p>INITIALIZING SYSTEMS...</p>
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src="/game.html"
        title="3D Space Shooter"
        className="w-full h-full border-none block"
        onLoad={handleLoad}
        allow="autoplay; fullscreen; keyboard-map"
      />
    </div>
  );
}
