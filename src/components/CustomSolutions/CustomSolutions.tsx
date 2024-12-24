import { Container, Grid, Paper, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function CustomSolutions() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container size="lg" p="lg">
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 5, lg: 5 }}>
          <Text ta="left" style={{ fontSize: '21px', lineHeight: '22px' }} c="dimmed" mb="xl">
            Por otro lado desarrollamos soluciones offshore/nearshore personalizadas con los más
            altos estándares de calidad. Desarrollamos soluciones a medida que abarcan:
          </Text>
        </Grid.Col>
      </Grid>

      <Text ta="left" style={{ fontSize: isMobile ? '20px' : '30px', lineHeight: '30px' }} mb="xl">
        Mini Juegos <strong>Web y Consolas</strong>
        <br />
        Juegos <strong>Interactivos y Aplicaciones</strong> para Tótems
        <br />
        <strong>Landings y Experiencias</strong> Web
        <br />
        Mapping <strong>Interactivo</strong>
        <br />
        <strong>Aplicaciones</strong> para Tiendas y <strong>Experiencias</strong> Interactivas
        <br />
        Experiencias de <strong>Realidad Virtual (VR), Extendida (XR) y Aumentada (AR)</strong>
        <br />
        Diseño <strong>Gráfico y Producción</strong> Audiovisual
        <br />
        Desarrollo de <strong>Software Personalizado</strong>
        <br />
        Desarrollo de <strong>Software a la Medida</strong>
      </Text>

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
              Tecnologías que Usamos Desarrollo: Unity, Unreal Engine, HTML, CSS, React, React
              Native, NodeJS, Python, PHP. Modelado 3D: Blender, Autodesk Maya. Interactividad:
              Motionad, Catalyst, liveStore. Simulación y AI: NVIDIA Omniverse, TensorFlow, Vertex
              AI, Hugging Face, PyTorch.
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
