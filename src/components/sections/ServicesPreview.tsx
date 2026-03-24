import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPassport, 
  faLanguage, 
  faChalkboardUser,
  faCompass,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import Button from '../common/Button';

const ServicesPreview: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { icon: faPassport, title: t('services.visa.title'), description: t('services.visa.description') },
    { icon: faLanguage, title: t('services.german.title'), description: t('services.german.description') },
    { icon: faChalkboardUser, title: t('services.french.title'), description: t('services.french.description') },
    { icon: faCompass, title: t('services.guidance.title'), description: t('services.guidance.description') }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={service.icon} className="text-3xl text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
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

export default ServicesPreview;