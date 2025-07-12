import Home from './components/0-home/Home';
import Header from './components/1-header/Header'
import Main from './components/3-main/Main'
import Contact from './components/8-contact/Contact'
import Scroll2Top from './components/Scroll2Top.jsx';
import Certifications from './components/7-certificates/Certifications'
import Education from './components/6-education/Education'
import Experience from './components/5-experience/Experience'
import Skills from './components/4-skills/Skills'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectDetails from './components/3-main/ProjectDetails';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'certifications', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Only add scroll listener on main page
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle navigation clicks with smooth scrolling
  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='single-column-layout'>
      <Header 
        setActiveSection={handleNavigation} 
        activeSection={activeSection} 
      />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={
            <div className="sections-container">
              <section id="home" className="section-wrapper home-section-wrapper">
                <Home />
              </section>
              
              <section id="projects" className="section-wrapper projects-section-wrapper">
                <Main />
              </section>
              
              <section id="skills" className="section-wrapper skills-section-wrapper">
                <Skills />
              </section>
              
              <section id="certifications" className="section-wrapper certifications-section-wrapper">
                <Certifications />
              </section>
              
              <section id="experience" className="section-wrapper experience-section-wrapper">
                <Experience />
              </section>
              
              <section id="education" className="section-wrapper education-section-wrapper">
                <Education />
              </section>
              
              <section id="contact" className="section-wrapper contact-section-wrapper">
                <Contact />
              </section>
            </div>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Scroll2Top />
      </main>
    </div>
  );
}

export default App;