import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
const Header = () => {
    const navData = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Appointment', path: '/appointment' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Contact Us', path: '/contactUs' },

    ]
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <p>Loading</p>
    }

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

                        {
                            user ? <li className='btn btn-accent text-white'><p>{user.displayName}</p></li> : <li><Link to='/logIn' className={`${location.pathname === '/logIn' ? 'bg-accent text-white' : ''} whitespace-nowrap hover:bg-accent hover:text-white mx-2 `}>Log In</Link></li>
                        }
                        {
                            user ? <li> <img src={user.photoURL} width='50px' height='50px' className='rounded-cirlce' alt="" /> </li> : ''
                        }
                        {
                            user ? <li><button className='btn btn-accent text-white whitespace-nowrap ' onClick={() => {
                                signOut(auth);
                            }}>Sign Out</button></li> : ""
                        }

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;