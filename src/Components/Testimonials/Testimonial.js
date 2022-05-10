import React from 'react';

const Testimonial = ({ test }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto my-[20px]">
                <div class="card-body">
                    <p className='text-[#000000]'>{test.rev}</p>


                </div>
                <div className='p-5 flex items-center ml-[20px]'>
                    <div class="avatar">
                        <div class="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={test.img} width='100%' />

                        </div>

                    </div>
                    <div className="ml-[14px]">
                        <h2 class="text-[20px] text-accent font-bold">{test.name}</h2>
                        <p class='text-[#000000]'>{test.loc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;