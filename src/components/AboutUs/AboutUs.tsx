import { IconStarFilled } from '@tabler/icons-react';
import { Container, Flex, Grid, Paper, Text, ThemeIcon, Title } from '@mantine/core';

export function AboutUs() {
  return (
    <Container>
      <Paper withBorder radius="lg" shadow="md" p="xl">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap="lg">
          {/* Sección de título */}
          <div style={{ textAlign: 'left', flex: 1 }}>
            <Title order={1} size={70} fw={800}>
              Quiénes
            </Title>
            <Title order={1} size={70} fw={800} c="#ff8a00">
              Somos
            </Title>
          </div>

          {/* Contenido descriptivo */}
          <div style={{ flex: 2 }}>
            <Grid>
              <Grid.Col
                span={{ base: 12, md: 2 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                {/* Icono decorativo */}
                <ThemeIcon radius="xl" size={56} color="white" variant="default">
                  <IconStarFilled size={32} color="black" />
                </ThemeIcon>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 10 }}>
                {/* Texto descriptivo */}
                <Flex direction="column" gap="md" style={{ flex: 1, textAlign: 'left' }}>
                  <Text style={{ fontSize: '21px', lineHeight: '22px' }}>
                    <strong>GEN.LAB</strong> es una agencia de comunicación interactiva, de creación
                    y desarrollo de tecnología interactiva, experiencias y software para eventos,
                    que se convierte en un aliado para potenciar los proyectos de agencias y event
                    planners, con tecnología y experiencia interactivas que enganchen y comuniquen
                    profundamente.
                  </Text>

                  <Text style={{ fontSize: '21px', lineHeight: '22px' }}>
                    Contamos con un equipo altamente calificado y experimentado que trabaja con
                    empresas y agencias de Estados Unidos, Inglaterra, Dubái y México. Hemos
                    trabajado en todo tipo de eventos (corporativos, sociales, culturales, híbridos)
                    con una fuerte experiencia en eventos corporativos como congresos, simposios,
                    ruedas de negocio, convenciones de ventas, con clientes del sector corporativo,
                    asociativo y gubernamental.
                  </Text>
                </Flex>
              </Grid.Col>
            </Grid>
          </div>
        </Flex>
      </Paper>
    </Container>
  );
}
