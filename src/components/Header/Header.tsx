import { Container, Flex } from '@mantine/core';
import classes from './Header.module.css';

export function Header() {
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
          src="/IMG/SLIDER-BUHO-COMPLETE.png"
          alt="slider"
          className={classes.sliderImage}
        />
      </div>
    </Container>
  );
}
