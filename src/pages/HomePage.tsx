import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../features/home/components/Hero';
import ServicesPreview from '../components/sections/ServicesPreview';
import Partners from '../features/home/components/Partners';
// import Contact from '../features/home/components/Contact';
import VisaPreview from '../components/sections/VisaPreview';
import DestinationsPreview from '../components/sections/DestinationsPreview';
import PaymentPreview from '../components/sections/PaymentPreview';

const HomePage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesPreview />
      <VisaPreview />
      <DestinationsPreview />
      <PaymentPreview />
      <Partners />
      {/* <Contact /> */}
    </motion.main>
  );
};

export default HomePage;