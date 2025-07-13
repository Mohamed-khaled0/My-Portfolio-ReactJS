import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/1-header/Header';
import Hero from './components/0-hero/Hero';
import About from './components/2-about/About';
import Skills from './components/3-skills/Skills';
import Projects from './components/4-projects/Projects';
import Experience from './components/5-experience/Experience';
import Certifications from './components/7-certificates/Certifications';
import Contact from './components/7-contact/Contact';
import Footer from './components/8-footer/Footer';
import ProjectDetails from './components/4-projects/ProjectDetails';
import Scroll2Top from './components/Scroll2Top';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle navigation clicks with smooth scrolling
  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app">
      <Header 
        setActiveSection={handleNavigation} 
        activeSection={activeSection} 
      />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className="section">
                <Hero />
              </section>
              
              <section id="about" className="section">
                <About />
              </section>
              
              <section id="skills" className="section">
                <Skills />
              </section>
              
              <section id="projects" className="section">
                <Projects />
              </section>
              
              <section id="experience" className="section">
                <Experience />
              </section>
              
              <section id="certifications" className="section">
                <Certifications />
              </section>
              
              <section id="contact" className="section">
                <Contact />
              </section>
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      
      <Footer />
      <Scroll2Top />
    </div>
  );
}

export default App;