import React from 'react';
import bg from '../../assets/images/footer.png';
const Footer = () => {

    return (
        <div id='footer'>
            <footer className="footer p-10 min-h-[407px] items-center justify-center lg:justify-between container mx-auto relative">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover text-[16px] text-accent">Branding</a>
                    <a className="link link-hover text-[16px] text-accent">Design</a>
                    <a className="link link-hover text-[16px] text-accent">Marketing</a>
                    <a className="link link-hover text-[16px] text-accent">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover text-[16px] text-accent">About us</a>
                    <a className="link link-hover text-[16px] text-accent">Contact</a>
                    <a className="link link-hover text-[16px] text-accent">Jobs</a>
                    <a className="link link-hover text-[16px] text-accent">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover text-[16px] text-accent">Terms of use</a>
                    <a className="link link-hover text-[16px] text-accent">Privacy policy</a>
                    <a className="link link-hover text-[16px] text-accent">Cookie policy</a>
                </div>
                <p className='text-[16px] text-[#000000] text-center absolute bottom-0 lg:bottom-10 w-full mx-auto flex justify-center'>Copyright&copy; 2022 All Rights Reserved</p>
            </footer>

        </div>
    );
};

export default Footer;