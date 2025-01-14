import { useMediaQuery } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';

export function SliderAsk() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Determina el ID del video según el idioma del navegador
  const getVideoId = () => {
    const language = navigator.language || navigator.languages[0];
    return language.startsWith('en') ? '1046518921' : '1041991374';
  };

  const [videoId] = useState(getVideoId());

  useEffect(() => {
    // Actualiza el ancho cuando la ventana cambie de tamaño
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: "40px" }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1`}
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
