import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Fade } from 'react-awesome-reveal';
import '../Data/CSS/styles.css';
import { dataBase } from '../Data/DataBase/dataBase';

class Product extends Component {
    render() {

        const features = dataBase.product.features.map(function (features) {
            const productImage = require('../Data/Assets/Logo/' + features.image);

            return (
                <div id={features.name}>
                    <div className='grid justify-items-center pb-5'>
                        <img src={productImage} alt='404' />
                    </div>
                    <div className='text-center'>
                        <h6 className='italic font-libre text-white text-center'>{features.desc}</h6>
                    </div>
                </div>
            );
        })

        return (
            <section id='product'>
                <div style={{ backgroundColor: '#272727' }}>
                    <Header />

                    <div className='py-12'>
                        <Fade bottom duration={4500}>
                            <div className='text-center'>
                                <h6 className='italic font-libre text-abu'>Pick The Best Plan</h6>
                                <div className='py-5'>
                                    <h1 className='font-fairplay font-medium text-white'>Subscribe Now</h1>
                                    <h6 className='italic font-libre text-white'>
                                        Unlock all features, endless entertainment and subscribe to our premium video streaming service today!
                                    </h6>
                                </div>
                                <div className='py-10'>
                                    <div class="grid justify-items-center grid-cols-3 gap-4 gap-y-14">
                                        {features}
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <Fade bottom duration={3000}>                  
                            <div>
                                <form action="" method="post" id="productForm" name="productForm">
                                    <div className='font-libre flex justify-center gap-3'>
                                        <div className='py-4 px-20 bg-checkbox bg-opacity-20 rounded-lg flex justify-center gap-3'>
                                            <input type="radio" id="subWeek" name="subWeek" value="week"/>
                                            <label for="subWeek" className='flex justify-center'>
                                                <h3 className='italic text-white'>$10</h3>
                                                <p className='flex items-end text-white'>/Week</p>
                                            </label>
                                        </div>

                                        <div className='py-4 px-20 bg-checkbox bg-opacity-20 rounded-lg flex justify-center gap-3'>
                                            <input type="radio" id="subMonth" name="subMonth" value="month"/>
                                            <label for="subMonth" className='flex justify-center'>
                                                <h3 className='italic text-white'>$35</h3>
                                                <p className='flex items-end text-white'>/Month</p>
                                            </label>
                                        </div>

                                        <div className='py-4 px-20 bg-checkbox bg-opacity-20 rounded-lg flex justify-center gap-3'>
                                            <input type="radio" id="subYear" name="subYear" value="year"/>
                                            <label for="subYear" className='flex justify-center'>
                                                <h3 className='italic text-white'>$370</h3>
                                                <p className='flex items-end text-white'>/Year</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <input type="submit" value="Continue >" className='font-libre'></input>
                                    </div>
                                </form>
                            </div>
                        </Fade>
                    </div>

                    <Footer />
                </div>
            </section>
        );
    }
}

export default Product;