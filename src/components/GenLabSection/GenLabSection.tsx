import { Button, Container, Flex, Text } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export function GenLabSection() {
  const { language } = useLanguage();
  const { text, button } = translations[language].genLabSection;

  const logoSrc =
  language === 'en'
    ? '/IMG/LOGOS_GEN.iality_web-08-en.svg'
    : '/SVG/LOGOS_GEN.iality_web-08.svg';

  const handleButtonClick = () => {
    window.open('https://interactive-cam.netlify.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <Container size="lg" px="lg" py="lg">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'center' }}
        justify="space-around"
        gap="lg"
      >
        <div style={{ flex: 1, textAlign: 'left', maxWidth: '600px' }}>
          <Text
            style={{ fontSize: '40px', lineHeight: '50px' }}
            c="gray"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <Button
            fullWidth
            size="md"
            radius="md"
            color="orange"
            mt="lg"
            onClick={handleButtonClick}
          >
            {button}
          </Button>
        </div>
        <img
          src={logoSrc}
          alt="GEN.LAB logo"
          width={200}
          height="auto"
          style={{ flexShrink: 0 }}
        />
      </Flex>
    </Container>
  );
}
