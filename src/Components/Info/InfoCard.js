import React from 'react';

const InfoCard = ({ info }) => {
    return (
        <div>
            <div class={`card lg:flex-row ${info.color} shadow-xl text-white w-[450px] md:h-[230px] lg:h-[190px] border-r-0 items-center mx-auto p-[54px]`}>
                <figure className='w-[86px] h-[86px]'>{info.icon}</figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;