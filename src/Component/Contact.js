import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { dataBase } from '../Data/DataBase/dataBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';

class Contact extends Component {
    render() {

        const bg1 = dataBase.contact.bgContact;
        const lgInstagram = dataBase.contact.instagram;
        const lgTwitter = dataBase.contact.twitter;
        const lgFacebook = dataBase.contact.facebook;

        return (
            <section id='contact'>
                <div style={{ backgroundImage: `url(${bg1})` }}>
                    <Header />
                    <div className='flex justify-center py-12'>
                        <div className='contact-container py-12 px-12'>
                            <Fade bottom duration={2000}>
                                <div>
                                    <h6 className='text-abu font-libre italic'>Need Help ?</h6>
                                    <h1 className='font-fairplay text-white font-medium'>Contact Us</h1>
                                    <p className='text-white font-libre w-2/5'>
                                        Hey there! Need to get in touch? Don't hesitate to contact us anytime. We're here to help!
                                    </p>
                                </div>
                            </Fade>
                            <Fade bottom duration={3000}>
                                <div className='flex justify-center gap-16 py-5'>
                                    <div className='contact-content flex items-center'>
                                        {/* buat dia v-align center */}
                                        <div className='py-5 font-libre italic'>
                                            <form action="" method="post" id="contactForm" name="contactForm">
                                                <label for="fname" className='text-white'>Name <span className='text-pink'>*</span></label>
                                                <input type="text" id="fname" name="firstname" placeholder="Enter Full Name" required></input>

                                                <label for="femail" className='text-white'>Email Address <span className='text-pink'>*</span></label>
                                                <input type="text" id="femail" name="email" placeholder="Enter Email Address" required></input>

                                                <label for="fsubject" className='text-white'>Subject</label>
                                                <input type="text" id="fsubject" name="subject" placeholder="Enter Subject Message"></input>

                                                <label for="fmessage" className='text-white'>Message <span className='text-pink'>*</span></label>
                                                <textarea type="text" id="fmessage" name="message" placeholder="Enter Your Message" required></textarea>

                                                <input type="submit" value="Send"></input>
                                            </form>
                                        </div>
                                    </div>
                                    <div style={{borderRight: '1px solid white'}}></div>
                                    <div className='flex items-center'>
                                        <div className='space-y-5'>
                                            <div>
                                                <h6 className='font-libre text-white'>Follow Us</h6>
                                                <div className='flex flex-wrap gap-5 pt-1'>
                                                    <a href='https://www.instagram.com/'>
                                                        <img src={lgInstagram} alt='404' />
                                                    </a>
                                                    <a href='https://twitter.com/'>
                                                        <img src={lgTwitter} alt='404' />
                                                    </a>
                                                    <a href='https://www.facebook.com/'>
                                                        <img src={lgFacebook} alt='404' />
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className='font-libre text-white'>Company Address</h6>
                                                <p className='font-libre text-abu'>19162 Hermann Orchard, Ryleighfurt, Wyoming, USA</p>
                                            </div>
                                            <div>
                                                <h6 className='font-libre text-white'>Zip Code</h6>
                                                <p className='font-libre text-abu'>11589-8562</p>
                                            </div>
                                            <div>
                                                <h6 className='font-libre text-white'>Phone</h6>
                                                <div className='flex justify-start gap-2'>
                                                    <FontAwesomeIcon icon={faPhone} color='#FFFFFF' size='sm'/>
                                                    <p className='font-libre text-abu'>306-640-5307 x296</p>
                                                </div>
                                                <div className='flex justify-start gap-2'>
                                                    <FontAwesomeIcon icon={faMobile} color='#FFFFFF' size='sm' />
                                                    <p className='font-libre text-abu'>1-459-475-2170</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className='font-libre text-white'>Email Address</h6>
                                                <p className='font-libre text-abu'>bloomers.streaming@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Footer />
                </div>
            </section>
        );
    }
}

export default Contact;