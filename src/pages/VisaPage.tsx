import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faUmbrellaBeach, 
  faHeartbeat, 
  faBriefcase,
  faCheckCircle,
  faShieldHeart,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
// import visaHero from '../assets/images/visa-hero.png';

const VisaPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  let visaHero = 'https://tse2.mm.bing.net/th/id/OIP.0jVawPLS6nr7ZhNJyozKjgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'
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

  const visas = [
    {
      icon: faGraduationCap,
      title: t('visaTypes.student.title'),
      description: t('visaTypes.student.description'),
      details: t('visaTypes.student.details'),
      features: t('visaTypes.student.features', { returnObjects: true }) as string[],
      stats: t('visaTypes.student.stats', { returnObjects: true }) as string[],
      color: 'from-blue-600 to-cyan-600',
      image: 'https://tse2.mm.bing.net/th/id/OIP.8_Q4ZMwVH0oXIT3dDle9sQHaFE?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      icon: faUmbrellaBeach,
      title: t('visaTypes.tourist.title'),
      description: t('visaTypes.tourist.description'),
      details: t('visaTypes.tourist.details'),
      features: t('visaTypes.tourist.features', { returnObjects: true }) as string[],
      stats: t('visaTypes.tourist.stats', { returnObjects: true }) as string[],
      color: 'from-green-600 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3'
    },
    {
      icon: faHeartbeat,
      title: t('visaTypes.medical.title'),
      description: t('visaTypes.medical.description'),
      details: t('visaTypes.medical.details'),
      features: t('visaTypes.medical.features', { returnObjects: true }) as string[],
      stats: t('visaTypes.medical.stats', { returnObjects: true }) as string[],
      color: 'from-red-600 to-pink-600',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3'
    },
    {
      icon: faBriefcase,
      title: t('visaTypes.work.title'),
      description: t('visaTypes.work.description'),
      details: t('visaTypes.work.details'),
      features: t('visaTypes.work.features', { returnObjects: true }) as string[],
      stats: t('visaTypes.work.stats', { returnObjects: true }) as string[],
      color: 'from-purple-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3'
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
                      {t('visaTypes.title')}{' '}
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {t('visaTypes.subtitle')}
                      </span>
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8"
                    >
                      {t('visaTypes.subtitle')}
                    </motion.p>
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-4"
                    >
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-6 md:gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">4</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.visaTypes')}</p>
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">100%</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.fullSupport')}</p>
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">{t('hero.stats.fast')}</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.processing')}</p>
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
                      <img src={visaHero} alt="Visa" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                    >
                      <p className="text-2xl font-bold text-primary-500">4</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.visaTypes')}</p>
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
                    <img src={visaHero} alt="Visa" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
                  </div>
                  <div className="relative z-10 p-5 min-h-[500px] flex flex-col justify-center">
                    <motion.h1
                      variants={itemVariants}
                      className="text-2xl font-bold mb-3 text-white"
                    >
                      {t('visaTypes.title')}{' '}
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {t('visaTypes.subtitle')}
                      </span>
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-sm text-white/90 mb-5"
                    >
                      {t('visaTypes.subtitle')}
                    </motion.p>
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-2"
                    >
                      <Button size="sm" to="#visa-list">
                        Découvrir les visas
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
                        <p className="text-lg font-bold text-primary-500">4</p>
                        <p className="text-xs text-white/70">{t('hero.stats.visaTypes')}</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary-500">100%</p>
                        <p className="text-xs text-white/70">{t('hero.stats.fullSupport')}</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary-500">{t('hero.stats.fast')}</p>
                        <p className="text-xs text-white/70">{t('hero.stats.processing')}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Visas List */}
      <Container>
        <div id="visa-list" className="space-y-16 py-20">
          {visas.map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img src={visa.image} alt={visa.title} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${visa.color} opacity-60`} />
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className={`w-20 h-20 bg-gradient-to-r ${visa.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={visa.icon} className="text-4xl text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{visa.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{visa.description}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 italic">{visa.details}</p>
                
                <div className="space-y-3 mb-8">
                  {visa.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div>
                    <p className="text-3xl font-bold text-primary-500">98%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{visa.stats[0]}</p>
                  </div>
                  <div className="w-px h-12 bg-gray-300 dark:bg-gray-600" />
                  <div>
                    <p className="text-3xl font-bold text-primary-500">500+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{visa.stats[1]}</p>
                  </div>
                  <FontAwesomeIcon icon={faShieldHeart} className="text-3xl text-primary-500" />
                </div>

                <Button to="/contact">{t('common.bookAppointment')}</Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 pb-20 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-primary-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {t('visa.badges.fastProcessing')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faShieldHeart} className="text-primary-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {t('visa.badges.secure')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {t('visa.badges.highSuccessRate')}
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.main>
  );
};

export default VisaPage;