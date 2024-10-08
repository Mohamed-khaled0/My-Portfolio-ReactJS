/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import './hero.css'


export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-section ">
      <div className="parent-avatar flex">
        <img  className="avatar" src="./myimg.jpg" alt="" />
      </div>
      <h1 className='title'>Hi, Im Mohamed Khaled ,Front End Developer </h1>
      <p className='sub-title'>I'm currently intern as a web developer at Information Technology Institute ITI. I spend my day working on projects with HTML , CSS , Tailwind , JavaScript , TypeScript , React.js .</p>
      <button><a href="#" className='icon-download'></a> Resume</button>
      <button><a href="#" className='icon-github'></a> Github</button>
      <button><a href="#" className='icon-linkedin'></a> LinkedIn</button>
      </div>


      <div className="right-section animation border">
      BBBBBBBBBB
      </div>
    </section>
  )
}
