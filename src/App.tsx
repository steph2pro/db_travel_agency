
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollNavigation from './components/common/ScrollNavigation';
import WhatsAppButton from './components/common/WhatsAppButton';
import './i18n';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import VisaPage from './pages/VisaPage';
import DestinationsPage from './pages/DestinationsPage';
import PaymentPage from './pages/PaymentPage';
import ContactPage from './pages/ContactPage';

const offices = [
  { city: 'Yaoundé - Nkoabang', phone: '640 46 51 82' },
  { city: 'Douala - Cité des Palmiers', phone: '657 12 87 12' },
  { city: 'Bafoussam - Kamkop', phone: '640 10 19 74' },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/visa" element={<VisaPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <ScrollNavigation />
        <WhatsAppButton offices={offices} />
      </div>
    </Router>
  );
}

export default App;

