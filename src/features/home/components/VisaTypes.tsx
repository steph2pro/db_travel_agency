import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faUmbrellaBeach, 
  faHeartbeat, 
  faBriefcase,
  faCheckCircle,
  faShieldHeart,
} from '@fortawesome/free-solid-svg-icons';
import Section from '../../../components/common/Section';

interface VisaCardProps {
  icon: any;
  title: string;
  description: string;
  image: string;
  color: string;
  index: number;
  stats?: { value: string; label: string }[];
  features?: string[];
}

const VisaCard: React.FC<VisaCardProps> = ({ icon, title, description, image, color, index, stats, features }) => {
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
      className="group relative h-[520px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
    >
      {/* Image de fond avec opacité réduite */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay avec dégradé et opacité réduite */}
        <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-70 transition-all duration-300`} />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* En-tête avec icône */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="flex justify-between items-start"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/30">
              <FontAwesomeIcon 
                icon={icon} 
                className="text-4xl text-white drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Badge de succès */}
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="flex items-center gap-1 text-xs text-white">
              <FontAwesomeIcon icon={faShieldHeart} className="text-xs" />
              <span>100% sécurisé</span>
            </div>
          </div>
        </motion.div>

        {/* Texte central */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Caractéristiques */}
          {features && (
            <div className="space-y-2">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-2 text-white/90 text-sm"
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-xs" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Statistiques */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className="grid grid-cols-2 gap-3 pt-4 border-t border-white/20"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/80">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-45 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

const VisaTypes: React.FC = () => {
  const { t } = useTranslation();
  
  const visas = [
    {
      icon: faGraduationCap,
      title: t('visaTypes.student.title'),
      description: t('visaTypes.student.description'),
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3',
      color: 'from-blue-600 to-cyan-600',
      features: [
        t('visaTypes.student.features.0'),
        t('visaTypes.student.features.1'),
        t('visaTypes.student.features.2'),
        t('visaTypes.student.features.3')
      ],
      stats: [
        { value: '98%', label: t('visaTypes.student.stats.0') },
        { value: '500+', label: t('visaTypes.student.stats.1') }
      ]
    },
    {
      icon: faUmbrellaBeach,
      title: t('visaTypes.tourist.title'),
      description: t('visaTypes.tourist.description'),
      image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3',
      color: 'from-green-600 to-emerald-600',
      features: [
        t('visaTypes.tourist.features.0'),
        t('visaTypes.tourist.features.1'),
        t('visaTypes.tourist.features.2'),
        t('visaTypes.tourist.features.3')
      ],
      stats: [
        { value: '1000+', label: t('visaTypes.tourist.stats.0') },
        { value: '50+', label: t('visaTypes.tourist.stats.1') }
      ]
    },
    {
      icon: faHeartbeat,
      title: t('visaTypes.medical.title'),
      description: t('visaTypes.medical.description'),
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3',
      color: 'from-red-600 to-pink-600',
      features: [
        t('visaTypes.medical.features.0'),
        t('visaTypes.medical.features.1'),
        t('visaTypes.medical.features.2'),
        t('visaTypes.medical.features.3')
      ],
      stats: [
        { value: '24/7', label: t('visaTypes.medical.stats.0') },
        { value: '100+', label: t('visaTypes.medical.stats.1') }
      ]
    },
    {
      icon: faBriefcase,
      title: t('visaTypes.work.title'),
      description: t('visaTypes.work.description'),
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3',
      color: 'from-purple-600 to-indigo-600',
      features: [
        t('visaTypes.work.features.0'),
        t('visaTypes.work.features.1'),
        t('visaTypes.work.features.2'),
        t('visaTypes.work.features.3')
      ],
      stats: [
        { value: '95%', label: t('visaTypes.work.stats.0') },
        { value: '200+', label: t('visaTypes.work.stats.1') }
      ]
    },
  ];

  return (
    <Section id="visa" title={t('visaTypes.title')} subtitle={t('visaTypes.subtitle')}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visas.map((visa, index) => (
          <VisaCard key={index} {...visa} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default VisaTypes;

