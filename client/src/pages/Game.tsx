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
    // Focus the iframe when the game loads to ensure keyboard controls work immediately
    const focusIframe = () => {
      if (iframeRef.current) {
        iframeRef.current.focus();
      }
    };

    // Set up interval to keep focus on game (optional, but helps if user clicks away)
    const focusInterval = setInterval(() => {
      if (document.activeElement !== iframeRef.current && iframeRef.current) {
        // Only auto-focus if we want to be aggressive, but for now let's just do it on load
        // and maybe on click
      }
    }, 1000);

    return () => clearInterval(focusInterval);
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
        src="/index.html"
        title="3D Space Shooter"
        className="w-full h-full border-none block"
        onLoad={handleLoad}
        allow="autoplay; fullscreen; keyboard-map"
      />
    </div>
  );
}
