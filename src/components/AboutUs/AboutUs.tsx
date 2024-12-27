import { IconStarFilled } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Flex, Grid, Paper, Text, ThemeIcon, Title } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function AboutUs() {
  const { language } = useLanguage();
  const { titlePart1, titlePart2, description1, description2 } = translations[language].aboutUs;

  // Variantes de animación
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: i * 0.2, // Animación escalonada
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } },
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.1,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const paperVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <Container>
      <AnimatePresence mode="wait">
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={paperVariants}
        >
          <Paper withBorder radius="lg" shadow="md" p="xl">
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap="lg">
              {/* Sección de título */}
              <div style={{ textAlign: 'left', flex: 1 }}>
                <motion.div custom={0} initial="hidden" animate="visible" variants={titleVariants}>
                  <Title order={1} size={70} fw={800}>
                    {titlePart1}
                  </Title>
                </motion.div>
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={titleVariants}
                  whileHover="visible"
                >
                  <Title order={1} size={70} fw={800} c="#ff8a00">
                    {titlePart2}
                  </Title>
                </motion.div>
              </div>

              {/* Contenido descriptivo */}
              <div style={{ flex: 2 }}>
                <Grid>
                  <Grid.Col
                    span={{ base: 12, md: 2 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      variants={iconVariants}
                    >
                      <ThemeIcon radius="xl" size={56} color="white" variant="default">
                        <IconStarFilled size={32} color="black" />
                      </ThemeIcon>
                    </motion.div>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 10 }}>
                    <motion.div initial="hidden" animate="visible" variants={textVariants}>
                      <Flex direction="column" gap="md" style={{ flex: 1, textAlign: 'left' }}>
                        <Text
                          style={{ fontSize: '21px', lineHeight: '22px' }}
                          dangerouslySetInnerHTML={{ __html: description1 }}
                        />
                        <Text
                          style={{ fontSize: '21px', lineHeight: '22px' }}
                          dangerouslySetInnerHTML={{ __html: description2 }}
                        />
                      </Flex>
                    </motion.div>
                  </Grid.Col>
                </Grid>
              </div>
            </Flex>
          </Paper>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
