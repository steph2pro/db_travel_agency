import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const offices = [
    { city: t('contact.yaounde'), phone: '640 46 51 82' },
    { city: t('contact.douala'), phone: '657 12 87 12' },
    { city: t('contact.bafoussam'), phone: '640 10 19 74' },
  ];

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.visa'), path: '/visa' },
    { label: t('nav.destinations'), path: '/destinations' },
    { label: t('nav.contact'), path: '/contact' },
  ];
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  DB TRAVEL
                </h3>
                <span className="text-sm text-primary-500">AGENCY</span>
              </div>
            </div>
            <p className="text-gray-400">
              {t('footer.trustedPartner')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-500">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-500">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              {offices.map((office, index) => (
                <li key={index} className="text-gray-400">
                  <p className="font-medium">{office.city}</p>
                  <p>📞 {office.phone}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-500">{t('contact.hours')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('contact.weekdays')}</li>
              <li>{t('contact.sunday')}</li>
            </ul>
          </div>
        </div>
        
      </Container>
    </footer>
  );
};

export default Footer;
