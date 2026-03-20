import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Container from '../../../components/common/Container';

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const airlines = [
    { 
      name: 'Ethiopian Airlines', 
      country: t('partners.ethiopia'),
      flag: '🇪🇹',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ethiopian_Airlines_logo.svg/200px-Ethiopian_Airlines_logo.svg.png',
      bgColor: 'from-green-600 to-green-800'
    },
    { 
      name: 'Air France', 
      country: t('partners.france'),
      flag: '🇫🇷',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/200px-Air_France_Logo.svg.png',
      bgColor: 'from-blue-600 to-red-600'
    },
    { 
      name: 'Brussels Airlines', 
      country: t('partners.belgium'),
      flag: '🇧🇪',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Brussels_Airlines_logo.svg/200px-Brussels_Airlines_logo.svg.png',
      bgColor: 'from-yellow-600 to-red-600'
    },
    { 
      name: 'Turkish Airlines', 
      country: t('partners.turkey'),
      flag: '🇹🇷',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Turkish_Airlines_logo.svg/200px-Turkish_Airlines_logo.svg.png',
      bgColor: 'from-red-600 to-red-800'
    },
    { 
      name: 'Kenya Airways', 
      country: t('partners.kenya'),
      flag: '🇰🇪',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kenya_Airways_logo.svg/200px-Kenya_Airways_logo.svg.png',
      bgColor: 'from-green-700 to-black'
    },
    { 
      name: 'RwandAir', 
      country: t('partners.rwanda'),
      flag: '🇷🇼',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/RwandAir_logo.svg/200px-RwandAir_logo.svg.png',
      bgColor: 'from-blue-600 to-green-600'
    },
    { 
      name: 'EgyptAir', 
      country: t('partners.egypt'),
      flag: '🇪🇬',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/EgyptAir_logo.svg/200px-EgyptAir_logo.svg.png',
      bgColor: 'from-red-600 to-black'
    },
    { 
      name: 'American Airlines', 
      country: t('partners.usa'),
      flag: '🇺🇸',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/American_Airlines_logo.svg/200px-American_Airlines_logo.svg.png',
      bgColor: 'from-blue-700 to-red-600'
    },
  ];

  // Détecter la taille de l'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Grouper les compagnies par paires pour le mobile
  const pairedAirlines = [];
  for (let i = 0; i < airlines.length; i += 2) {
    pairedAirlines.push(airlines.slice(i, i + 2));
  }

  // Défilement automatique sur mobile
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isMobile && isAutoPlaying && scrollRef.current) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % pairedAirlines.length;
          return nextIndex;
        });
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMobile, isAutoPlaying, pairedAirlines.length]);

  // Scroll vers l'index actuel sur mobile
  useEffect(() => {
    if (isMobile && scrollRef.current) {
      const scrollAmount = currentIndex * (scrollRef.current.clientWidth);
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isMobile]);

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-4 md:mb-6"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </motion.div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2 md:mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            {t('partners.subtitle')}
          </p>
        </motion.div>
        
        {/* Version Desktop - Grille */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {airlines.map((airline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${airline.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="text-4xl">${airline.flag}</div>`;
                    }}
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {airline.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="text-xl">{airline.flag}</span>
                  <span>{airline.country}</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-primary-500/10 rounded-full text-xs text-primary-600 dark:text-primary-400">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{t('partners.officialPartner')}</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-45 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Version Mobile - Slider horizontal avec paires (2 cartes par slide) */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {pairedAirlines.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="flex-shrink-0 w-full snap-center px-2"
              >
                <div className="grid grid-cols-2 gap-4">
                  {pair.map((airline, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <img
                          src={airline.logo}
                          alt={airline.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="text-3xl">${airline.flag}</div>`;
                          }}
                        />
                      </div>
                      <h3 className="text-xs font-bold text-gray-800 dark:text-white mb-1">
                        {airline.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-lg">{airline.flag}</span>
                        <span className="text-xs text-gray-500">{airline.country}</span>
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-primary-500/10 rounded-full text-xs text-primary-600">
                        <span>✓ Partenaire</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots pour mobile */}
          <div className="flex justify-center space-x-2 mt-6">
            {pairedAirlines.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-6 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full'
                    : 'w-1.5 h-1.5 bg-gray-400 rounded-full'
                }`}
              />
            ))}
          </div>
          
          {/* Indicateur auto-play */}
          <div className="flex justify-center mt-4">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {t('partners.auto')} • {currentIndex + 1}/{pairedAirlines.length}
              </div>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-xs text-primary-500 font-bold"
              >
                {isAutoPlaying ? '⏸' : '▶'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Badge de confiance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
              {t('partners.badge')}
            </span>
          </div>
        </motion.div>
      </Container>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Partners;