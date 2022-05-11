import React from 'react';
import img from '../../assets/images/treatment.png'
const Care = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero my-[100px]">
                <div className="hero-content flex-col lg:flex-row gap-x-[102px]">
                    <img src={img} className="lg:w-[458px] h-[576px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-[48px] font-bold text-accent">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p className="py-6 text-[16px] font-regular">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn  bg-gradient-to-r from-secondary to-primary border-0 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;