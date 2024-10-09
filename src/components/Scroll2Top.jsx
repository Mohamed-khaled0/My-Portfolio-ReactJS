/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../index.css'

export default function Scroll2Top() {
  useEffect( () => {
    window.addEventListener("scroll" ,() => {
      let value = window.scrollY;
      if(value >300){
        setShowScrollBTN(true);
      }else{
      setShowScrollBTN(false);
      }
    })
  },[])

  let  [showScrollBTN, setShowScrollBTN] = useState(false);

  return (
    <>
        <a href="#up" style={{opacity:showScrollBTN? 1 : 0 ,transition:'1s'}}>
          <button className="scroll2Top icon-arrow-up"></button>
        </a>
    </>
  );
}

