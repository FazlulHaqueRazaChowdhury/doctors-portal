import React from 'react';
import img from '../../assets/images/chair.png';
const Banner = () => {
    return (
        <div id='main-bg'>
            <div className="hero min-h-[900px]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-x-[24px]">
                    <img src={img} className="lg:max-w-[595px] rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-[48px] font-bold">Your New Smile Starts <br /> Here</h1>
                        <p className="py-6 text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l text-white" > Get Started</button >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Banner;