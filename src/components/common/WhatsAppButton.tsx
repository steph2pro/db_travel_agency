import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface Office {
  city: string;
  phone: string;
}

interface WhatsAppButtonProps {
  offices: Office[];
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ offices }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPhoneNumber = (city: string): string => {
    const office = offices.find(o => o.city === city);
    return office?.phone || offices[0]?.phone || '';
  };

  const handleCitySelect = (city: string) => {
    const phone = getPhoneNumber(city);
    const message = encodeURIComponent(t('whatsapp.defaultMessage'));
    const whatsappUrl = `https://wa.me/${237}${phone.replace(/\s/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleDefaultContact = () => {
    const mainOffice = offices[0];
    if (mainOffice) {
      handleCitySelect(mainOffice.city);
    }
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isVisible ? 1 : 0, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-16 right-0 mb-2 w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    {t('whatsapp.chooseAgency')}
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t('whatsapp.selectNearestAgency')}
                </p>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {offices.map((office, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 5 }}
                    onClick={() => handleCitySelect(office.city)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 dark:text-white">{office.city}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">📞 {office.phone}</p>
                    </div>
                    <span className="text-xs text-gray-400">→</span>
                  </motion.button>
                ))}
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50">
                <button
                  onClick={handleDefaultContact}
                  className="w-full text-center text-sm text-primary-500 hover:text-primary-600 font-medium"
                >
                  {t('whatsapp.contactMainAgency')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
            <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7 text-white" />
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold"
          >
            1
          </motion.div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute bottom-0 right-16 mb-3 hidden md:block"
        >
          <div className="bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-xs shadow-md">
            <span className="text-gray-500 dark:text-gray-400">📍 {t('whatsapp.nearYou')}</span>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
            <span className="text-sm">{t('whatsapp.openingWhatsApp')}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;