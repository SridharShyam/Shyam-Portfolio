import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Innovation from './components/Innovation';
import Learning from './components/Learning';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-text overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Innovation />
      <Learning />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
