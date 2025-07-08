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
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('activeSection') || 'home';
  });
  
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  // Single column layout - no sidebar
  const sectionComponents = {
    home: <Home />,
    projects: <Main />,
    skills: <Skills />,
    certifications: <Certifications />,
    experience: <Experience />,
    education: <Education />,
    contact: <Contact />,
  };

  return (
    <div className='single-column-layout'>
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={
            <div className="sections-container">
              {/* Render all sections in order for single-page flow */}
              <section id="home" className={activeSection === 'home' ? 'active-section' : ''}>
                <Home />
              </section>
              <section id="projects" className={activeSection === 'projects' ? 'active-section' : ''}>
                <Main />
              </section>
              <section id="skills" className={activeSection === 'skills' ? 'active-section' : ''}>
                <Skills />
              </section>
              <section id="certifications" className={activeSection === 'certifications' ? 'active-section' : ''}>
                <Certifications />
              </section>
              <section id="experience" className={activeSection === 'experience' ? 'active-section' : ''}>
                <Experience />
              </section>
              <section id="education" className={activeSection === 'education' ? 'active-section' : ''}>
                <Education />
              </section>
              <section id="contact" className={activeSection === 'contact' ? 'active-section' : ''}>
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