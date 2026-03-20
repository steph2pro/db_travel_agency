import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import VisaTypes from './components/VisaTypes';
import PaymentOptions from './components/PaymentOptions';
import Destinations from './components/Destinations';
import Partners from './components/Partners';
import Contact from './components/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <VisaTypes />
      <PaymentOptions />
      <Destinations />
      <Partners />
      <Contact />
    </main>
  );
};

export default HomePage;