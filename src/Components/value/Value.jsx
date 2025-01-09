import React, { useState } from 'react'
import "./value.css"
import data from '../../utils/accordion'
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton, AccordionItemState } from 'react-accessible-accordion'
import {MdOutlineArrowDropDown} from 'react-icons/md'

export default function Value() { 
    const [show, setShow] = useState(false)
    function handleClick(i){
        console.log(i)
        setShow(show === i ? null : i)
    }
  return <section className='value'>
    <div className='value__container'>
        <div className='value__image'>
            <img src="value.png" alt="value image" />
        </div>
        <div className='value__text'>
            <div className='value__text__heading'>
                <h4 className='orangeText value__text__secondary'>Our Value</h4>
                <h3 className='primaryText value__text__primary'>Value we give to you</h3>
                <p className='value__text__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto consequuntur ipsam a, veniam doloremque? </p>
            </div>
            <div className='value__box__container'>
                <div className='value__box'>
                        {data.map((item,i)=><List handleClick={handleClick} i={i} show={i === show} setShow={setShow} key={i} item={item} />)}
                </div>
            </div>
        </div>
    </div>
  </section>
}

function List({item, show, handleClick, i}){
    return  <div className='value__box__item'>
        <div className='value__box__heading'>
            <div className='accordion_button'>{item.icon}</div>
            <div className='ac_head'>
                <p className='item_heading'>{item.heading}</p>
            </div>
            <div>
                <button onClick={()=>handleClick(i)} className='accordion_button'><MdOutlineArrowDropDown className='ac_icon' /></button>
            </div>
        </div>
        {show && <div className='item_description'> 
            <p className='item_details'>{item.detail}</p>
        </div>}
    </div>

}
