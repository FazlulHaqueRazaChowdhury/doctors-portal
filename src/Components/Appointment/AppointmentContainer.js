import React, { useEffect, useState } from 'react';
import Appointmentcard from './Appointmentcard';
import axios from 'axios';
import BookingModal from './BookingModal';
import { format } from 'date-fns';

const AppointmentContainer = ({ selected }) => {
    const [datas, setData] = useState([]);
    const [treatment, setTreatment] = useState({});
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(response => {
                console.log(datas);
                setData(response.data)
            });
    }, [])

    return (
        <div className='mt-[50px]'>
            <h1 className='text-center text-secondary text-[22px]'>Available Appointments on {selected ? format(selected, 'PP') : 'date'}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[34px] my-[80px]">

                {
                    datas.map(app => <Appointmentcard app={app} setTreatment={setTreatment} />)
                }
            </div>
            <BookingModal treatment={treatment} selected={selected} />
        </div>
    );
};

export default AppointmentContainer;