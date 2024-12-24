import React, { useState } from 'react';
import { Image, Modal } from '@mantine/core';

export function ImageGallery() {
  const images = [
    '/IMG/PROYECTO_01.jpg',
    '/IMG/PROYECTO_02.jpg',
    '/IMG/PROYECTO_03.jpg',
    '/IMG/PROYECTO_04.jpg',
    '/IMG/PROYECTO_05.jpg',
  ];

  const [opened, setOpened] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (src: string) => {
    setCurrentImage(src);
    setOpened(true);
  };

  return (
    <>
      {/* Modal para mostrar la imagen ampliada */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="auto"
        withCloseButton={false}
        centered
        styles={{
          body: { padding: 0 },
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
            height: '40vh',
            backgroundColor: 'black',
          }}
        >
          <img
            src={currentImage}
            alt="Imagen ampliada"
            style={{
              height: '100%',
              width: 'auto',
            }}
          />
        </div>
      </Modal>

      {/* Galería de imágenes */}
      <div
        style={{
          display: 'grid',

        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(src)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleImageClick(src);
              }
            }}
            role="button"
            tabIndex={0}
            style={{
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <Image
              src={src}
              alt={`Proyecto ${index + 1}`}
              width="100%"
              fit="contain"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
