
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0B] text-white min-h-screen relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation activeSection={activeSection} />
      
      <section id="hero" className="relative z-10">
        <Hero />
      </section>
      
      <section id="about" className="relative z-10">
        <About />
      </section>
      
      <section id="skills" className="relative z-10">
        <Skills />
      </section>
      
      <section id="projects" className="relative z-10">
        <Projects />
      </section>
      
      <section id="contact" className="relative z-10">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
