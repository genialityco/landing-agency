import { useMediaQuery } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';

export function SliderAsk() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // Actualiza el ancho cuando la ventana cambie de tamaño
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: "40px" }}>
      <iframe
        src="https://player.vimeo.com/video/1041991374?autoplay=1&loop=1&muted=1&controls=0"
        width={windowWidth} 
        height={isMobile ? "300" : "600"}
        style={{
          border: 'none',
          display: 'block',
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Slider Video"
      />
    </div>
  );
}
