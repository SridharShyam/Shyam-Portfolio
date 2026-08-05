import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { ToastProvider } from './context/ToastContext';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Learning from './components/Learning';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <Vision />
        <Contact />
        <Footer />
        <ScrollToTop />
        <Toast />
      </div>
    </ToastProvider>
  );
}

export default App;
