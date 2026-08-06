import { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    // Prevent the browser from automatically restoring the scroll position on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to the absolute top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <ToastProvider>
      <div className="bg-background min-h-screen text-text overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth">
        <Toast />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Learning />
        <Contact />
        <Footer />
        <ScrollToTop />
        <Toast />
      </div>
    </ToastProvider>
  );
}

export default App;
