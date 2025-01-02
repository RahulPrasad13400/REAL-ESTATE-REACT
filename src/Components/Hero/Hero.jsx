import React from 'react'
import "./hero.css"
export default function hero() {
  return <section className='hero-wrapper'>
    <div className='paddings innerWidth hero-container'> 
      <div className='hero-grid'>
        <div className='hero-left flexCenter'>
            <h1>Discover Most Suitable Propery</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quos porro architecto enim odio sequi modi. Veritatis repellat</p>
            <input type="text" />
        </div>
        <div className='hero-right'>
            <div className="hero-image-container">
              <img src="hero-image.png" alt="hero image" className='hero-image' />
            </div>
        </div>
      </div>
    </div>
  </section>
}
