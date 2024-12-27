import { Container, Grid, Paper, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function CustomSolutions() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { language } = useLanguage();
  const { description, list, techTitle, techDescription } = translations[language].customSolutions;

  return (
    <Container size="lg" p="lg">
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 5, lg: 5 }}>
          <Text ta="left" style={{ fontSize: '21px', lineHeight: '22px' }} c="dimmed" mb="xl">
            {description}
          </Text>
        </Grid.Col>
      </Grid>

      <Text
        ta="left"
        style={{ fontSize: isMobile ? '20px' : '30px', lineHeight: '30px' }}
        mb="xl"
      >
        {list.map((item, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
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
              <strong>{techTitle}: </strong>
              {techDescription}
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
