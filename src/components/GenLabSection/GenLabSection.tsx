import { Button, Container, Flex, Text } from '@mantine/core';

export function GenLabSection() {
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
          <Text style={{ fontSize: '40px', lineHeight: '50px' }} c="gray">
            No tienes que <strong>esperar para tener tu experiencia,</strong> <br />
            tenemos unos ejemplos sencillos que <strong>puedes disfrutar de una vez.</strong>
          </Text>
          <Button
            fullWidth
            size="md"
            radius="md"
            color="orange"
            mt="lg"
            onClick={handleButtonClick}
          >
            Clic aquí para ir a la Cámara interactiva
          </Button>
        </div>
        <img
          src="/SVG/LOGOS_GEN.iality_web-08.svg"
          alt="GEN.LAB logo"
          width={200}
          height="auto"
          style={{ flexShrink: 0 }}
        />
      </Flex>
    </Container>
  );
}
