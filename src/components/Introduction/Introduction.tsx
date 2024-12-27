import React from 'react';
import { Container, Grid, Text } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { motion } from 'framer-motion';

export function Introduction() {
  const { language } = useLanguage();
  const { text } = translations[language].introduction;

  // Variantes de animación para el texto normal
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  // Variantes de animación para texto en negrita (con efecto de ola y neón)
  const strongVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    neon: {
      color: '#ff8a00', // Color neón
      textShadow: '0 0 5px #ff8a00, 0 0 10px #ff8a00, 0 0 20px #ff8a00',
      transition: {
        delay: 1, // Espera un poco antes de aplicar el efecto
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  // Procesar el texto para aplicar animaciones
  const parseTextWithAnimations = (text: string) => {
    const regex = /<strong>(.*?)<\/strong>/g;
    let lastIndex = 0;
    const elements: React.ReactNode[] = [];

    text.replace(regex, (match, content, offset) => {
      // Agregar texto antes del <strong>
      if (offset > lastIndex) {
        const beforeText = text.slice(lastIndex, offset);
        elements.push(
          <motion.span
            key={`text-${lastIndex}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={paragraphVariants}
          >
            <span dangerouslySetInnerHTML={{ __html: beforeText }} />
          </motion.span>
        );
      }

      // Agregar el contenido de <strong> con animación
      elements.push(
        <motion.strong
          key={`strong-${offset}`}
          initial="hidden"
          whileInView={["visible", "neon"]} // Aplica ambas animaciones
          viewport={{ once: false, amount: 0.5 }}
          variants={strongVariants}
        >
          {content}
        </motion.strong>
      );

      lastIndex = offset + match.length;
      return match;
    });

    // Agregar el texto restante después de la última etiqueta <strong>
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      elements.push(
        <motion.span
          key={`text-${lastIndex}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={paragraphVariants}
        >
          <span dangerouslySetInnerHTML={{ __html: remainingText }} />
        </motion.span>
      );
    }

    return elements;
  };

  return (
    <Container fluid>
      <Grid ml="xl" my="xl">
        <Grid.Col span={{ base: 12, sm: 12, md: 7, lg: 7 }}>
          <Text style={{ fontSize: '21px', lineHeight: '22px' }}>
            {parseTextWithAnimations(text)}
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
