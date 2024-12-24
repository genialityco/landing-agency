import { Container, Grid, Text } from '@mantine/core';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Introduction.module.css';



export function Introduction() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Container fluid>
      <Grid ml="xl" my="xl" ref={ref}>
        <Grid.Col span={{ base: 12, sm: 12, md: 7, lg: 7 }}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <Text style={{ fontSize: '21px', lineHeight: '22px' }}>
              <strong style={{fontSize: '23px' }}>
                En GENIALITY
              </strong>
              , transformamos ideas en experiencias interactivas inolvidables.
              Nuestra combinación única de talento y tecnología nos convierte en el
              socio ideal para agencias, empresas y organizaciones de eventos que buscan soluciones{' '}
              <strong>impactantes</strong>.
            </Text>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
