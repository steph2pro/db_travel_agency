import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Button from '../common/Button';
import Container from '../common/Container';
import logo from '../../assets/logo.png'; // Assurez-vous d'avoir le logo dans ce chemin

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.visa'), href: '#visa' },
    { label: t('nav.destinations'), href: '#destinations' },
    { label: t('nav.contact'), href: '#contact' },
  ];
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo avec image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.location.href = '#'}
          >
            {/* Image du logo */}
            <img 
              src={logo} 
              alt="DB Travel Agency Logo" 
              className="h-14 w-auto object-contain"
            />
            
            {/* Nom de l'entreprise */}
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
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-500 hover:text-white transition-colors"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <LanguageSwitcher />
            <Button size="sm" href="#contact">
              {t('common.contact')}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-500"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <LanguageSwitcher />
              <Button size="sm" href="#contact">
                {t('common.contact')}
              </Button>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
};

export default Header;