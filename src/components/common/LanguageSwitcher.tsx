import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import frFlag from '../../assets/flags/fr.png';
import gbFlag from '../../assets/flags/en.png';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="relative px-4 py-2 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-2"
        >
          {i18n.language === 'fr' ? (
            <>
              <img src={gbFlag} alt="English" className="w-6 h-4 rounded-sm object-cover" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">EN</span>
            </>
          ) : (
            <>
              <img src={frFlag} alt="Français" className="w-6 h-4 rounded-sm object-cover" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">FR</span>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500"
        />
      )}
    </motion.button>
  );
};

export default LanguageSwitcher;
