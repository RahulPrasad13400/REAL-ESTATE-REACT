import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <section className='footer__section'>
        <div className='footer__section-container'>
            <div className='footer__section-title'>
                <div className='footer__section-t'>
                    <div className='footer__section-circle'></div>
                    <h2>Homyz</h2>
                </div>
                <p  className='footer__section-companyPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint?</p>
            </div>
            <div className='footer__section-information'>
                <div>
                    <h2>Information</h2>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div>
                    <ul>
                        <li>Property</li>
                        <li>Service</li>
                        <li>Product</li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
