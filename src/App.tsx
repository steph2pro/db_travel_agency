
import {  AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './features/home';
import './i18n';
import ScrollNavigation from './components/common/ScrollNavigation';

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <HomePage />
        <Footer />
        
        <ScrollNavigation />
      </div>
    </AnimatePresence>
  );
}

export default App;