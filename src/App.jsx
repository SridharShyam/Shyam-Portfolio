import Navbar from './components/Navbar';
import { ToastProvider } from './context/ToastContext';
import Toast from './components/Toast';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Innovation from './components/Innovation';
import Learning from './components/Learning';
import CodingStats from './components/CodingStats';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ToastProvider>
      <div className="bg-background min-h-screen text-text overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth">
        <Toast />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Innovation />
        <Learning />
        <CodingStats />
        <Vision />
        <Contact />
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
