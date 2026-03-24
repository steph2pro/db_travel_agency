import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faCheckCircle,
  faPaperPlane,
  faHeadset,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const offices = [
    {
      city: t('contact.yaounde'),
      address: t('contact.address.yaounde'),
      phone: '640 46 51 82',
      email: 'yaounde@dbtravelagency.com',
      map: 'https://maps.google.com/?q=Yaoundé+Nkoabang'
    },
    {
      city: t('contact.douala'),
      address: t('contact.address.douala'),
      phone: '657 12 87 12',
      email: 'douala@dbtravelagency.com',
      map: 'https://maps.google.com/?q=Douala+Cité+des+Palmiers'
    },
    {
      city: t('contact.bafoussam'),
      address: t('contact.address.bafoussam'),
      phone: '640 10 19 74',
      email: 'bafoussam@dbtravelagency.com',
      map: 'https://maps.google.com/?q=Bafoussam+Kamkop'
    }
  ];

  const generalEmails = [
    { email: 'sales@dbdigitalagency.com', icon: faBuilding, type: 'Sales', description: 'For business inquiries and partnerships' },
    { email: 'contact@dbdigitalagency.com', icon: faEnvelope, type: 'General', description: 'General questions and information' },
    { email: 'support@dbdigitalagency.com', icon: faHeadset, type: 'Support', description: 'Technical support and assistance' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20"
    >
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-4 md:mb-6"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="text-2xl md:text-4xl text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-3 md:mb-4"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 dark:text-white">
              {t('contact.form.title')}
            </h2>
            
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 md:mb-6 p-3 md:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center gap-2 md:gap-3"
              >
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm md:text-base" />
                <span className="text-green-700 dark:text-green-400 text-sm md:text-base">
                  {t('contact.form.success')}
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                  {t('contact.form.subject')} *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                >
                  <option value="">{t('common.selectSubject')}</option>
                  <option value="visa">{t('contact.form.subjects.visa')}</option>
                  <option value="courses">{t('contact.form.subjects.courses')}</option>
                  <option value="ticket">{t('contact.form.subjects.ticket')}</option>
                  <option value="support">{t('contact.form.subjects.support')}</option>
                  <option value="other">{t('contact.form.subjects.other')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              
              <Button type="submit" className="w-full">
                {t('common.sendMessage')}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            {/* General Contact Section */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faHeadset} className="text-xl md:text-2xl" />
                {t('contact.generalContact')}
              </h3>
              <p className="text-sm md:text-base mb-4 md:mb-6 opacity-90">
                {t('contact.generalDescription')}
              </p>
              <div className="space-y-3 md:space-y-4">
                {generalEmails.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white/10 rounded-lg p-3 md:p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={item.icon} className="text-xl md:text-2xl" />
                      <div className="flex-1">
                        <p className="text-xs md:text-sm opacity-75">{t(`contact.emailTypes.${item.type.toLowerCase()}`)}</p>
                        <a 
                          href={`mailto:${item.email}`}
                          className="text-sm md:text-base font-semibold hover:underline transition-all break-all"
                        >
                          {item.email}
                        </a>
                        <p className="text-xs opacity-75 mt-1 hidden sm:block">{t(`contact.emailDescriptions.${item.type.toLowerCase()}`)}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="!bg-white/20 !border-white/30 !text-white hover:!bg-white/30 self-start sm:self-center"
                      onClick={() => window.location.href = `mailto:${item.email}`}
                    >
                      {t('common.email')}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-xl md:text-2xl" />
                {t('contact.hours')}
              </h3>
              <div className="space-y-2">
                <p className="text-base md:text-lg">📅 {t('contact.weekdays')}</p>
                <p className="text-base md:text-lg">📅 {t('contact.sunday')}</p>
              </div>
            </div>
            
            {/* Office Locations */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <FontAwesomeIcon icon={faBuilding} className="text-primary-500 text-xl md:text-2xl" />
                {t('contact.offices')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg md:text-xl font-bold text-primary-500 mb-2 md:mb-3">{office.city}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-start gap-2 text-sm md:text-base">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span>{office.address}</span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-2 text-sm md:text-base">
                      <FontAwesomeIcon icon={faPhone} className="text-primary-500 flex-shrink-0" />
                      <span>📞 {office.phone}</span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex items-center gap-2 text-sm md:text-base break-all">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary-500 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary-500 transition-colors">
                        {office.email}
                      </a>
                    </p>
                    <a
                      href={office.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center gap-1 text-sm md:text-base"
                    >
                      {t('common.viewMap')} →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Response Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 md:p-6 text-center"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl md:text-3xl mb-2 md:mb-3" />
              <p className="text-green-700 dark:text-green-400 font-medium text-sm md:text-base">
                {t('contact.quickResponse')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.main>
  );
};

export default ContactPage;