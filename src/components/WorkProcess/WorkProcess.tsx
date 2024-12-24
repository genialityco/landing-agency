import React from 'react';
import { Container, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function WorkProcess() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Container size="lg" px="lg">
      {/* Título principal */}
      <Title
        order={2}
        style={{
          fontSize: '50px',
          '@media (min-width: 768px)': {
            fontSize: '28px',
          },
          '@media (min-width: 1024px)': {
            fontSize: '32px',
          },
        }}
        ta="left"
        mb="sm"
      >
        <span style={{ color: '#ff8a00' }}>Nuestro Proceso de Trabajo</span>
        {/* Subtítulo */}
        <Text
          ta="left"
          style={{
            fontSize: '40px',
            lineHeight: '35px',
            '@media (min-width: 768px)': {
              fontSize: '20px',
              lineHeight: '30px',
            },
            '@media (min-width: 1024px)': {
              fontSize: '30px',
              lineHeight: '30px',
            },
          }}
          mb="xl"
        >
          Participamos en cualquier etapa del proyecto:
        </Text>
      </Title>

      {/* Etapas del proceso */}
      {[
        { title: 'BRIEF:', description: 'Definición y conceptualización.' },
        { title: 'PROPUESTA CREATIVA:', description: 'Ideas y conceptos innovadores.' },
        { title: 'GESTIÓN DE PROYECTOS:', description: 'Organización y seguimiento detallado.' },
        {
          title: 'DESARROLLO Y PRE-PRODUCCIÓN:',
          description: 'Ejecución técnica con estándares de excelencia.',
        },
        { title: 'PRODUCCIÓN', description: '' },
        { title: 'DATA AND ANALYTICS', description: '' },
      ].map((item, index) => (
        <Text
          key={index}
          ta="left"
          style={{
            fontSize: isMobile ? '20px' : '30px',
            lineHeight: '25px',
          }}
          mb="sm"
        >
          <strong>{item.title}</strong> {item.description}
        </Text>
      ))}

      {/* Nota adicional */}
      <Text
        ta="left"
        style={{
          fontSize: '21px',
          lineHeight: '21px',
        }}
        c="dimmed"
        mt="lg"
      >
        Nuestro equipo tiene experiencia y fluidez con equipos que se comuniquen en: Inglés,
        Español, Japonés. Con certificaciones de idiomas en nivel C2.
      </Text>
    </Container>
  );
}
