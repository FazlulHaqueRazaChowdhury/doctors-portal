import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { da } from 'date-fns/locale';
const MyAppointment = () => {

    const [user] = useAuthState(auth);
    const [datas, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 403 || res.status === 401 || res.status === 404) {

                        signOut(auth);
                        return navigate('/login')
                    }
                    return res.json();

                })
                .then(data => {
                    console.log(data);
                    setData(data);
                });
        }

    }, [user])




    return (
        <div >
            <h2 className='text-[24px] text-[#000000]'>My Appointment</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>SERVICE</th>
                            <th>PAY</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            datas?.map((app, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{app?.patientName}</td>
                                    <td>{app?.date}</td>
                                    <td>{app?.time}</td>
                                    <td>{app?.treatmentName}</td>
                                    <td>{(app.price && !app.paid) ? <Link to={`payment/${app._id}`}><button className='btn btn-xs bg-accent text-white'>Pay</button></Link> : <button className='btn btn-accent btn-xs' disabled>Paid</button>}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;