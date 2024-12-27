import { IconCircleFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Container, Grid, Paper, Text, ThemeIcon, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function WhyChooseUs() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { language } = useLanguage();
  const { title, description, items } = translations[language].whyChooseUs;

  // Variantes de animación
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { rotate: [0, 10, -10, 0], transition: { duration: 0.6 } },
  };

  return (
    <Container size="xl" mt="xl">
      <Title
        order={1}
        style={{
          fontSize: '50px',
          lineHeight: 1,
        }}
        ta="left"
        mb="md"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 5, lg: 5 }}>
          <Text
            ta="left"
            style={{
              fontSize: '21px',
              lineHeight: '20px',
            }}
            c="dimmed"
            mb="xl"
          >
            {description}
          </Text>
        </Grid.Col>
      </Grid>

      <Grid gutter="lg">
        {items.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              variants={itemVariants}
            >
              <Paper
                withBorder
                radius="lg"
                shadow="sm"
                p="md"
                style={{
                  backgroundColor: '#333',
                  color: 'white',
                  textAlign: 'left',
                  height: isMobile ? '200px' : '270px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  variants={iconVariants}
                >
                  <ThemeIcon radius="xl" size="md" color="#ff8a00">
                    <IconCircleFilled color="#ff8a00" />
                  </ThemeIcon>
                </motion.div>
                <div
                  style={{
                    marginTop: '8px', // Espacio entre el ícono y el contenido
                    flex: '1 1 auto',
                  }}
                >
                  <Title
                    order={4}
                    style={{
                      fontSize: '25px',
                    }}
                    c="#ff8a00"
                  >
                    {item.title}
                  </Title>
                  <Text
                    style={{
                      fontSize: '18px',
                      lineHeight: '18px',
                    }}
                  >
                    {item.text}
                  </Text>
                </div>
              </Paper>
            </motion.div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
