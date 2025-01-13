import { motion } from 'framer-motion';
import { Button, Container, Flex, Text } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { useMediaQuery } from '@mantine/hooks';

export function GenLabSection() {
  const { language } = useLanguage();
  const { text, button } = translations[language].genLabSection;
  const isMobile = useMediaQuery('(max-width: 768px)');

  const logoSrc =
    language === 'en' ? '/IMG/LOGOS_GEN.iality_web-08-en.svg' : '/SVG/LOGOS_GEN.iality_web-08.svg';

  const handleButtonClick = () => {
    window.open('https://interactive-cam.netlify.app/', '_blank', 'noopener,noreferrer');
  };

  // Variants for progressive animation
  const letterVariants = {
    initial: { scaleY: 1 },
    animate: {
      scaleY: [1, 1.3, 1],
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  // Container animation to stagger letters
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Custom rendering for <strong> tags with progressive animation
  const renderAnimatedText = (htmlString: string) => {
    const parts: string[] = htmlString.split(/(<strong>.*?<\/strong>)/g);

    return parts.map((part: string, index: number) => {
      if (part.startsWith('<strong>')) {
        // Extract content inside <strong> and split into letters
        const letters: string[] = part.replace(/<\/?strong>/g, '').split('');
        return (
          <motion.span
            key={index}
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            style={{ display: 'inline-flex', flexWrap: 'wrap' }}
          >
            {letters.map((char: string, i: number) => (
              <motion.strong
                key={i}
                style={{
                  display: 'inline-block',
                  transformOrigin: 'center',
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                }}
                variants={letterVariants}
              >
                {char}
              </motion.strong>
            ))}
          </motion.span>
        );
      }
      // Static rendering for non-<strong> parts
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  return (
    <Container size="xl" my="xl">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'center' }}
        justify="space-between"
        gap="lg"
      >
        <div style={{ flex: 1, textAlign: 'left', maxWidth: '650px' }}>
          <Text style={{ fontSize: '40px', lineHeight: '40px' }} c="gray">
            {renderAnimatedText(text)}
          </Text>
          <Button
            fullWidth
            size={isMobile ? 'xs' : 'md'}
            radius="md"
            color="orange"
            mt="lg"
            onClick={handleButtonClick}
          >
            {button}
          </Button>
        </div>
        <img src={logoSrc} alt="GEN.LAB logo" width={200} height="auto" style={{ flexShrink: 0 }} />
      </Flex>
    </Container>
  );
}
