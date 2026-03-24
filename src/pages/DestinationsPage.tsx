import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLandmark, 
  faMountain, 
  faGlobe, 
  faMosque,
  faDragon,
  faUniversity,
  faTree,
  faPassport,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
// import destinationsHero from '../assets/images/destinations-hero.png';

const DestinationsPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
let destinationsHero= 'https://tse4.mm.bing.net/th/id/OIP.lSMISzPCLysMBv-anZ3E8gHaEL?rs=1&pid=ImgDetMain&o=7&rm=3'
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const destinations = [
    {
      name: t('destinations.schengen'),
      flag: '🇪🇺',
      icon: faLandmark,
      color: 'from-blue-700 to-blue-500',
      description: t('destinations.schengenDesc'),
      details: t('destinations.details.schengen'),
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3'
    },
    {
      name: t('destinations.canada'),
      flag: '🇨🇦',
      icon: faMountain,
      color: 'from-red-700 to-red-500',
      description: t('destinations.canadaDesc'),
      details: t('destinations.details.canada'),
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3'
    },
    {
      name: t('destinations.usa'),
      flag: '🇺🇸',
      icon: faGlobe,
      color: 'from-blue-800 to-red-700',
      description: t('destinations.usaDesc'),
      details: t('destinations.details.usa'),
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3'
    },
    {
      name: t('destinations.turkey'),
      flag: '🇹🇷',
      icon: faMosque,
      color: 'from-red-600 to-orange-500',
      description: t('destinations.turkeyDesc'),
      details: t('destinations.details.turkey'),
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3'
    },
    {
      name: t('destinations.china'),
      flag: '🇨🇳',
      icon: faDragon,
      color: 'from-red-800 to-red-600',
      description: t('destinations.chinaDesc'),
      details: t('destinations.details.china'),
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3'
    },
    {
      name: t('destinations.russia'),
      flag: '🇷🇺',
      icon: faUniversity,
      color: 'from-blue-900 to-red-700',
      description: t('destinations.russiaDesc'),
      details: t('destinations.details.russia'),
      image: 'https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-4.0.3'
    },
    {
      name: t('destinations.africa'),
      flag: '🌍',
      icon: faTree,
      color: 'from-green-700 to-yellow-600',
      description: t('destinations.africaDesc'),
      details: t('destinations.details.africa'),
      image: 'https://tse1.mm.bing.net/th/id/OIP.vSTWpOieThOAD2gr8LqQ7QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section avec image fixe */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl opacity-20"
        />
        
        <Container>
          <div className="relative z-10 pt-32 pb-20">
            <div className={`grid ${isMobile ? 'grid-cols-1 px-0' : 'lg:grid-cols-2'} gap-12 items-center`}>
              {/* Version Desktop - Texte à gauche, image à droite */}
              {!isMobile && (
                <>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h1
                      variants={itemVariants}
                      className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                    >
                      {t('destinations.title')}{' '}
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {t('destinations.subtitle')}
                      </span>
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8"
                    >
                      {t('destinations.subtitle')}
                    </motion.p>
                  

                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-6 md:gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">30+</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.accessibleCountries')}</p>
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">4</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.continents')}</p>
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">100%</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.coverage')}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img src={destinationsHero} alt="Destinations" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                    >
                      <p className="text-2xl font-bold text-primary-500">30+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.accessibleCountries')}</p>
                    </motion.div>
                  </motion.div>
                </>
              )}

              {/* Version Mobile - Carte avec image en fond */}
              {isMobile && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative rounded-2xl overflow-hidden shadow-2xl mx-0"
                >
                  <div className="absolute inset-0">
                    <img src={destinationsHero} alt="Destinations" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
                  </div>
                  <div className="relative z-10 p-5 min-h-[500px] flex flex-col justify-center">
                    <motion.h1
                      variants={itemVariants}
                      className="text-2xl font-bold mb-3 text-white"
                    >
                      {t('destinations.title')}{' '}
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {t('destinations.subtitle')}
                      </span>
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-sm text-white/90 mb-5"
                    >
                      {t('destinations.subtitle')}
                    </motion.p>
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-2"
                    >
                      <Button size="sm" to="#destinations-list">
                        {t('hero.exploreDestinations')}
                      </Button>
                      <Button size="sm" variant="outline" to="/contact">
                        {t('common.contact')}
                      </Button>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/20"
                    >
                      <div>
                        <p className="text-lg font-bold text-primary-500">30+</p>
                        <p className="text-xs text-white/70">{t('hero.stats.accessibleCountries')}</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary-500">4</p>
                        <p className="text-xs text-white/70">{t('hero.stats.continents')}</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary-500">100%</p>
                        <p className="text-xs text-white/70">{t('hero.stats.coverage')}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Destinations Grid */}
      <Container>
        <div id="destinations-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-70`} />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                    <span className="text-3xl">{dest.flag}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center">
                    <FontAwesomeIcon icon={dest.icon} className="text-2xl text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-white group-hover:text-primary-500 transition-colors">
                    {dest.name}
                  </h2>
                  <p className="text-white/90 text-sm">{dest.description}</p>
                  <p className="text-white/80 text-xs leading-relaxed">{dest.details}</p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mt-2">
                    <FontAwesomeIcon icon={faPassport} className="text-xs" />
                    <span>{t('destinations.visaAvailable')}</span>
                  </div>

                  <Button size="sm" to="/contact" className="mt-4 w-full">
                    {t('common.learnMore')}
                  </Button>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-45 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 pb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {t('destinations.badge')}
            </span>
          </div>
        </motion.div>
      </Container>
    </motion.main>
  );
};

export default DestinationsPage;