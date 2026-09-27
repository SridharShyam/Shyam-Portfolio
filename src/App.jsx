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
import LiveModelSandbox from './components/ui/LiveModelSandbox';
import TerminalModal from './components/ui/TerminalModal';
import { Terminal } from 'lucide-react';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [appMounted, setAppMounted] = useState(false);
  const [coinResult, setCoinResult] = useState('S');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Clean up any leftover hash like /#journey on page load / intro sequence
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
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
    <ThemeProvider>
      <ToastProvider>
        <div className="bg-background min-h-screen text-text overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth relative transition-colors duration-300">
        
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
            <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />
            <Hero mode={coinResult} />
            <About />
            <Skills />
            <Projects />
            <LiveModelSandbox />
            <Journey />
            <Learning />
            <Contact />
            <Footer />
            <ScrollToTop />

            {/* Novelty #1: Developer CLI Terminal Trigger Button */}
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="fixed bottom-6 left-6 z-40 px-3.5 py-2.5 rounded-full bg-surface border border-border text-cyan-400 hover:text-heading hover:border-cyan-400 font-mono text-xs shadow-xl backdrop-blur-md flex items-center gap-2 group transition-all duration-300 hover:scale-105 cursor-pointer"
              title="Launch Developer CLI Terminal (Novelty #1)"
            >
              <Terminal size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline font-bold">CLI_TERMINAL</span>
            </button>

            {/* Developer CLI Modal */}
            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
          </motion.div>
        )}
      </div>
    </ToastProvider>
  </ThemeProvider>
  );
}

export default App;
