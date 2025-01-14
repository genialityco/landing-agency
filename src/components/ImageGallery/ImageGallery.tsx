import { useState } from 'react';
import { Container, Image, Modal, Title } from '@mantine/core';
import ManualCarousel from '../ManualCarousel ';

export function ImageGallery() {
  const projects = [
    {
      title: 'Mixed Reality Campaing',
      mainImage: '/IMG/PROYECTO_01.jpg',
      images: [
        '/IMG/EL-ESPECTADOR/CARRUSEL_EL-ESPACTADOR_01.png',
        '/IMG/EL-ESPECTADOR/CARRUSEL_EL-ESPACTADOR_02.png',
        '/IMG/EL-ESPECTADOR/CARRUSEL_EL-ESPACTADOR_03.png',
        '/IMG/EL-ESPECTADOR/CARRUSEL_EL-ESPACTADOR_04.png',
        '/IMG/EL-ESPECTADOR/CARRUSEL_EL-ESPACTADOR_05.png',
        '/IMG/EL-ESPECTADOR/CARRUSEL_EL-ESPACTADOR_06.png',
        '/IMG/EL-ESPECTADOR/CARRUSEL_EL-ESPACTADOR_07.png',
      ],
    },
    {
      title: 'Augmented Reality Filters',
      mainImage: '/IMG/PROYECTO_02.jpg',
      images: [
        '/IMG/CARACOL/CARRUSEL_CARACOL_01.png',
        '/IMG/CARACOL/CARRUSEL_CARACOL_02.png',
        '/IMG/CARACOL/CARRUSEL_CARACOL_03.png',
        '/IMG/CARACOL/CARRUSEL_CARACOL_04.png',
        '/IMG/CARACOL/CARRUSEL_CARACOL_05.png',
      ],
    },
    {
      title: 'Virtual Events',
      mainImage: '/IMG/PROYECTO_03.jpg',
      images: [
        '/IMG/FUNDEPAZ/CARRUSEL_FUNDE-PAZ_01.png',
        '/IMG/FUNDEPAZ/CARRUSEL_FUNDE-PAZ_02.png',
        '/IMG/FUNDEPAZ/CARRUSEL_FUNDE-PAZ_03.png',
        '/IMG/FUNDEPAZ/CARRUSEL_FUNDE-PAZ_04.png',
        '/IMG/FUNDEPAZ/CARRUSEL_FUNDE-PAZ_05.png',
        '/IMG/FUNDEPAZ/CARRUSEL_FUNDE-PAZ_06.png',
      ],
    },
    {
      title: 'Ail News Portal',
      mainImage: '/IMG/PROYECTO_04.jpg',
      images: [
        '/IMG/AIL/CARRUSEL_AIL_01.png',
        '/IMG/AIL/CARRUSEL_AIL_02.png',
        '/IMG/AIL/CARRUSEL_AIL_03.png',
        '/IMG/AIL/CARRUSEL_AIL_04.png',
        '/IMG/AIL/CARRUSEL_AIL_05.png',
        '/IMG/AIL/CARRUSEL_AIL_06.png',
        '/IMG/AIL/CARRUSEL_AIL_07.png',
      ],
    },
    {
      title: 'Mobile Event App (Android - iOS)',
      mainImage: '/IMG/PROYECTO_05.jpg',
      images: [
        '/IMG/ACHO/POST-APP-01_01.png',
        '/IMG/ACHO/POST-APP-01_02.png',
        '/IMG/ACHO/POST-APP-01_03.png',
        '/IMG/ACHO/POST-APP-01_04.png',
        '/IMG/ACHO/POST-APP-01_05.png',
      ],
    },
  ];

  const [opened, setOpened] = useState(false);
  const [currentProject, setCurrentProject] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const handleProjectClick = (project: { title: string; images: string[] }) => {
    setCurrentProject(project);
    setOpened(true);
  };

  return (
    <Container fluid>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="auto"
        withCloseButton={false}
        centered
        styles={{
          body: { padding: 0 },
          content: {
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: '12px',
            padding: 0,
          },
        }}
      >
        {currentProject && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ManualCarousel images={currentProject.images} />
          </div>
        )}
      </Modal>

      {/* Galería de imágenes vertical con títulos */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() =>
              handleProjectClick({
                title: project.title,
                images: project.images,
              })
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleProjectClick({
                  title: project.title,
                  images: project.images,
                });
              }
            }}
            role="button"
            tabIndex={0}
            style={{
              cursor: 'pointer',
              outline: 'none',
              textAlign: 'center',
            }}
          >
            <Title order={1} ta="left" mb="md">
              {project.title}
            </Title>
            <Image
              src={project.mainImage}
              alt={project.title}
              width="100%"
              fit="contain"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
