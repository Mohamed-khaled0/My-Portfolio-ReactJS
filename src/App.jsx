import Home from './components/0-home/Home';
import Header from './components/1-header/Header'
import Main from './components/3-main/Main'
import Contact from './components/8-contact/Contact'
import Scroll2Top from './components/Scroll2Top.jsx';
import Certifications from './components/7-certificates/Certifications'
import Education from './components/6-education/Education'
import Experience from './components/5-experience/Experience'
import ProfileSidebar from './components/ProfileSidebar';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectDetails from './components/3-main/ProjectDetails';

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('activeSection') || 'home';
  });
  
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hideSidebar = isMobile && location.pathname.startsWith('/project/');

  const sectionComponents = {
    home: <Home />,
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