import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class NoPage extends Component {
    render() {
        return (
            <div>
                <Header />

                <h1 className='bg-black'>Holaa ini halaman Error</h1>

                <Footer />
            </div>
        );
    }
}

export default NoPage;