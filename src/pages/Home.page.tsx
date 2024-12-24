import { Divider } from '@mantine/core';
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
  return (
    <div>
      <Header />
      <Divider m="md" size="md" style={{ border: '1px solid black' }} />
      <Introduction />
      <AboutUs />
      <BusinessLines />
      <Divider m="md" size="md" style={{ border: '1px solid black' }} />
      <CustomSolutions />
      <SliderAsk />
      <WhyChooseUs />
      <Divider m="md" size="md" style={{ border: '1px solid black' }} />
      <WorkProcess />
      <Divider m="md" size="md" style={{ border: '1px solid black' }} />
      <SliderLabs />
      <ImageGallery />
      <GenLabSection />
    </div>
  );
}
