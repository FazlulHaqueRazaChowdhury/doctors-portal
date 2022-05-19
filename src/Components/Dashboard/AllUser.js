import { data } from 'autoprefixer';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Loading/Loading';

const AllUser = () => {

    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch(`http://localhost:5000/users`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403 || res.status === 401 || res.status === 404) {

                signOut(auth);
                return navigate('/login')
            }
            return res.json();

        }))
    if (isLoading) {
        return <Loading />
    }
    const config = {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    };

    const makeAdmin = email => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 403) {

                    toast.error('You are not an admin');
                }
                else {
                    return res.json();
                }

            })
            .then(data => {
                console.log(data.result);
                if (data.result.modifiedCount > 0) {
                    refetch();
                    toast.success('Successly made Admin.')
                }
            })



        // axios.put(, config)
        //     .then(res => {
        //         console.log(res.data)
        //         refetch();
        //     });

    }
    return (
        <div>


            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>NAME</th>

                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>

                    {

                        users?.map((user, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{user?.email}</td>

                                <td>{
                                    user?.role === 'admin' ? '' : <button className='btn btn-xs hover:bg-[rgba(58, 66, 86,.5)] text-white' onClick={() => {
                                        makeAdmin(user?.email);
                                    }}>Make Admin</button>

                                }</td>
                                <td><button className='btn btn-xs text-white'>Remove User</button></td>


                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUser;