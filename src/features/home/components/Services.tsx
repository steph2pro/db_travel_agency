import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPassport, 
  faLanguage, 
  faChalkboardUser,
  faCompass,
  faHouseChimney,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import Section from '../../../components/common/Section';

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[420px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Icône avec effet de verre */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
          className="w-24 h-24 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-500/40 transition-all duration-300 shadow-lg border border-white/30"
        >
          <FontAwesomeIcon 
            icon={icon} 
            className="text-4xl text-white drop-shadow-lg"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="space-y-3"
        >
          <h3 className="text-2xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          
          {/* Badge de service */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
          >
            <span>Service premium</span>
            <span>✨</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-45 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: faPassport,
      title: t('services.visa.title'),
      description: t('services.visa.description'),
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3'
    },
    {
      icon: faLanguage,
      title: t('services.german.title'),
      description: t('services.german.description'),
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3'
    },
    {
      icon: faChalkboardUser,
      title: t('services.french.title'),
      description: t('services.french.description'),
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3'
    },
    {
      icon: faCompass,
      title: t('services.guidance.title'),
      description: t('services.guidance.description'),
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3'
    },
    {
      icon: faHouseChimney,
      title: t('services.accommodation.title'),
      description: t('services.accommodation.description'),
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3'
    },
    {
      icon: faPlane,
      title: t('services.tickets.title'),
      description: t('services.tickets.description'),
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3'
    },
  ];

  return (
    <Section id="services" title={t('services.title')} subtitle={t('services.subtitle')}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
