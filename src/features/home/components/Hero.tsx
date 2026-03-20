import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/common/Button';
import Container from '../../../components/common/Container';

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

  const slides: Slide[] = [
    {
      id: 1,
      title: t('hero.title'),
      highlight: t('hero.titleHighlight'),
      description: t('hero.subtitle'),
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3",
      buttonText: t('hero.cta'),
      buttonLink: "#services",
      stats: [
        { value: "500+", label: "Clients satisfaits" },
        { value: "50+", label: "Destinations" },
        { value: "98%", label: "Taux de réussite" }
      ]
    },
    {
      id: 2,
      title: t('services.title'),
      highlight: "pour votre Réussite",
      description: "Assistance visa complète, cours d'allemand et anglais, préparation TCF, conseils voyage, logement et billets d'avion. Un accompagnement 360° pour votre projet international.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3",
      buttonText: t('services.visa.title'),
      buttonLink: "#services",
      stats: [
        { value: "6", label: "Services clés" },
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Personnalisé" }
      ]
    },
    {
      id: 3,
      title: t('destinations.title'),
      highlight: "Internationales",
      description: `Visa possible dans tous les pays de la ${t('destinations.schengen')}, ${t('destinations.canada')}, ${t('destinations.usa')}, ${t('destinations.turkey')}, ${t('destinations.china')}, ${t('destinations.russia')}, et ${t('destinations.africa')}. Votre rêve de voyage devient réalité.`,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3",
      buttonText: "Explorer les destinations",
      buttonLink: "#destinations",
      stats: [
        { value: "30+", label: "Pays accessibles" },
        { value: "4", label: "Continents" },
        { value: "100%", label: "Couverture" }
      ]
    },
    {
      id: 4,
      title: t('payment.title'),
      highlight: "Adapté à Votre Budget",
      description: `${t('payment.blocked.title')} : ${t('payment.blocked.price')} • ${t('payment.partial.title')} : ${t('payment.partial.price')} • ${t('payment.support.title')} : ${t('payment.support.price')}. Des solutions transparentes et adaptées à tous les budgets.`,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3",
      buttonText: "Voir les options",
      buttonLink: "#visa",
      stats: [
        { value: "3", label: "Formules" },
        { value: "0", label: "Aucune avance" },
        { value: "100%", label: "Sécurisé" }
      ]
    },
    {
      id: 5,
      title: t('visaTypes.title'),
      highlight: "Pour Tous Vos Projets",
      description: `${t('visaTypes.student.title')}, ${t('visaTypes.tourist.title')}, ${t('visaTypes.medical.title')} et ${t('visaTypes.work.title')}. Nous vous accompagnons de A à Z dans toutes vos démarches administratives pour garantir votre réussite.`,
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0c07?ixlib=rb-4.0.3",
      buttonText: "Découvrir les visas",
      buttonLink: "#visa",
      stats: [
        { value: "4", label: "Types de visas" },
        { value: "100%", label: "Suivi complet" },
        { value: "Rapide", label: "Traitement" }
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
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Texte */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  {slides[currentSlide].title}{' '}
                  {slides[currentSlide].highlight && (
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                      {slides[currentSlide].highlight}
                    </span>
                  )}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button size="lg" href={slides[currentSlide].buttonLink}>
                    {slides[currentSlide].buttonText}
                  </Button>
                  <Button size="lg" variant="outline" href="#contact">
                    {t('common.contact')}
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                  {slides[currentSlide].stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-3xl font-bold text-primary-500">{stat.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
              
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
                
                {/* Floating Badge */}
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
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots - Seulement les points de navigation */}
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