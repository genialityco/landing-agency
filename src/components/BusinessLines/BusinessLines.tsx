import { Container, Grid, Paper, Text, Title } from '@mantine/core';

export function BusinessLines() {
  return (
    <Container size="lg" p="lg">
      <Title order={1} size={50} ta="left" mb="md">
        Contamos con <span style={{ color: '#ff8a00' }}>dos líneas de negocio.</span>
      </Title>
      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, sm: 6, md: 5, lg: 5 }}>
          <Text ta="left" style={{ fontSize: '21px', lineHeight: '22px' }} c="dimmed" mb="xl">
            Por un lado tenemos soluciones de tecnología listas que apalancan las ideas creativas y
            eventos únicos como:
          </Text>
        </Grid.Col>
      </Grid>

      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Paper
            withBorder
            radius="lg"
            shadow="sm"
            p="md"
            style={{ textAlign: 'left', height: '100%'}}
          >
            <Title order={4} size={30} c="black">
              Experiencias
            </Title>
            <Title order={4} size={30} c="#ff8a00">
              Interactivas Presenciales
            </Title>
            <Text style={{ fontSize: '21px', lineHeight: '22px' }} c="dimmed">
              (con sensores, actuadores, detección de movimientos con cámara).
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Paper
            withBorder
            radius="lg"
            shadow="sm"
            p="md"
            style={{ textAlign: 'left', height: '100%' }}
          >
            <Title order={4} size={30} c="black">
              Experiencias
            </Title>
            <Title order={4} size={30} c="#ff8a00">
              de interacción con IA.
            </Title>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Paper
            withBorder
            radius="lg"
            shadow="sm"
            p="md"
            style={{ textAlign: 'left', height: '100%' }}
          >
            <Title order={4} size={30} c="black">
              Plataforma para
            </Title>
            <Title order={4} size={30} c="#ff8a00">
              comprar Inscripciones para congresos
            </Title>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Paper
            withBorder
            radius="lg"
            shadow="sm"
            p="md"
            style={{ textAlign: 'left', height: '100%' }}
          >
            <Title order={4} size={30} c="black">
              Plataforma de
            </Title>
            <Title order={4} size={30} c="#ff8a00">
              ingreso y permanencia usando (RFID)
            </Title>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Paper
            withBorder
            radius="lg"
            shadow="sm"
            p="md"
            style={{ textAlign: 'left', height: '100%' }}
          >
            <Title order={4} size={30} c="black">
              Auto Generador
            </Title>
            <Title order={4} size={30} c="#ff8a00">
              de certificados con Landing
            </Title>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
