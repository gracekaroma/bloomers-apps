import React, { Component } from 'react';
import { dataBase } from '../Data/DataBase/dataBase';
import { Link, NavLink } from 'react-router-dom';
import { Input, Button } from '@material-tailwind/react';
import { Fade } from 'react-awesome-reveal';

function InputWithButton() {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
   
    return (
      <div className="relative flex w-full max-w-[30rem]">
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={onChange}
          color='white'
          className="pr-20"
          containerProps={{
            className: "min-w-0 font-fairplay italic",
          }}
        />
        <Button
          size="sm"
          color={email ? "white" : "white"}
          disabled={!email}
          className="!absolute right-1 top-1 rounded font-fairplay font-semibold px-8"
        >
          SIGN UP
        </Button>
      </div>
    );
}

class Footer extends Component {
    render() {

        const bgFooter = dataBase.footer.bgFooter;
        const logoFooter = dataBase.footer.logoFooter;
        const logoInstagram = dataBase.footer.instagram;
        const logoTwitter = dataBase.footer.twitter;
        const logoFacebook = dataBase.footer.facebook;

        return (
            <footer style={{ backgroundImage: `url(${bgFooter})` }}>
                <Fade bottom duration={2000}>
                    <div className='pt-12'>
                        <div className='flex flex-col space-y-12'>
                            <div className='flex justify-center'>
                                <div className='space-y-2'>
                                    <Link to='/'><img src={logoFooter} alt='404' /></Link>
                                    <h6 className='italic font-libre text-abu text-center'>
                                        The best place to stream your favorite series
                                    </h6>
                                </div>
                            </div>
                            <div className='flex justify-between px-20'>
                                <ul>
                                    <li className='flex flex-col space-y-3 font-fairplay text-abu font-medium'>
                                        <NavLink to='/'><h6>Home</h6></NavLink>
                                        <NavLink to='/Contact'><h6>Contact</h6></NavLink>
                                        <NavLink to='/Product'><h6>Product</h6></NavLink>
                                        <NavLink to='/Service'><h6>Service</h6></NavLink>
                                    </li>
                                </ul>
                                <div>
                                    <li className='flex flex-col space-y-3'>
                                        <h6 className='font-fairplay text-white font-medium text-center'>Follow Us</h6>
                                        <div className='flex justify-center gap-6'>
                                            <Link to='/'>
                                                <img src={logoInstagram} alt='404' />
                                            </Link>
                                            <Link to='/'>
                                                <img src={logoTwitter} alt='404' />
                                            </Link>
                                            <Link to='/'>
                                                <img src={logoFacebook} alt='404' />
                                            </Link>
                                        </div>
                                    </li>
                                </div>
                                <div>
                                    <li className='flex flex-col space-y-3'>
                                        <h6 className='font-fairplay text-white font-medium'>Sign Up For Emails</h6>
                                        <div>
                                            {<InputWithButton />}
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div class="flex items-end justify-center" style={{backgroundColor: 'rgb(0, 0, 0, 0.35)'}}>
                                <p className='italic font-libre text-abu py-4'>
                                    &copy; Copyright 2023 - Bloomers &sdot; Designed by Grace Karoma
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </footer>
        );
    }
}

export default Footer;