import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence,type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/common/Button';
import Container from '../../../components/common/Container';
import heroImage1 from '../../../assets/images/hero1.png';
import heroImage2 from '../../../assets/images/hero2.png';
import heroImage3 from '../../../assets/images/hero3.png';
import heroImage4 from '../../../assets/images/hero4.png';
import heroImage5 from '../../../assets/images/hero5.png';

interface Slide {
  id: number;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  stats: { value: string; label: string }[];
}

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter la taille de l'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides: Slide[] = [
    {
      id: 1,
      title: t('hero.title'),
      highlight: t('hero.titleHighlight'),
      description: t('hero.subtitle'),
      image: heroImage1,
      buttonText: t('hero.cta'),
      buttonLink: "/services",
      stats: [
        { value: "500+", label: t('hero.stats.clients') },
        { value: "50+", label: t('hero.stats.destinations') },
        { value: "98%", label: t('hero.stats.successRate') }
      ]
    },
    {
      id: 2,
      title: t('services.title'),
      highlight: t('hero.servicesHighlight'),
      description: t('hero.servicesDescription'),
      image: heroImage2,
      buttonText: t('services.visa.title'),
      buttonLink: "/visa",
      stats: [
        { value: "6", label: t('hero.stats.keyServices') },
        { value: "24/7", label: t('hero.stats.support') },
        { value: "100%", label: t('hero.stats.personalized') }
      ]
    },
    {
      id: 3,
      title: t('destinations.title'),
      highlight: t('hero.destinationsHighlight'),
      description: t('hero.destinationsDescription', {
        schengen: t('destinations.schengen'),
        canada: t('destinations.canada'),
        usa: t('destinations.usa'),
        turkey: t('destinations.turkey'),
        china: t('destinations.china'),
        russia: t('destinations.russia'),
        africa: t('destinations.africa')
      }),
      image: heroImage3,
      buttonText: t('hero.exploreDestinations'),
      buttonLink: "/destinations",
      stats: [
        { value: "30+", label: t('hero.stats.accessibleCountries') },
        { value: "4", label: t('hero.stats.continents') },
        { value: "100%", label: t('hero.stats.coverage') }
      ]
    },
    {
      id: 4,
      title: t('payment.title'),
      highlight: t('hero.paymentHighlight'),
      description: t('hero.paymentDescription', {
        blockedTitle: t('payment.blocked.title'),
        blockedPrice: t('payment.blocked.price'),
        partialTitle: t('payment.partial.title'),
        partialPrice: t('payment.partial.price'),
        supportTitle: t('payment.support.title'),
        supportPrice: t('payment.support.price')
      }),
      image: heroImage4,
      buttonText: t('hero.viewOptions'),
      buttonLink: "/visa",
      stats: [
        { value: "3", label: t('hero.stats.plans') },
        { value: "0", label: t('hero.stats.noAdvance') },
        { value: "100%", label: t('hero.stats.secure') }
      ]
    },
    {
      id: 5,
      title: t('visaTypes.title'),
      highlight: t('hero.visaHighlight'),
      description: t('hero.visaDescription', {
        student: t('visaTypes.student.title'),
        tourist: t('visaTypes.tourist.title'),
        medical: t('visaTypes.medical.title'),
        work: t('visaTypes.work.title')
      }),
      image: heroImage5,
      buttonText: t('hero.discoverVisas'),
      buttonLink: "/visa",
      stats: [
        { value: "4", label: t('hero.stats.visaTypes') },
        { value: "100%", label: t('hero.stats.fullSupport') },
        { value: t('hero.stats.fast'), label: t('hero.stats.processing') }
      ]
    }
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Variantes d'animation
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

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Animated Circles */}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`grid ${isMobile ? 'grid-cols-1 px-0' : 'lg:grid-cols-2'} gap-12 items-center`}
            >
              {/* Version Desktop - Image à côté */}
              {!isMobile && (
                <>
                  {/* Texte */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h1
                      variants={itemVariants}
                      className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                    >
                      {slides[currentSlide].title}{' '}
                      {slides[currentSlide].highlight && (
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                          {slides[currentSlide].highlight}
                        </span>
                      )}
                    </motion.h1>
                    
                    <motion.p
                      variants={itemVariants}
                      className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-4"
                    >
                      <Button size="lg" href={slides[currentSlide].buttonLink}>
                        {slides[currentSlide].buttonText}
                      </Button>
                      <Button size="lg" variant="outline" href="/contact">
                        {t('common.contact')}
                      </Button>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-6 md:gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                      {slides[currentSlide].stats.map((stat, idx) => (
                        <div key={idx}>
                          <p className="text-2xl md:text-3xl font-bold text-primary-500">{stat.value}</p>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                  
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                    >
                      <p className="text-2xl font-bold text-primary-500">
                        {slides[currentSlide].stats[0].value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {slides[currentSlide].stats[0].label}
                      </p>
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
                  {/* Image de fond pour la carte */}
                  <div className="absolute inset-0">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
                  </div>
                  
                  {/* Contenu de la carte */}
                  <div className="relative z-10 p-5 min-h-[500px] flex flex-col justify-center">
                    <motion.h1
                      variants={itemVariants}
                      className="text-2xl font-bold mb-3 text-white"
                    >
                      {slides[currentSlide].title}{' '}
                      {slides[currentSlide].highlight && (
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                          {slides[currentSlide].highlight}
                        </span>
                      )}
                    </motion.h1>
                    
                    <motion.p
                      variants={itemVariants}
                      className="text-sm text-white/90 mb-5"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-2"
                    >
                      <Button size="sm" href={slides[currentSlide].buttonLink}>
                        {slides[currentSlide].buttonText}
                      </Button>
                      <Button size="sm" variant="outline" href="/contact">
                        {t('common.contact')}
                      </Button>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/20"
                    >
                      {slides[currentSlide].stats.map((stat, idx) => (
                        <div key={idx}>
                          <p className="text-lg font-bold text-primary-500">{stat.value}</p>
                          <p className="text-xs text-white/70">{stat.label}</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full'
                    : 'w-2 h-2 bg-gray-400 rounded-full hover:bg-primary-500'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="text-xs text-gray-600 dark:text-gray-300">
              Auto • {currentSlide + 1}/{slides.length}
            </div>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-primary-500 hover:text-primary-600 font-bold"
            >
              {isAutoPlaying ? '⏸' : '▶'}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;