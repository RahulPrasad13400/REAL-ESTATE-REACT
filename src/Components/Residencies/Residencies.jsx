import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"  // recidency section ile swiper ine vendi ulla library 
import "swiper/css" // ith aa library de kude ulla css ane 
import "./Residencies.css"
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common'
import { use } from 'react'

export default function Residencies() {
  return <section className='section__residencies'>
    <div className='paddings innerWidth residencies__container'>
        <div className='residencies__header flexColStart'>
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Residencies</span>
        </div>  
        <Swiper {...sliderSettings}>
            <SliderButton />
            {data.map((card,i)=>{
                return <SwiperSlide key={i}>
                    <div className='flexColStart r-card'>
                    
                        <img className='slider__image' src={card.image} alt="Aliva Priva Jardin" />
                        
                    
                        <span className='secondaryText r-price'>
                            <span style={{color : "orange"}}>$</span>
                            <span>{card.price}</span>
                        </span>
                        <span className='primaryText'>{card.name}</span>
                        <span className='secondaryText'>{card.detail}</span>
                    
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    </div>
  </section>
}

function SliderButton(){
    const swiper = useSwiper()
    return <div className='r-button'>
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
}