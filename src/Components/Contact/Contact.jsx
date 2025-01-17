import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
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
                    <div className='contact_boxes_container'>
                        <div className='contact_box_1'>
                            <div className='row'>
                                <div className='icon'>
                                    <MdCall style={{color : "blue"}} size={25} />
                                </div>
                                <div className='details'>
                                    <p className='call'>Call</p>
                                    <p className='call_number'> 923 456 789</p>
                                </div>
                            </div>
                            <div className='callNowButton'>
                                <button>Call now</button>
                            </div>
                        </div>
                        <div className='contact_box_1'>
                        <div className='row'>
                                <div className='icon'>
                                    <BsFillChatDotsFill style={{color : "blue"}} size={25} />
                                </div>
                                <div className='details'>
                                    <p className='call'>chat</p>
                                    <p className='call_number'> 923 456 789</p>
                                </div>
                            </div>
                            <div className='callNowButton'>
                                <button>chat now</button>
                            </div>
                        </div>
                        <div className='contact_box_1'>
                        <div className='row'>
                                <div className='icon'>
                                    <MdCall style={{color : "blue"}} size={25} />
                                </div>
                                <div className='details'>
                                    <p className='call'>video call</p>
                                    <p className='call_number'> 923 456 789</p>
                                </div>
                            </div>
                            <div className='callNowButton'>
                                <button>video call now</button>
                            </div>
                        </div>
                        <div className='contact_box_1'>
                        <div className='row'>
                                <div className='icon'>
                                    <MdCall  style={{color : "blue"}} size={25} />
                                </div>
                                <div className='details'>
                                    <p className='call'>Message</p>
                                    <p className='call_number'> 923 456 789</p>
                                </div>
                            </div>
                            <div className='callNowButton'>
                                <button>Message now</button>
                            </div>
                        </div>
                    </div>
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
