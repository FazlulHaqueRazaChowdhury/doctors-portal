import React from 'react';
import Appointmentcard from './Appointmentcard';


const AppointmentContainer = () => {
    const data = [
        { title: 'Teeth Orthodontics', start: '8:00', end: '9:00', available: '10' },
        { title: 'Cosmetic Dentistry', start: '10:05', end: '11:30', available: '10' },
        { title: 'Teeth Cleaning', start: '8:00', end: '9:00', available: '10' },
        { title: 'Teeth Orthodontics', start: '8:00', end: '9:00', available: '10' },
        { title: 'Teeth Orthodontics', start: '8:00', end: '9:00', available: '10' },
        { title: 'Teeth Orthodontics', start: '8:00', end: '9:00', available: '10' },
    ]
    return (
        <div className='mt-[50px]'>
            <h1 className='text-center text-secondary text-[22px]'>Available Appointments on April 30, 2022</h1>
            <div className="grid grid-cols-3 gap-[34px] my-[80px]">

                {
                    data.map(app => <Appointmentcard app={app} />)
                }
            </div>
        </div>
    );
};

export default AppointmentContainer;