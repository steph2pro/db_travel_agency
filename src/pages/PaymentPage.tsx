import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faShieldAlt, 
  faHandHoldingUsd,
  faChartLine,
  faMoneyBillWave,
  faWallet,
  faFileInvoice,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
// import paymentHero from '../assets/images/payment-hero.png';

const AnimatedNumber: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const numericValue = parseInt(value.replace(/\s/g, '').replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9\s]/g, '').trim();

  useEffect(() => {
    if (isInView && numericValue) {
      let start = 0;
      const increment = numericValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <span ref={ref}>
      {isInView ? `${formatNumber(count)} ${suffix}` : `0 ${suffix}`}
    </span>
  );
};

const PaymentPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  let paymentHero='https://tse1.mm.bing.net/th/id/OIP.jbu6N2VLh8hMeewjYVIlmwHaGa?rs=1&pid=ImgDetMain&o=7&rm=3'
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

  const options = [
    {
      icon: faShieldAlt,
      title: t('payment.blocked.title'),
      price: t('payment.blocked.price'),
      description: t('payment.blocked.description'),
      features: t('payment.blocked.features', { returnObjects: true }) as string[],
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      icon: faHandHoldingUsd,
      title: t('payment.partial.title'),
      price: t('payment.partial.price'),
      description: t('payment.partial.description'),
      features: t('payment.partial.features', { returnObjects: true }) as string[],
      popular: true,
      accentColor: 'from-primary-500 to-secondary-500'
    },
    {
      icon: faChartLine,
      title: t('payment.support.title'),
      price: t('payment.support.price'),
      description: t('payment.support.description'),
      features: t('payment.support.features', { returnObjects: true }) as string[],
      accentColor: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = t('payment.benefits', { returnObjects: true }) as string[];

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
                      {t('payment.title')}{' '}
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {t('payment.subtitle')}
                      </span>
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8"
                    >
                      {t('payment.subtitle')}
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
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">3</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.plans')}</p>
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">0</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.noAdvance')}</p>
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary-500">100%</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.secure')}</p>
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
                      <img src={paymentHero} alt="Payment" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                    >
                      <p className="text-2xl font-bold text-primary-500">3</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.plans')}</p>
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
                    <img src={paymentHero} alt="Payment" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
                  </div>
                  <div className="relative z-10 p-5 min-h-[500px] flex flex-col justify-center">
                    <motion.h1
                      variants={itemVariants}
                      className="text-2xl font-bold mb-3 text-white"
                    >
                      {t('payment.title')}{' '}
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {t('payment.subtitle')}
                      </span>
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-sm text-white/90 mb-5"
                    >
                      {t('payment.subtitle')}
                    </motion.p>
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-2"
                    >
                      <Button size="sm" to="#payment-options">
                        Voir les options
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
                        <p className="text-lg font-bold text-primary-500">3</p>
                        <p className="text-xs text-white/70">{t('hero.stats.plans')}</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary-500">0</p>
                        <p className="text-xs text-white/70">{t('hero.stats.noAdvance')}</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary-500">100%</p>
                        <p className="text-xs text-white/70">{t('hero.stats.secure')}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Payment Options */}
      <Container>
        <div id="payment-options" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch py-20">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                option.popular ? 'ring-2 ring-primary-500 transform scale-105 z-10' : ''
              }`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-bl-2xl text-sm font-bold z-20">
                  🔥 Populaire
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${option.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={option.icon} className="text-3xl text-primary-500" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{option.title}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    <AnimatedNumber value={option.price} />
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{option.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button to="/contact" className="w-full">
                  {t('common.chooseFormula')}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              {t('payment.whyTitle')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full flex items-center justify-center mb-3">
                    {index === 0 && <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl text-primary-500" />}
                    {index === 1 && <FontAwesomeIcon icon={faFileInvoice} className="text-2xl text-primary-500" />}
                    {index === 2 && <FontAwesomeIcon icon={faWallet} className="text-2xl text-primary-500" />}
                    {index === 3 && <FontAwesomeIcon icon={faBuilding} className="text-2xl text-primary-500" />}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 pb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
            <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {t('payment.security')}
            </span>
          </div>
        </motion.div>
      </Container>
    </motion.main>
  );
};

export default PaymentPage;