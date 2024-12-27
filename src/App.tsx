import '@mantine/core/styles.css';
import './global.css'; // Importar el archivo CSS global

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </LanguageProvider>
  );
}
