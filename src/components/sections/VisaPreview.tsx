import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faUmbrellaBeach, 
  faHeartbeat, 
  faBriefcase,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import Button from '../common/Button';

const VisaPreview: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const visas = [
    { icon: faGraduationCap, title: t('visaTypes.student.title'), color: 'from-blue-500 to-cyan-500' },
    { icon: faUmbrellaBeach, title: t('visaTypes.tourist.title'), color: 'from-green-500 to-emerald-500' },
    { icon: faHeartbeat, title: t('visaTypes.medical.title'), color: 'from-red-500 to-pink-500' },
    { icon: faBriefcase, title: t('visaTypes.work.title'), color: 'from-purple-500 to-indigo-500' }
  ];

  return (
    <section className="py-20">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            {t('visaTypes.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('visaTypes.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visas.map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
            >
              <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${visa.color} rounded-2xl flex items-center justify-center mb-4`}>
                <FontAwesomeIcon icon={visa.icon} className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{visa.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/visa">
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

export default VisaPreview;