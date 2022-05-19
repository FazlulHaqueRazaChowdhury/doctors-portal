import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403 || res.status === 404) {
                    signOut(auth);
                    return <Navigate to='/login'></Navigate>
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                refetch();
            });
    }
    return (
        <div>
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>SPECIALITY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        doctors?.map((app, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <th><div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src={app?.photo} />
                                    </div>
                                </div></th>
                                <td>{app?.name}</td>
                                <td>{app?.email}</td>
                                <td>{app?.special}</td>
                                <td><button className='btn btn-xs btn-accent text-white' onClick={() => {
                                    handleDelete(app?.email)
                                }}>Delete</button></td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageDoctor;