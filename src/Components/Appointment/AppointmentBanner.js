import React, { useState } from 'react';
import img from '../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = () => {


    const [selected, setSelected] = useState();
    let footer = <p>Please pick a day.</p>;

    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    } return (
        <div id='main-bg'>
            <div class="hero min-h-[700px]">
                <div class="hero-content flex-col lg:flex-row-reverse gap-x-[120px]">
                    <img src={img} class="lg:w-[590px] rounded-lg shadow-2xl" />
                    <div className='bg-white shadow-lg rounded'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;