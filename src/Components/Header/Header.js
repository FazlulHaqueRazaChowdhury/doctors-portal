import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
    const navData = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Appointment', path: '/appointment' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Contact Us', path: '/contactUs' },
        { name: 'Log In', path: '/logIn' }
    ]
    const location = useLocation();

    return (
        <div className='container mx-auto bg-transparent'>
            <div className="navbar bg-transparent">
                <div className="navbar-start">

                    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div className="navbar-end dropdown ">
                    <label tabIndex="0" className="lg:hidden w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-[20px] ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navData.map(nav => <li><Link to={nav.path}>{nav.name}</Link></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal w-full p-0">
                        {
                            navData.map(nav => <li><Link className={`${location.pathname === nav.path ? 'bg-accent text-white' : ''} whitespace-nowrap hover:bg-accent hover:text-white mx-2 `} to={nav.path}>{nav.name}</Link></li>)
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;