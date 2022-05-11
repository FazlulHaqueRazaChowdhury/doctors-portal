import React from 'react';
import img from '../../assets/images/doctor.png';
import bg from '../../assets/images/appointment.png'
const HomeAppoint = () => {
    return (
        <div className='mb-[100px]'>
            <div className="hero h-[633px]" style={{
                backgroundImage: `url(${bg})`
            }}>
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={img} className="lg:h-[733px] mt-[-113px] hidden lg:block" />
                    <div className='flex flex-col gap-y-[20px]'>
                        <h4 className="text-[20px] text-secondary font-bold">Appointment</h4>
                        <h1 className="text-[36px] font-bold text-white">Make an appointment Today</h1>
                        <p className="text-[16px] text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <div>
                            <button className="btn  bg-gradient-to-r from-secondary to-primary border-0 text-white">Get Started</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppoint; 