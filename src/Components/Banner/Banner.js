import React from 'react';
import img from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div class='main-bg' style={{
            backgroundImage: `url(${bg})`
        }}>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img src={img} class="max-w-[595px] rounded-lg shadow-2xl ml-[24px]" />
                    <div>
                        <h1 class="text-[48px] text-accent font-bold">Your New Smile Starts <br /> Here</h1>
                        <p class="py-6 text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary ease-linear duration-200 hover:bg-gradient-to-l text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;