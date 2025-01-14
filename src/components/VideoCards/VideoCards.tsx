/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { Paper, Grid, Title, Container, ActionIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import { translations } from '@/translations';
import { useLanguage } from '@/context/LanguageContext';
import { IconX } from '@tabler/icons-react';

export function VideoCards() {
  const { language } = useLanguage();
  const [opened, setOpened] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const experiences = translations[language].videoCards.items;

  const handleCardClick = (videoUrl: React.SetStateAction<string>) => {
    setCurrentVideo(videoUrl);
    setOpened(true);
  };

  return (
    <Container size="xl" style={{ marginBlock: '80px' }}>
      <Grid gutter="lg">
        {experiences.map((experience, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
            <Paper
              withBorder
              radius="lg"
              shadow="sm"
              style={{
                textAlign: 'center',
                height: '100%',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
              onClick={() => handleCardClick(experience.videoUrl)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden', borderRadius: '12px' }}
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              </motion.div>
              {/* Botón de reproducción */}
              <div
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '50%',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  width="40px"
                  height="40px"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <Title order={4} ta="center" px="xs">
                {experience.title}
              </Title>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      {/* Modal para reproducir el video */}
      {opened && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '95%',
              height: '80%',
            }}
          >
            <iframe
              src={`${currentVideo}?autoplay=1`}
              width="100%"
              height="100%"
              style={{
                border: 'none',
                borderRadius: '12px',
              }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Experience Video"
            ></iframe>

            {/* Botón flotante */}
            <ActionIcon
              onClick={() => setOpened(false)}
              style={{
                position: 'absolute',
                top: '-50px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1100,
              }}
            >
              <IconX size={24} color="black" />
            </ActionIcon>
          </div>
        </div>
      )}
    </Container>
  );
}