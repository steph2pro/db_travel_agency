import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPassport, 
  faGlobe, 
  faLandmark, 
  faMosque,
  faDragon,
  faMountain,
  faTree,
  faUniversity
} from '@fortawesome/free-solid-svg-icons';
import Section from '../../../components/common/Section';

interface DestinationCardProps {
  country: string;
  flag: string;
  icon: any;
  color: string;
  image: string;
  description?: string;
  index: number;
  isActive?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  country, 
  flag, 
  icon, 
  color, 
  image, 
  description,
  index,
  isActive = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -15 }}
      className={`relative flex-shrink-0 w-72 sm:w-80 h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer group transition-all duration-300 ${
        isActive ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900' : ''
      }`}
    >
      {/* Image de fond */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={country} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay avec opacité réduite */}
        <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* En-tête avec drapeau et icône */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="flex justify-between items-start"
        >
          <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
            <span className="text-2xl">{flag}</span>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center">
            <FontAwesomeIcon icon={icon} className="text-2xl text-white" />
          </div>
        </motion.div>

        {/* Texte en bas */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="space-y-2"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300">
            {country}
          </h3>
          {description && (
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          )}
          
          {/* Badge de popularité */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mt-2"
          >
            <FontAwesomeIcon icon={faPassport} className="text-xs" />
            <span>Visa disponible</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-45 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

const Destinations: React.FC = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Ref pour suivre si l'utilisateur a scrollé manuellement
  const userScrolledRef = useRef(false);
  const autoScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const destinations = [
    { 
      country: t('destinations.schengen'), 
      flag: '🇪🇺', 
      icon: faLandmark,
      color: 'from-blue-700 to-blue-500', 
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3',
      description: t('destinations.schengenDesc')
    },
    { 
      country: t('destinations.canada'), 
      flag: '🇨🇦', 
      icon: faMountain,
      color: 'from-red-700 to-red-500', 
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3',
      description: t('destinations.canadaDesc')
    },
    { 
      country: t('destinations.usa'), 
      flag: '🇺🇸', 
      icon: faGlobe,
      color: 'from-blue-800 to-red-700', 
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3',
      description: t('destinations.usaDesc')
    },
    { 
      country: t('destinations.turkey'), 
      flag: '🇹🇷', 
      icon: faMosque,
      color: 'from-red-600 to-orange-500', 
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3',
      description: t('destinations.turkeyDesc')
    },
    { 
      country: t('destinations.china'), 
      flag: '🇨🇳', 
      icon: faDragon,
      color: 'from-red-800 to-red-600', 
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3',
      description: t('destinations.chinaDesc')
    },
    { 
      country: t('destinations.russia'), 
      flag: '🇷🇺', 
      icon: faUniversity,
      color: 'from-blue-900 to-red-700', 
      image: 'https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-4.0.3',
      description: t('destinations.russiaDesc')
    },
    { 
      country: t('destinations.africa'), 
      flag: '🌍', 
      icon: faTree,
      color: 'from-green-700 to-yellow-600', 
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01e7e?ixlib=rb-4.0.3',
      description: t('destinations.africaDesc')
    },
  ];

  // Détecter le scroll manuel de l'utilisateur
  useEffect(() => {
    const handleUserScroll = () => {
      userScrolledRef.current = true;
      
      // Réinitialiser après 5 secondes d'inactivité
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
      autoScrollTimerRef.current = setTimeout(() => {
        userScrolledRef.current = false;
      }, 5000);
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleUserScroll);
      return () => scrollContainer.removeEventListener('scroll', handleUserScroll);
    }
  }, []);

  // Mettre à jour l'index basé sur le scroll
  useEffect(() => {
    const updateIndexFromScroll = () => {
      if (scrollRef.current && !userScrolledRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = 320; // w-80 = 320px
        const gap = 24; // space-x-6 = 24px
        const cardTotalWidth = cardWidth + gap;
        
        const newIndex = Math.round(scrollLeft / cardTotalWidth);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < destinations.length) {
          setCurrentIndex(newIndex);
        }
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateIndexFromScroll);
      return () => scrollContainer.removeEventListener('scroll', updateIndexFromScroll);
    }
  }, [currentIndex, destinations.length]);

  // Défilement automatique
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying && !userScrolledRef.current && scrollRef.current) {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % destinations.length;
        const cardWidth = 320;
        const gap = 24;
        const cardTotalWidth = cardWidth + gap;
        const scrollTo = nextIndex * cardTotalWidth;
        
        scrollRef.current?.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
        
        setCurrentIndex(nextIndex);
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentIndex, destinations.length]);

  const goToSlide = (index: number) => {
    userScrolledRef.current = true;
    const cardWidth = 320;
    const gap = 24;
    const cardTotalWidth = cardWidth + gap;
    const scrollTo = index * cardTotalWidth;
    
    scrollRef.current?.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
    
    // Réactiver l'auto-scroll après 5 secondes
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
    }
    autoScrollTimerRef.current = setTimeout(() => {
      userScrolledRef.current = false;
    }, 5000);
  };

  const scroll = (direction: 'left' | 'right') => {
    userScrolledRef.current = true;
    const newIndex = direction === 'left' 
      ? (currentIndex - 1 + destinations.length) % destinations.length
      : (currentIndex + 1) % destinations.length;
    
    const cardWidth = 320;
    const gap = 24;
    const cardTotalWidth = cardWidth + gap;
    const scrollTo = newIndex * cardTotalWidth;
    
    scrollRef.current?.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
    
    setCurrentIndex(newIndex);
    
    // Réactiver l'auto-scroll après 5 secondes
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
    }
    autoScrollTimerRef.current = setTimeout(() => {
      userScrolledRef.current = false;
    }, 5000);
  };

  return (
    <Section id="destinations" title={t('destinations.title')} subtitle={t('destinations.subtitle')}>
      <div ref={sectionRef} className="relative">
        {/* Conteneur de défilement */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-8 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {destinations.map((dest, index) => (
            <DestinationCard 
              key={index} 
              {...dest} 
              index={index}
              isActive={currentIndex === index}
            />
          ))}
        </div>
        
        {/* Boutons de navigation - cachés sur mobile */}
        <div className="hidden md:block">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full'
                  : 'w-2 h-2 bg-gray-400 rounded-full hover:bg-primary-500'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-4">
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="text-xs text-gray-600 dark:text-gray-300">
              Auto • {currentIndex + 1}/{destinations.length}
            </div>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-primary-500 hover:text-primary-600 font-bold"
            >
              {isAutoPlaying ? '⏸' : '▶'}
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Section>
  );
};

export default Destinations;