import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPassport } from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import Button from '../common/Button';

const DestinationsPreview: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);

  const destinations = [
    { name: t('destinations.schengen'), flag: '🇪🇺', color: 'from-blue-700 to-blue-500', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3' },
    { name: t('destinations.canada'), flag: '🇨🇦', color: 'from-red-700 to-red-500', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3' },
    { name: t('destinations.usa'), flag: '🇺🇸', color: 'from-blue-800 to-red-700', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3' },
    { name: t('destinations.turkey'), flag: '🇹🇷', color: 'from-red-600 to-orange-500', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3' }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            {t('destinations.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('destinations.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-72 h-80 rounded-2xl overflow-hidden shadow-xl group"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-70`} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-4xl mb-2">{dest.flag}</div>
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <div className="inline-flex items-center gap-1 mt-2 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <FontAwesomeIcon icon={faPassport} className="text-xs" />
                    <span>{t('destinations.visaAvailable')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link to="/destinations">
            <Button variant="outline" className="gap-2">
              {t('common.learnMore')}
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Button>
          </Link>
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

export default DestinationsPreview;