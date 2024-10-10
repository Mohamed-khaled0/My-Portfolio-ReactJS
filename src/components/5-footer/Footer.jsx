/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className='flex'>
        <ul className='flex'>
          <li><a href="#main">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <p>Created by Mohamed Khaled ,All rights reserved.</p>
    </footer>
  )
}
