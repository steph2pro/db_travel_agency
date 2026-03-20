import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const offices = [
    {
      city: t('contact.yaounde'),
      address: 'Nkoabang',
      phone: '640 46 51 82',
      email: 'yaounde@dbtravelagency.com',
      map: 'https://maps.google.com/?q=Yaoundé+Nkoabang',
    },
    {
      city: t('contact.douala'),
      address: 'Cité des Palmiers',
      phone: '657 12 87 12',
      email: 'douala@dbtravelagency.com',
      map: 'https://maps.google.com/?q=Douala+Cité+des+Palmiers',
    },
    {
      city: t('contact.bafoussam'),
      address: 'Kamkop (face station Tradex)',
      phone: '640 10 19 74',
      email: 'bafoussam@dbtravelagency.com',
      map: 'https://maps.google.com/?q=Bafoussam+Kamkop',
    },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Envoyez-nous un message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <Button className="w-full">
              Envoyer le message
            </Button>
          </form>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Opening Hours */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('contact.hours')}</h3>
            <p className="text-lg mb-2">📅 {t('contact.weekdays')}</p>
            <p className="text-lg">📅 {t('contact.sunday')}</p>
          </div>
          
          {/* Offices */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{t('contact.offices')}</h3>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-bold text-primary-500 mb-2">{office.city}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">📍 {office.address}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">📞 {office.phone}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">✉️ {office.email}</p>
                  <a
                    href={office.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center"
                  >
                    Voir sur Google Maps →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;