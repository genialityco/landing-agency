import { Container } from "@mantine/core";

export function SliderLabs() {
  const sliderImage = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  return (
    <Container size="xl">
      <img src="/IMG/LABS.png" alt="labs" style={sliderImage} />
    </Container>
  );
}
