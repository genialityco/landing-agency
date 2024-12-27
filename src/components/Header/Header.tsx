import { Container, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLanguage } from '@/context/LanguageContext';
import classes from './Header.module.css';

export function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { language } = useLanguage();

  // Selecciona la imagen según las condiciones
  let sliderImage = '/IMG/SLIDER-BUHO-COMPLETE.png'; 
  if (language === 'en') {
    sliderImage = isMobile ? '/IMG/SALIDER_MOBILE.jpg' : '/IMG/SALIDER_DESKYOP.jpg';
  }

  return (
    <Container fluid>
      {/* Barra superior con logotipos */}
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        my="xs"
        className={classes.topBar}
      >
        <img
          src="/SVG/LOGOS_GEN.iality_web-02.svg"
          alt="gen-iality"
          className={classes.logoTop}
        />
        <img
          src="/SVG/BUHO-OUTLINE.svg"
          alt="logo-buho"
          className={classes.logoBuho}
        />
      </Flex>

      {/* Contenedor principal */}
      <div className={classes.sliderContainer}>
        {/* Imagen de fondo con animación */}
        <img
          src={sliderImage}
          alt="slider"
          className={classes.sliderImage}
        />
      </div>
    </Container>
  );
}
