/* eslint-disable no-unused-vars */
import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/3-main/Main'
import Contact from './components/8-contact/Contact'
import Footer from './components/9-footer/Footer'
import Scroll2Top from './components/Scroll2Top.jsx';
import Certifications from './components/7-certificates/Certifications'
import Education from './components/6-education/Education'
import Skills from './components/4-skills/Skills'
import Experience from './components/5-experience/Experience'
import ProfileSidebar from './components/ProfileSidebar';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectDetails from './components/3-main/ProjectDetails';

function App() {
  const [activeSection, setActiveSection] = useState('projects');
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide sidebar on project details page on mobile
  const hideSidebar = isMobile && location.pathname.startsWith('/project/');

  // Map section keys to components
  const sectionComponents = {
    projects: <Main />,
    certifications: <Certifications />,
    experience: <Experience />,
    education: <Education />,
    contact: <Contact />,
  };

  return (
    <div className='app-layout'>
      {!hideSidebar && <ProfileSidebar />}
      <div className='main-content'>
        <Header setActiveSection={setActiveSection} activeSection={activeSection} />
        <Routes>
          <Route path="/" element={sectionComponents[activeSection]} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Scroll2Top />
      </div>
    </div>
  );
}

export default App;
