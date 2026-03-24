import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPassport, 
  faLanguage, 
  faChalkboardUser,
  faCompass,
  faHouseChimney,
  faPlane,
  faCheckCircle,
  faShieldHeart,
  faClock,
  faFlag,
  faBook,
  faChartLine,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  let servicesHero = 'https://fr.ifza.com/wp-content/uploads/2024/11/Immigration-Services-License.webp';
  
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

  // Helper function to safely get features array
  const getFeaturesArray = (features: any): string[] => {
    if (Array.isArray(features)) {
      return features;
    }
    if (typeof features === 'object' && features !== null) {
      return Object.values(features);
    }
    return [];
  };

  const services = [
    
    {
      icon: faChalkboardUser,
      title: t('services.french.title', 'TCF Preparation'),
      description: t('services.french.description', 'French courses adapted to pass the TCF'),
      features: getFeaturesArray(t('services.details.french.features', { returnObjects: true, defaultValue: [] })),
      image: 'https://tse2.mm.bing.net/th/id/OIP.50YRWQEq1dZ44hpMhrgfWQHaCv?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      icon: faCompass,
      title: t('services.guidance.title', 'Travel Guidance'),
      description: t('services.guidance.description', 'Personalized support for your travels'),
      features: getFeaturesArray(t('services.details.guidance.features', { returnObjects: true, defaultValue: [] })),
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3'
    },
    {
      icon: faHouseChimney,
      title: t('services.accommodation.title', 'Accommodation'),
      description: t('services.accommodation.description', 'Housing solutions abroad'),
      features: getFeaturesArray(t('services.details.accommodation.features', { returnObjects: true, defaultValue: [] })),
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3'
    },
    {
      icon: faPlane,
      title: t('services.tickets.title', 'Flight Tickets'),
      description: t('services.tickets.description', 'Best rates on international flights'),
      features: getFeaturesArray(t('services.details.tickets.features', { returnObjects: true, defaultValue: [] })),
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3'
    },
    {
      icon: faPassport,
      title: t('services.visa.title', 'Visa Assistance'),
      description: t('services.visa.description', 'Complete end-to-end support for all your visa applications'),
      badges: {
        fastProcessing: t('services.details.visa.badges.fastProcessing', 'Fast processing'),
        secure: t('services.details.visa.badges.secure', '100% secure'),
        highSuccessRate: t('services.details.visa.badges.highSuccessRate', 'High success rate')
      },
      features: getFeaturesArray(t('services.details.visa.features', { returnObjects: true, defaultValue: [] })),
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3'
    },
    {
      icon: faLanguage,
      title: t('services.german.title', 'German Courses'),
      description: t('services.german.description', 'Preparation for Goethe, TELC and TestDaF exams'),
      features: getFeaturesArray(t('services.details.german.features', { returnObjects: true, defaultValue: [] })),
      image: 'https://tse1.mm.bing.net/th/id/OIP.Wnk8-Rn_cYf82G4jv7O7sAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
  ];

  // Language courses data with translations - using the exact structure from your JSON
  const languageCourses = [
    {
      id: 'english',
      name: t('services.courses.english.name', 'English'),
      flag: '🇬🇧',
      icon: faFlag,
      level: t('services.courses.english.levels', { returnObjects: true, defaultValue: ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', 'B2 - Upper Intermediate', 'C1 - Advanced', 'C2 - Proficient'] }),
      duration: t('services.courses.english.duration', '4-12 weeks per level'),
      features: t('services.courses.english.features', { returnObjects: true, defaultValue: ['IELTS/TOEFL Preparation', 'Business English', 'Conversation Practice', 'Grammar & Writing'] })
    },
    {
      id: 'spanish',
      name: t('services.courses.spanish.name', 'Spanish'),
      flag: '🇪🇸',
      icon: faFlag,
      level: t('services.courses.spanish.levels', { returnObjects: true, defaultValue: ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', 'B2 - Upper Intermediate', 'C1 - Advanced', 'C2 - Proficient'] }),
      duration: t('services.courses.spanish.duration', '4-12 weeks per level'),
      features: t('services.courses.spanish.features', { returnObjects: true, defaultValue: ['DELE Preparation', 'Latin American Spanish', 'Conversation Practice', 'Business Spanish'] })
    },
    {
      id: 'german',
      name: t('services.courses.german.name', 'German'),
      flag: '🇩🇪',
      icon: faFlag,
      level: t('services.courses.german.levels', { returnObjects: true, defaultValue: ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', 'B2 - Upper Intermediate', 'C1 - Advanced', 'C2 - Proficient'] }),
      duration: t('services.courses.german.duration', '4-12 weeks per level'),
      features: t('services.courses.german.features', { returnObjects: true, defaultValue: ['Goethe-Zertifikat Preparation', 'TestDaF Preparation', 'Business German', 'Conversation Practice'] })
    },
    {
      id: 'french',
      name: t('services.courses.french.name', 'French'),
      flag: '🇫🇷',
      icon: faFlag,
      level: t('services.courses.french.levels', { returnObjects: true, defaultValue: ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', 'B2 - Upper Intermediate', 'C1 - Advanced', 'C2 - Proficient'] }),
      duration: t('services.courses.french.duration', '4-12 weeks per level'),
      features: t('services.courses.french.features', { returnObjects: true, defaultValue: ['DELF/DALF Preparation', 'TCF Preparation', 'Business French', 'Conversation Practice'] })
    },
    {
      id: 'italian',
      name: t('services.courses.italian.name', 'Italian'),
      flag: '🇮🇹',
      icon: faFlag,
      level: t('services.courses.italian.levels', { returnObjects: true, defaultValue: ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', 'B2 - Upper Intermediate', 'C1 - Advanced', 'C2 - Proficient'] }),
      duration: t('services.courses.italian.duration', '4-12 weeks per level'),
      features: t('services.courses.italian.features', { returnObjects: true, defaultValue: ['CILS Preparation', 'CELI Preparation', 'Italian Culture', 'Conversation Practice'] })
    },
    {
      id: 'mandarin',
      name: t('services.courses.mandarin.name', 'Mandarin Chinese'),
      flag: '🇨🇳',
      icon: faBook,
      level: t('services.courses.mandarin.levels', { returnObjects: true, defaultValue: ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'] }),
      duration: t('services.courses.mandarin.duration', '6-12 weeks per level'),
      features: t('services.courses.mandarin.features', { returnObjects: true, defaultValue: ['HSK Preparation', 'Business Chinese', 'Character Writing', 'Conversation Practice'] })
    },
    {
      id: 'portuguese',
      name: t('services.courses.portuguese.name', 'Portuguese'),
      flag: '🇵🇹',
      icon: faFlag,
      level: t('services.courses.portuguese.levels', { returnObjects: true, defaultValue: ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', 'B2 - Upper Intermediate', 'C1 - Advanced', 'C2 - Proficient'] }),
      duration: t('services.courses.portuguese.duration', '4-12 weeks per level'),
      features: t('services.courses.portuguese.features', { returnObjects: true, defaultValue: ['CELPE-Bras Preparation', 'European Portuguese', 'Business Portuguese', 'Conversation Practice'] })
    },
    {
      id: 'arabic',
      name: t('services.courses.arabic.name', 'Arabic'),
      flag: '🇦🇪',
      icon: faBook,
      level: t('services.courses.arabic.levels', { returnObjects: true, defaultValue: ['Modern Standard Arabic', 'Gulf Arabic', 'Levantine Arabic', 'Egyptian Arabic', 'Business Arabic', 'Quranic Arabic'] }),
      duration: t('services.courses.arabic.duration', '6-12 weeks per level'),
      features: t('services.courses.arabic.features', { returnObjects: true, defaultValue: ['MSA Course', 'Dialect Focus', 'Business Arabic', 'Conversation Practice'] })
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
                      {t('services.title', 'Our Services')}{' '}
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {t('services.subtitle', 'Complete support for your project')}
                      </span>
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8"
                    >
                      {t('services.subtitle', 'Complete support for your project')}
                    </motion.p>

                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-6 md:gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faChartLine} className="text-primary-500" />
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-primary-500">98%</p>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.successRate', 'Success Rate')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faClock} className="text-primary-500" />
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-primary-500">24/7</p>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('services.footer.support247', '24/7 Support')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faHandshake} className="text-primary-500" />
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-primary-500">100%</p>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.personalized', 'Personalized')}</p>
                        </div>
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
                      <img src={servicesHero} alt="Services" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                    >
                      <p className="text-2xl font-bold text-primary-500">98%</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.successRate', 'Success Rate')}</p>
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
                    <img src={servicesHero} alt="Services" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
                  </div>
                  <div className="relative z-10 p-5 min-h-[500px] flex flex-col justify-center">
                    <motion.h1
                      variants={itemVariants}
                      className="text-2xl font-bold mb-3 text-white"
                    >
                      {t('services.title', 'Our Services')}{' '}
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {t('services.subtitle', 'Complete support for your project')}
                      </span>
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-sm text-white/90 mb-5"
                    >
                      {t('services.subtitle', 'Complete support for your project')}
                    </motion.p>
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-2"
                    >
                      <Button size="sm" to="#services-list">
                        {t('common.discover', 'Discover our services')}
                      </Button>
                      <Button size="sm" variant="outline" to="/contact">
                        {t('common.contact', 'Contact')}
                      </Button>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-white/20"
                    >
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faChartLine} className="text-primary-500 text-sm" />
                        <div>
                          <p className="text-lg font-bold text-primary-500">98%</p>
                          <p className="text-xs text-white/70">{t('hero.stats.successRate', 'Success Rate')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faClock} className="text-primary-500 text-sm" />
                        <div>
                          <p className="text-lg font-bold text-primary-500">24/7</p>
                          <p className="text-xs text-white/70">{t('services.footer.support247', '24/7 Support')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faHandshake} className="text-primary-500 text-sm" />
                        <div>
                          <p className="text-lg font-bold text-primary-500">100%</p>
                          <p className="text-xs text-white/70">{t('hero.stats.personalized', 'Personalized')}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <Container>
        <div id="services-list" className="space-y-20 py-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={service.icon} className="text-4xl text-primary-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                
                {/* Display badges if they exist */}
                {service.badges && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {Object.values(service.badges).map((badge, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Safely render features */}
                {service.features && service.features.length > 0 && (
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button to="/contact">{t('common.requestInfo', 'Request Information')}</Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Language Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faLanguage} className="text-4xl text-primary-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              {t('services.courses.title', 'Language Courses')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('services.courses.description', 'Master new languages with our comprehensive courses taught by native-speaking instructors')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languageCourses.map((lang, langIdx) => (
              <motion.div
                key={langIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: langIdx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{lang.flag}</span>
                  <FontAwesomeIcon icon={lang.icon} className="text-2xl text-primary-500" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{lang.name}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                      {t('services.courses.levels', 'Levels')}:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(lang.level) && lang.level.slice(0, 3).map((level, lvlIdx) => (
                        <span key={lvlIdx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                          {level}
                        </span>
                      ))}
                      {Array.isArray(lang.level) && lang.level.length > 3 && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                          +{lang.level.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                      {t('services.courses.features', 'Features')}:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(lang.features) && lang.features.slice(0, 2).map((feature, fIdx) => (
                        <span key={fIdx} className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {Array.isArray(lang.features) && lang.features.length > 2 && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                          +{lang.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                    <span className="font-semibold">{t('services.courses.duration', 'Duration')}:</span> {lang.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button to="/contact" size="lg" className="mx-auto">
              {t('services.courses.startLearning', 'Start Learning Today')}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 pb-20 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-full">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faShieldHeart} className="text-primary-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {t('services.footer.reliable', '100% reliable service • Personalized support • Satisfaction guaranteed')}
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.main>
  );
};

export default ServicesPage;