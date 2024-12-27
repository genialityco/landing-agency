import React, { useState } from 'react';
import { Image, Modal, Title } from '@mantine/core';

export function ImageGallery() {
  const images = [
    { src: '/IMG/PROYECTO_01.jpg', title: 'Mixed Reality Campaing' },
    { src: '/IMG/PROYECTO_02.jpg', title: 'Augmented Reality Filters' },
    { src: '/IMG/PROYECTO_03.jpg', title: 'Virtual Events' },
    { src: '/IMG/PROYECTO_04.jpg', title: 'Ail News Portal' },
    { src: '/IMG/PROYECTO_05.jpg', title: 'Mobile Event App (Android - iOS)' },
  ];

  const [opened, setOpened] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; title: string } | null>(null);

  const handleImageClick = (image: { src: string; title: string }) => {
    setCurrentImage(image);
    setOpened(true);
  };

  return (
    <>
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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: '50vh',
            backgroundColor: 'black',
            padding: '20px',
          }}
        >
          {currentImage && (
            <>
              <Title
                order={1}
                style={{
                  color: 'white',
                  marginBottom: '20px',
                }}
                ta="center"
              >
                {currentImage.title}
              </Title>
              <img
                src={currentImage.src}
                alt={currentImage.title}
                style={{
                  maxHeight: '80%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </>
          )}
        </div>
      </Modal>

      {/* Galería de imágenes vertical con títulos */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleImageClick(image);
              }
            }}
            role="button"
            tabIndex={0}
            style={{
              cursor: 'pointer',
              outline: 'none',
              textAlign: 'center',
            }}
          >
            <Title order={1} ta="left" mb="md">
              {image.title}
            </Title>
            <Image
              src={image.src}
              alt={image.title}
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
