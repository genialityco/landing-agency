import React from 'react';
import { Container, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function WorkProcess() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { language } = useLanguage();
  const { title, subtitle, steps, note } = translations[language].workProcess;

  return (
    <Container size="lg" px="lg">
      {/* Título principal */}
      <Title
        order={2}
        style={{
          fontSize: '50px',
        }}
        ta="left"
        mb="sm"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {/* Subtítulo */}
      <Text
        ta="left"
        style={{
          fontSize: '40px',
          lineHeight: '35px',
        }}
        mb="xl"
      >
        {subtitle}
      </Text>

      {/* Etapas del proceso */}
      {steps.map((item, index) => (
        <Text
          key={index}
          ta="left"
          style={{
            fontSize: isMobile ? '20px' : '30px',
            lineHeight: '30px',
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
        {note}
      </Text>
    </Container>
  );
}
