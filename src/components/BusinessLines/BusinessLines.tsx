import { Container, Grid, Paper, Text, Title } from '@mantine/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function BusinessLines() {
  const { language } = useLanguage();
  const { title, description, items } = translations[language].businessLines;

  // Variantes para el efecto dynamics
  const dynamicTextVariants = {
    hidden: {
      backgroundSize: '0% 100%', // Fondo no visible inicialmente
      opacity: 0,
    },
    visible: {
      backgroundSize: '100% 100%', // Fondo cubre todo el texto mientras aparece
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Container size="lg" p="lg">
      {/* Título principal */}
      <Title order={1} size={50} ta="left" mb="md">
        {title.split('<span>').map((part, index) =>
          part.includes('</span>') ? (
            <motion.span
              key={index}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={dynamicTextVariants}
              style={{
                display: 'inline-block',
                backgroundImage: 'linear-gradient(90deg, #ff8a00, #ff8a00)',
                backgroundSize: '0% 100%',
                backgroundRepeat: 'no-repeat',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {part.replace('</span>', '')}
            </motion.span>
          ) : (
            part
          )
        )}
      </Title>

      {/* Descripción */}
      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, sm: 6, md: 5, lg: 5 }}>
          <Text ta="left" style={{ fontSize: '21px', lineHeight: '22px' }} c="dimmed" mb="xl">
            {description}
          </Text>
        </Grid.Col>
      </Grid>

      {/* Tarjetas */}
      <Grid gutter="lg">
        {items.map((item, index) => {
          const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });
          const controls = useAnimation();

          if (inView) {
            controls.start('visible');
          } else {
            controls.start('hidden');
          }

          return (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <Paper
                withBorder
                radius="lg"
                shadow="sm"
                p="md"
                style={{ textAlign: 'left', height: '100%' }}
              >
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={dynamicTextVariants}
                  style={{
                    display: 'inline-block',
                    backgroundImage: 'linear-gradient(90deg, #ff8a00, #ff8a00)',
                    backgroundSize: '0% 100%',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <Title order={4} size={30} c="black">
                    {item.title1}
                  </Title>
                </motion.div>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={dynamicTextVariants}
                  style={{
                    display: 'inline-block',
                    backgroundImage: 'linear-gradient(90deg, #ff8a00, #ff8a00)',
                    backgroundSize: '0% 100%',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <Title order={4} size={30} c="#ff8a00">
                    {item.title2}
                  </Title>
                </motion.div>
                {item.description && (
                  <Text style={{ fontSize: '21px', lineHeight: '22px' }} c="dimmed">
                    {item.description}
                  </Text>
                )}
              </Paper>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}
