import React, { createContext, useContext, useState } from 'react';

// Define el tipo de idioma
type Language = 'en' | 'es';

// Define el contexto con un tipo explícito
const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: (lang: Language) => void;
} | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Determina el idioma predeterminado según el navegador
  const defaultLanguage: Language = navigator.language.startsWith('es') ? 'es' : 'en';
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Cambia el idioma, garantizando que sea de tipo Language
  const toggleLanguage = (lang: Language) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para consumir el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de LanguageProvider');
  }
  return context;
};
