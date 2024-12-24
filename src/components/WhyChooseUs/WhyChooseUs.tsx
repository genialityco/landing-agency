import { IconCircleFilled } from '@tabler/icons-react';
import { Container, Grid, Paper, Text, ThemeIcon, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function WhyChooseUs() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Container size="lg" p="lg">
      <Title
        order={1}
        style={{
          fontSize: '50px',
          '@media (min-width: 768px)': {
            fontSize: '40px',
          },
          '@media (min-width: 1024px)': {
            fontSize: '50px',
          },
        }}
        ta="left"
        mb="md"
      >
        ¿Por Qué <span style={{ color: '#ff8a00' }}>Elegirnos</span>?
      </Title>

      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 5, lg: 5 }}>
          <Text
            ta="left"
            style={{
              fontSize: '21px',
              lineHeight: '20px',
              '@media (min-width: 768px)': {
                fontSize: '18px',
                lineHeight: '22px',
              },
              '@media (min-width: 1024px)': {
                fontSize: '20px',
                lineHeight: '24px',
              },
            }}
            c="dimmed"
            mb="xl"
          >
            Por un lado tenemos soluciones de tecnología listas que apalancan las ideas creativas y
            eventos únicos como:
          </Text>
        </Grid.Col>
      </Grid>

      <Grid gutter="lg">
        {[
          {
            title: 'Calidad y Experiencia:',
            text: 'Expertos en tecnologías avanzadas y creación de experiencias interactivas.',
          },
          {
            title: 'Equipo Profesional:',
            text: 'Un equipo multidisciplinario de Ingenieros, desarrolladores, diseñadores, comunicadores y gestores de proyectos.',
          },
          {
            title: 'Enfoque Global:',
            text: 'Experiencia trabajando con agencias internacionales en mercados exigentes.',
          },
          {
            title: 'Costos Competitivos:',
            text: 'Tarifas atractivas gracias a costos operativos eficientes.',
          },
        ].map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
            <Paper
              withBorder
              radius="lg"
              shadow="sm"
              p="md"
              style={{
                backgroundColor: '#333',
                color: 'white',
                textAlign: 'left',
                height: isMobile ? '200px':'270px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                overflow: 'hidden',
              }}
            >
              <ThemeIcon radius="xl" size="md" color="#ff8a00">
                <IconCircleFilled color="#ff8a00" />
              </ThemeIcon>
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
                    '@media (min-width: 768px)': {
                      fontSize: '24px',
                    },
                    '@media (min-width: 1024px)': {
                      fontSize: '30px',
                    },
                  }}
                  c="#ff8a00"
                >
                  {item.title}
                </Title>
                <Text
                  style={{
                    fontSize: '18px',
                    lineHeight: '18px',
                    '@media (min-width: 768px)': {
                      fontSize: '16px',
                      lineHeight: '20px',
                    },
                    '@media (min-width: 1024px)': {
                      fontSize: '18px',
                      lineHeight: '22px',
                    },
                  }}
                >
                  {item.text}
                </Text>
              </div>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
