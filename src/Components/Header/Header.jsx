import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import "./header.css"
export default function Header() {
  const [show, setShow] = useState(false)

  
  return <section className='h-wrapper'> 
    <div className='h-container flexCenter paddings innerWidth'>
        <img src="logo.png" alt="logo" />
        <div className={`header-menu ${show && 'show'}`}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='button'>contact</button>
        </div>
        <div className='menu__icon' onClick={()=>setShow(show=>!show)}>
            <BiMenuAltRight size={30}/>
        </div>
    </div>
  </section>
}
