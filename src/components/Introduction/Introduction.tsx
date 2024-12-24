import { Container, Grid, Text } from '@mantine/core';

export function Introduction() {
  return (
    <Container fluid>
      <Grid ml="xl" my="xl">
        <Grid.Col span={{ base: 12, sm: 12, md: 7, lg: 7 }}>
          <Text style={{ fontSize: '21px', lineHeight: '22px' }}>
            <strong>En GENIALITY</strong>, transformamos ideas en experiencias interactivas
            inolvidables. Nuestra combinación única de talento y tecnología nos convierte en el
            socio ideal para agencias, empresas y organizaciones de eventos que buscan soluciones
            impactantes.
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
