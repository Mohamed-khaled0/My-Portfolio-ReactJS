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
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'


function App() {
  const { t } = useTranslation();
  return (
    <div  id="up" className='container'>
      <Header />
      <Hero />
      <LanguageSwitcher/>
      <div className='divider'/>
      <Main />
      <div className='divider'/>
      <Skills />
     <div className='divider'/>
     <Experience />
     <div className='divider'/>
     <Education  />
      <div className='divider'/>
      <Certifications  />
      <div className='divider'/>
      <Contact />
      <div className='divider'/>
      <Footer />
      <Scroll2Top />
    </div>
  )
}

export default App;
