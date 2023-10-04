import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { dataBase } from '../Data/DataBase/dataBase';
import { Fade } from 'react-awesome-reveal';

class Service extends Component {
    render() {

        let i = 0;
        const service = dataBase.service.terms.map(function (service) {
            return (
                <div id={i++}>
                    <div className='text-justify space-y-2'>
                        <h6 className='font-libre text-white font-bold'>{service.title}</h6>
                        <p className='font-libre italic text-abu'>{service.detail}</p>
                    </div>
                </div>
            );

        })
        return (
            <section id='service'>
                <div style={{backgroundColor: '#272727'}}>
                    <Header />
                    <div className='py-12 flex justify-center'>
                        <div className='background-service'>
                            <div className='py-10 px-16'>
                                <Fade bottom duration={3000}>
                                    <h1 className='font-fairplay text-white font-medium text-center'>Terms Of Services</h1>
                                    <div className='space-y-5 py-5'>{service}</div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </section>
        );
    }
}

export default Service;