import React, { Component } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { dataBase } from '../Data/DataBase/dataBase';
import '../Data/CSS/styles.css';

class Header extends Component {
    render() {

        const navbarLogo = dataBase.header.logo;

        return (
            <div className='py-10 px-10'>
                <nav className='flex justify-between'>
                    <ul>
                        <li>
                            <Link to="/">
                                <img src={navbarLogo} alt='404' />
                            </Link>
                        </li>
                    </ul>
                    <ul className='flex justify-center gap-10 font-libre text-abu' style={{fontSize: "1.389vw;"}}>
                        <li>
                            <NavLink to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Product" activeClassName="active">Product</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Service" activeClassName="active">Service</NavLink>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        );
    }
}

export default Header;