import React from 'react';
import { Container, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function WorkProcess() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { language } = useLanguage();
  const { title, subtitle, steps, note } = translations[language].workProcess;

  // Variantes de animación esenciales
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <Container size="xl">
      {/* Título principal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
      >
        <Title
          order={2}
          style={{
            fontSize: '50px',
            lineHeight: 1,
          }}
          ta="left"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </motion.div>

      {/* Subtítulo */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
      >
        <Text
          ta="left"
          style={{
            fontSize: '40px',
            lineHeight: '35px',
          }}
          mb="xl"
        >
          {subtitle}
        </Text>
      </motion.div>

      {/* Etapas del proceso */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
      >
        {steps.map((item, index) => (
          <Text
            key={index}
            ta="left"
            style={{
              fontSize: isMobile ? '20px' : '30px',
              lineHeight: '20px',
            }}
            mb="sm"
          >
            <strong>{item.title}</strong> {item.description}
          </Text>
        ))}
      </motion.div>

      {/* Nota adicional */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
      >
        <Text
          ta="left"
          style={{
            fontSize: '21px',
            lineHeight: '21px',
          }}
          c="dimmed"
          mt="lg"
        >
          {note}
        </Text>
      </motion.div>
    </Container>
  );
}
