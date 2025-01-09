import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <section className='contact'>
      <div className='contact_container'>
            <div className='contact_left'>
                <div className='contact_text'>
                    <h2 className='contact_secondary'>Our Contact Us</h2>
                    <h1 className='primaryText contact_primary'>Easy to connect Us</h1>
                    <p className='contact_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
                </div>
                <div className='contact_boxes'>

                </div>
            </div>
            <div className='contact_right'>
                <div className='contact_imageContainer'>
                    <img className='contact_image' src="contact.jpg" alt="" />
                </div>
            </div>
      </div>
    </section>
  )
}
