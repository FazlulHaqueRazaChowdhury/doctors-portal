import React from 'react';

const Testimonial = ({ test }) => {
    return (
        <div>
            <div className="card  lg:w-96 bg-base-100 shadow-xl mx-auto my-[20px]">
                <div className="card-body">
                    <p className='text-[#000000]'>{test.rev}</p>


                </div>
                <div className='p-5 flex items-center ml-[20px]'>
                    <div className="avatar">
                        <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={test.img} width='100%' />

                        </div>

                    </div>
                    <div className="ml-[14px]">
                        <h2 className="text-[20px] text-accent font-bold">{test.name}</h2>
                        <p className='text-[#000000]'>{test.loc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;