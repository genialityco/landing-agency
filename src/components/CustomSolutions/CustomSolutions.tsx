import { Container, Grid, Paper, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function CustomSolutions() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { language } = useLanguage();
  const { description, list, techTitle, techDescription } = translations[language].customSolutions;

  // Variantes para las palabras en techDescription con efecto palabra por palabra
  const techWordVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Comienza más pequeño y transparente
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1, 
        ease: 'easeOut',
      },
    }),
  };

  // Función para procesar techDescription con animación palabra por palabra
  const parseTechDescriptionWithAnimations = (text: string, keyPrefix: string) => {
    return text.split(' ').map((word, index) => (
      <motion.span
        key={`${keyPrefix}-word-${index}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={index}
        variants={techWordVariants}
        style={{
          display: 'inline-block',
          marginRight: '5px', // Espaciado entre palabras
        }}
      >
        {word}
      </motion.span>
    ));
  };

  // Función para procesar texto con HTML
  const parseWithHTML = (text: string, keyPrefix: string) => {
    const regex = /<strong>(.*?)<\/strong>/g;
    const elements = [];
    let lastIndex = 0;

    text.replace(regex, (match, content, offset) => {
      // Agregar texto antes del strong
      if (offset > lastIndex) {
        elements.push(
          <span key={`${keyPrefix}-text-${lastIndex}`}>
            {text.slice(lastIndex, offset)}
          </span>
        );
      }

      // Agregar texto dentro del strong
      elements.push(
        <strong key={`${keyPrefix}-strong-${offset}`}>{content}</strong>
      );

      lastIndex = offset + match.length;
      return match;
    });

    // Agregar texto restante después del último match
    if (lastIndex < text.length) {
      elements.push(
        <span key={`${keyPrefix}-text-${lastIndex}`}>
          {text.slice(lastIndex)}
        </span>
      );
    }

    return elements;
  };

  return (
    <Container size="lg" p="lg">
      {/* Descripción principal */}
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 5, lg: 5 }}>
          <Text ta="left" style={{ fontSize: '21px', lineHeight: '22px' }} c="dimmed" mb="xl">
            {description}
          </Text>
        </Grid.Col>
      </Grid>

      {/* Lista de elementos con animaciones */}
      <Text
        ta="left"
        style={{ fontSize: isMobile ? '20px' : '30px', lineHeight: '30px' }}
        mb="xl"
      >
        {list.map((item, index) => (
          <div key={index}>{parseWithHTML(item, `list-${index}`)}</div>
        ))}
      </Text>

      {/* Tecnologías usadas */}
      <Grid gutter="lg">
        <Grid.Col span={{ base: 12 }}>
          <Paper
            withBorder
            radius="lg"
            shadow="sm"
            p="lg"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <img src="/SVG/BUHO-PIXEL.svg" alt="Buho Pixel" width="56" />
            <Text style={{ fontSize: isMobile ? '15px' : '20px', lineHeight: '20px' }} c="dimmed">
              <strong>{techTitle}: </strong>
              {parseTechDescriptionWithAnimations(techDescription, 'tech-description')}
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
