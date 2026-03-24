import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faHandHoldingUsd, 
  faChartLine,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import Button from '../common/Button';

const PaymentPreview: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const options = [
    { icon: faShieldAlt, title: t('payment.blocked.title'), price: t('payment.blocked.price'), accentColor: 'from-blue-500 to-cyan-500' },
    { icon: faHandHoldingUsd, title: t('payment.partial.title'), price: t('payment.partial.price'), popular: true, accentColor: 'from-primary-500 to-secondary-500' },
    { icon: faChartLine, title: t('payment.support.title'), price: t('payment.support.price'), accentColor: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            {t('payment.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('payment.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                option.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  Populaire
                </div>
              )}
              <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${option.accentColor} rounded-2xl flex items-center justify-center mb-4`}>
                <FontAwesomeIcon icon={option.icon} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-white">{option.title}</h3>
              <p className="text-2xl font-bold text-center text-primary-500 mb-4">{option.price}</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                  <span>Paiement sécurisé</span>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link to="/payment">
            <Button variant="outline" className="gap-2">
              {t('common.learnMore')}
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default PaymentPreview;