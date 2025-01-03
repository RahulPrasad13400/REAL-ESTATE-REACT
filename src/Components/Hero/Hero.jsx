import React from 'react'
import {HiLocationMarker} from "react-icons/hi"
import "./hero.css"
import CountUp from 'react-countup'
export default function hero() {
  return <section className='hero-wrapper'>
    <div className='paddings innerWidth hero-container'> 
      <div className='hero-grid'>
        <div className='hero-left'>
          <div className='hero-title'>
            <div className='orange-circle'/>
            <h1><span>Discover</span><span>Most Suitable</span><span>Propery</span></h1>
          </div>
          <div className='flexColStart hero-description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Iure quos porro architecto enim odio sequi modi. Veritatis</p> 
          </div>
          <div className='searchBar'> 
            <HiLocationMarker className='hero-icon' color="var(--blue)" size={25}/>
            <input type="text" />
            <button className='button'>search</button>
          </div>
        </div>
        <div className='hero-right'>
            <div className="hero-image-container">
              <img src="hero-image.png" alt="hero image" className='hero-image' />
            </div>
        </div>
        <div className='hero-stat'>
          <div className='hero-premium'>
              <CountUp className='countUp'  start={500} end={1000} duration={4} />
            <span>
              <span style={{color :"orange"}}> +</span>
              <p>Premium Products</p>
            </span>
          </div>
          <div className='hero-premium'>
              <CountUp className='countUp' start={1000} end={2000} duration={4} />
            <span>
              <span style={{color :"orange"}}> +</span>
              <p>Happy Customers</p>
            </span>
          </div>
          <div className='hero-premium'>
              <CountUp className='countUp' start={30} end={50} duration={4} />
            <span>
              <span style={{color :"orange"}}> +</span>
              <p>Award Winning</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
}
