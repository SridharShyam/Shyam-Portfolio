import { useEffect, useState, useCallback } from 'react';
import Navbar from './components/layout/Navbar';
import { ToastProvider } from './context/ToastContext';
import Toast from './components/ui/Toast';
import ScrollToTop from './components/layout/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Learning from './components/sections/Learning';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import IntroSequence from './components/ui/IntroSequence';
import { motion } from 'framer-motion';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [appMounted, setAppMounted] = useState(false);
  const [coinResult, setCoinResult] = useState('S');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showIntro]);

  // Wrap callbacks to prevent IntroSequence from re-running
  const handlePortalOpen = useCallback((result) => {
    setCoinResult(result);
    setAppMounted(true);
  }, []);

  const handleComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <ToastProvider>
      <div className="bg-background min-h-screen text-text overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth relative">
        
        {/* Intro Overlay */}
        {showIntro && (
          <IntroSequence 
             onPortalOpen={handlePortalOpen} 
             onComplete={handleComplete} 
          />
        )}

        {/* Main App Content - Delayed until Intro triggers onPortalOpen */}
        {appMounted && (
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={showIntro ? 'h-screen overflow-hidden' : ''}
          >
            <Toast />
            <Navbar />
            <Hero mode={coinResult} />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Learning />
            <Contact />
            <Footer />
            <ScrollToTop />
            <Toast />
          </motion.div>
        )}
      </div>
    </ToastProvider>
  );
}

export default App;
