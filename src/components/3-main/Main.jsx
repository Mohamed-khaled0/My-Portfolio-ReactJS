/* eslint-disable no-unused-vars */
import React from 'react'
import './main.css'

export default function Main() {
  return (
    <main className='flex'>
      <section className='flex left-section  '>
      <button className='active'>All projects</button>
      <button>HTML & CSS</button>
      <button>JavaScript</button>
      <button>ReactJS</button>
      </section>

    <section className='right-section flex  '>
    {["1","2","3",2,3,5].map((item) => {
      return(
        <article key={item} className='card '>
        <img  width={270} src="crud-js.png" alt="" />
        <div style={{width: "270px"}} className="box ">
          <h1 className='title'>Landing Page</h1>
          <p className='sub-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, magni.</p>
          <div className="flex icons">
            <div style={{gap:"10px"}} className='flex'>
            <div className='icon-link'></div>
            <div className='icon-github'></div>
            </div>
            <a className='link flex' href="">more 
              <span style={{alignSelf:"end"}} className='icon-arrow-right'></span>
            </a>
          </div>
        </div>
      </article>
      );
    })}
    </section>  
    </main>

  )
}
