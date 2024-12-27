import { IconCircleFilled } from '@tabler/icons-react';
import { Container, Grid, Paper, Text, ThemeIcon, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function WhyChooseUs() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { language } = useLanguage();
  const { title, description, items } = translations[language].whyChooseUs;

  return (
    <Container size="lg" p="lg">
      <Title
        order={1}
        style={{
          fontSize: '50px',
        }}
        ta="left"
        mb="md"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 5, lg: 5 }}>
          <Text
            ta="left"
            style={{
              fontSize: '21px',
              lineHeight: '20px',
            }}
            c="dimmed"
            mb="xl"
          >
            {description}
          </Text>
        </Grid.Col>
      </Grid>

      <Grid gutter="lg">
        {items.map((item, index) => (
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
                height: isMobile ? '200px' : '270px',
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
                  }}
                  c="#ff8a00"
                >
                  {item.title}
                </Title>
                <Text
                  style={{
                    fontSize: '18px',
                    lineHeight: '18px',
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
