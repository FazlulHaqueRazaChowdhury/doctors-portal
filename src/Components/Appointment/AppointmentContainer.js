import React, { useEffect, useState } from 'react';
import Appointmentcard from './Appointmentcard';
import axios from 'axios';
import BookingModal from './BookingModal';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AppointmentContainer = ({ selected }) => {

    const [treatment, setTreatment] = useState({});

    const { data: datas, isLoading, refetch } = useQuery(['available', selected], () =>
        fetch(`http://localhost:5000/availabe?date=${selected ? format(selected, 'PP') : ''}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mt-[50px]'>
            <h1 className='text-center text-secondary text-[22px]'>Available Appointments on {selected ? format(selected, 'PP') : 'date'}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[34px] my-[80px]">

                {
                    datas?.map((app) => <Appointmentcard key={app._id} app={app} setTreatment={setTreatment} />)
                }
            </div>
            <BookingModal treatment={treatment} selected={selected} refetch={refetch} />
        </div>
    );
};

export default AppointmentContainer;