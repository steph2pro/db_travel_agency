import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import WhatsAppButton from '../common/WhatsAppButton';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const offices = [
    { city: t('contact.yaounde'), phone: '640 46 51 82' },
    { city: t('contact.douala'), phone: '657 12 87 12' },
    { city: t('contact.bafoussam'), phone: '640 10 19 74' },
  ];
  
  return (
    <>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
                DB TRAVEL AGENCY
              </h3>
              <p className="text-gray-400">
                Votre partenaire de confiance pour la mobilité internationale.
              </p>
            </div>
            
            {/* Liens rapides */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-primary-500 transition-colors">Accueil</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Services</a></li>
                <li><a href="#visa" className="text-gray-400 hover:text-primary-500 transition-colors">Visas</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                {offices.map((office, index) => (
                  <li key={index} className="text-gray-400">
                    <p className="font-medium">{office.city}</p>
                    <p>📞 {office.phone}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Horaires */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('contact.hours')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('contact.weekdays')}</li>
                <li>{t('contact.sunday')}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">{t('footer.rights')}</p>
          </div>
        </Container>
      </footer>
      
      {/* Bouton WhatsApp flottant */}
      <WhatsAppButton offices={offices} />
    </>
  );
};

export default Footer;
