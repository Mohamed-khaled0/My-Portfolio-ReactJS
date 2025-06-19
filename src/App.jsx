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
import { useState } from 'react';


function App() {
  const [activeSection, setActiveSection] = useState('projects');

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
      <ProfileSidebar />
      <div className='main-content'>
        <Header setActiveSection={setActiveSection} activeSection={activeSection} />
        {sectionComponents[activeSection]}
        <Scroll2Top />
      </div>
      <Footer />
    </div>
  );
}

export default App;
