/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { Modal, Paper, Grid, Title, Container } from '@mantine/core';
import { motion } from 'framer-motion';
import { translations } from '@/translations';
import { useLanguage } from '@/context/LanguageContext';

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
              <Title order={4}>
                {experience.title}
              </Title>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      {/* Modal para reproducir el video */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="xs"
        centered
      >
        <iframe
          src={`${currentVideo}?autoplay=1`}
          width="100%"
          height="500px"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Experience Video"
        ></iframe>
      </Modal>
    </Container>
  );
}
