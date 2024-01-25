import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsChatDotsFill, BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper" id='Contact'>
        <div className="paddings innerWidth flexCenter c-container">
            {/* left-side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Get In Touch for Reservations and Inquiries</span>
                <span className='secondaryText'>Ready to embark on a culinary journey with us? Have questions, want to make a reservation, or simply want to say hello? 
                    We'd love to hear from you! Reach out through the options below and let the conversation begin.
                </span>

                <div className="flexColStart contactModes">
                    {/* first-row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>

                                <div className="flexColStart detai">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+254 704873083</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        {/* second-mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>

                                <div className="flexColStart detai">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>+254 704873083</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat With Us</div>
                        </div>
                    </div>

                    {/* second-row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>

                                <div className="flexColStart detai">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>+254 704873083</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        {/* fourth-div */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>

                                <div className="flexColStart detai">
                                    <span className='primaryText'>Email</span>
                                    <span className='secondaryText'>ccanvas@gmail.com</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Email Us</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* right-side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contacts_image.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact