import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const navData = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Appointment', path: '/' },
        { name: 'Reviews', path: '/' },
        { name: 'Contact Us', path: '/' },
        { name: 'Log In', path: '/' }
    ]
    return (
        <div className='container mx-auto bg-transparent'>
            <div class="navbar bg-transparent">
                <div class="navbar-start">

                    <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div class="navbar-end dropdown ">
                    <label tabindex="0" class="lg:hidden w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-[20px] ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navData.map(nav => <li><Link to={nav.path}>{nav.name}</Link></li>)
                        }
                    </ul>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal w-full p-0">
                        {
                            navData.map(nav => <li><Link className='whitespace-nowrap hover:bg-accent hover:text-white mx-2' to={nav.path}>{nav.name}</Link></li>)
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;