import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Button from '../common/Button';
import Container from '../common/Container';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.visa'), path: '/visa' },
    { label: t('nav.destinations'), path: '/destinations' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="DB Travel Agency Logo" 
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    DB TRAVEL
                  </span>
                </h1>
                <span className="text-sm font-semibold text-primary-500 -mt-1">
                  AGENCY
                </span>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium ${
                    isActive(item.path) ? 'text-primary-500 dark:text-primary-400' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-500 hover:text-white transition-colors"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <LanguageSwitcher />
              <Button size="sm" to="/contact">
                {t('common.contact')}
              </Button>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 z-50 relative"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"
                  style={{ top: '4px' }}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"
                  style={{ top: '11px' }}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"
                  style={{ top: '18px' }}
                />
              </div>
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <img 
                    src={logo} 
                    alt="DB Travel Agency Logo" 
                    className="h-10 w-auto object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                      DB TRAVEL
                    </h2>
                    <span className="text-xs text-primary-500">AGENCY</span>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6">
                <div className="flex flex-col space-y-2 px-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={closeMenu}
                      className={`block py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-primary-500/10 hover:text-primary-500 rounded-lg transition-colors font-medium ${
                        isActive(item.path) ? 'bg-primary-500/10 text-primary-500' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Thème</span>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    {isDark ? '☀️' : '🌙'}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Langue</span>
                  <LanguageSwitcher />
                </div>
                <Button size="md" to="/contact" onClick={closeMenu} className="w-full">
                  {t('common.contact')}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;


