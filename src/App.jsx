import { useEffect, useState, useCallback } from 'react';
import Navbar from './components/layout/Navbar';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
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
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Clean up any leftover hash on page load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const domainColors = {
      fashiontech: '#F43F5E',
      healthtech:  '#10B981',
      careertech:  '#3B82F6',
      govtech:     '#F59E0B',
    };
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const color = domainColors[hash] || '#f59e0b';
      document.documentElement.style.setProperty('--accent', color);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // run on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showIntro]);

  const handleComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="bg-background min-h-screen text-text overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth relative transition-colors duration-300">
          <AnimatePresence>
            {showIntro && <IntroSequence onComplete={handleComplete} />}
          </AnimatePresence>

          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Journey />
              <Learning />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
            <Toast />
          </div>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
