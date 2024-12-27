import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Divider } from '@mantine/core';
import { AboutUs } from '@/components/AboutUs/AboutUs';
import { BusinessLines } from '@/components/BusinessLines/BusinessLines';
import { CustomSolutions } from '@/components/CustomSolutions/CustomSolutions';
import { GenLabSection } from '@/components/GenLabSection/GenLabSection';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { Introduction } from '@/components/Introduction/Introduction';
import { SliderAsk } from '@/components/SliderAsk/SliderAsk';
import { SliderLabs } from '@/components/SliderLabs/SliderLabs';
import { WhyChooseUs } from '@/components/WhyChooseUs/WhyChooseUs';
import { WorkProcess } from '@/components/WorkProcess/WorkProcess';
import { Header } from '../components/Header/Header';

export function HomePage() {
  // Hooks para observar cada sección
  const [refIntro, inViewIntro] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refAbout, inViewAbout] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refBusiness, inViewBusiness] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refSolutions, inViewSolutions] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refGallery, inViewGallery] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refSliderAsk, inViewSliderAsk] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refWhyChooseUs, inViewWhyChooseUs] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refWorkProcess, inViewWorkProcess] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refSliderLabs, inViewSliderLabs] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refGenLabSection, inViewGenLabSection] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <Container size="xxl">
      <Header />
      <Divider m="xl" size="md" style={{ border: '1px solid black' }} />

      {/* Sección de Introducción */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refIntro}
          initial={{ opacity: 0, y: 10 }}
          animate={inViewIntro ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <Introduction />
        </motion.div>
      </AnimatePresence>

      {/* Sección About Us */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refAbout}
          initial={{ opacity: 0, x: -10 }}
          animate={inViewAbout ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
        >
          <AboutUs />
        </motion.div>
      </AnimatePresence>

      <Divider m="xl" />

      {/* Sección Business Lines */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refBusiness}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inViewBusiness ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <BusinessLines />
        </motion.div>
      </AnimatePresence>

      <Divider m="xl" size="md" style={{ border: '1px solid black' }} />

      {/* Sección Custom Solutions */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refSolutions}
          initial={{ opacity: 0, y: 10 }}
          animate={inViewSolutions ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <CustomSolutions />
        </motion.div>
      </AnimatePresence>

      {/* Galería de imágenes */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refGallery}
          initial={{ opacity: 0, x: -10 }}
          animate={inViewGallery ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ duration: 0.5 }}
        >
          <ImageGallery />
        </motion.div>
      </AnimatePresence>

      {/* Slider Ask */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refSliderAsk}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inViewSliderAsk ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <SliderAsk />
        </motion.div>
      </AnimatePresence>

      {/* Why Choose Us */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refWhyChooseUs}
          initial={{ opacity: 0, y: 10 }}
          animate={inViewWhyChooseUs ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <WhyChooseUs />
        </motion.div>
      </AnimatePresence>

      <Divider m="xl" size="md" style={{ border: '1px solid black' }} />

      {/* Work Process */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refWorkProcess}
          initial={{ opacity: 0, x: -10 }}
          animate={inViewWorkProcess ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ duration: 0.5 }}
        >
          <WorkProcess />
        </motion.div>
      </AnimatePresence>

      <Divider m="xl" size="md" style={{ border: '1px solid black' }} />

      {/* Slider Labs */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refSliderLabs}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inViewSliderLabs ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <SliderLabs />
        </motion.div>
      </AnimatePresence>

      {/* GenLab Section */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={refGenLabSection}
          initial={{ opacity: 0, y: 10 }}
          animate={inViewGenLabSection ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <GenLabSection />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
