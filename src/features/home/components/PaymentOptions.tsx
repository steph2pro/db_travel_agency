import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faCoins, 
  faShieldAlt, 
  faHandHoldingUsd,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

// Composant pour l'animation de comptage
const AnimatedNumber: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Extraire le nombre de la chaîne (ex: "4 000 000 FCFA" -> 4000000)
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

  // Formater le nombre avec des espaces tous les 3 chiffres
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <span ref={ref}>
      {isInView ? `${formatNumber(count)} ${suffix}` : `0 ${suffix}`}
    </span>
  );
};

interface PaymentCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  index: number;
  icon?: any;
  accentColor?: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  popular, 
  index,
  icon,
  accentColor = 'from-primary-500 to-secondary-500'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
        popular ? 'ring-2 ring-primary-500 transform scale-105 z-10' : ''
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-bl-2xl text-sm font-bold z-20">
          🔥 Populaire
        </div>
      )}
      
      {/* Dégradé de fond animé */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className="relative z-10 p-8">
        {/* Icône */}
        {icon && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl flex items-center justify-center mb-6"
          >
            <FontAwesomeIcon icon={icon} className="text-3xl text-primary-500" />
          </motion.div>
        )}
        
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        
        {/* Prix avec animation */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            <AnimatedNumber value={price} />
          </span>
        </motion.div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{description}</p>
        
        {/* Caractéristiques */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + (idx * 0.1) }}
              className="flex items-center text-gray-600 dark:text-gray-300 text-sm"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-green-500 mr-3" />
              {feature}
            </motion.li>
          ))}
        </ul>
        
        {/* Bouton d'action */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '#contact'}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
            popular
              ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-primary-500 hover:text-white'
          }`}
        >
          Choisir cette formule
        </motion.button>
      </div>
      
      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-45 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

const PaymentOptions: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const options = [
    {
      title: t('payment.blocked.title'),
      price: t('payment.blocked.price'),
      description: t('payment.blocked.description'),
      features: t('payment.blocked.features', { returnObjects: true }) as string[],
      icon: faShieldAlt,
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('payment.partial.title'),
      price: t('payment.partial.price'),
      description: t('payment.partial.description'),
      features: t('payment.partial.features', { returnObjects: true }) as string[],
      popular: true,
      icon: faHandHoldingUsd,
      accentColor: 'from-primary-500 to-secondary-500'
    },
    {
      title: t('payment.support.title'),
      price: t('payment.support.price'),
      description: t('payment.support.description'),
      features: t('payment.support.features', { returnObjects: true }) as string[],
      icon: faChartLine,
      accentColor: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-6"
          >
            <FontAwesomeIcon icon={faCoins} className="text-3xl text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            {t('payment.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('payment.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {options.map((option, index) => (
            <PaymentCard key={index} {...option} index={index} />
          ))}
        </div>
        
        {/* Badge de sécurité */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
          <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {t('payment.security')}
          </span>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentOptions;