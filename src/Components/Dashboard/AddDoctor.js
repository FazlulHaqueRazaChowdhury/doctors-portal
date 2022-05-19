
import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const AddDoctor = () => {
    const { data: services, isLoading } = useQuery('services', () => fetch(`http://localhost:5000/servicesName`).then(res => res.json()))
    const navigate = useNavigate();
    const { register, watch, formState: { errors }, handleSubmit, reset } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async data => {
        setLoading(true);
        const apiKey = "d3a54a74a1d8f04a1594a6a457f11903";
        const image = data.image[0];

        const formData = new FormData();

        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const img = result?.data?.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        special: data.speciality,
                        photo: img
                    }

                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => {
                            if (res.status === 403 || res.status === 401 || res.status === 404) {

                                signOut(auth);
                                return navigate('/login')
                            }
                            return res.json();
                        })
                        .then(inserted => {
                            if (inserted.insertedId) {
                                setLoading(false);
                                toast.success('Doctor Added')
                                reset();

                            }
                            else {
                                setLoading(false);
                                toast.error('Something went wrong')
                            }
                        });
                }
            });
    };
    if (isLoading || loading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-3xl font-bold mt-[100px]'>Add a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-[10px]'>
                <label htmlFor="name">Name:</label>
                <input type='text' className='input input-bordered w-full'  {...register("name", {
                    required: {
                        value: true,
                        message: 'Field is required'
                    }
                })} />

                <p className='text-[10px] text-red-500'>{errors?.name?.type === 'required' ? errors?.name?.message : ''}</p>
                <label htmlhtmlFor="email">Email:</label>
                <input className='input input-bordered w-full'  {...register("email", {
                    required: {
                        value: true,
                        message: 'Email Field Is Required'
                    },
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Email Is not valid' // JS only: <p>error message</p> TS only support string
                    }
                })} />

                <p className='text-[10px] text-red-500'>{errors?.email?.type === 'pattern' ? errors?.email?.message : ''}</p>
                <p className='text-[10px] text-red-500'>{errors?.email?.type === 'required' ? errors?.email?.message : ''}</p>


                <label htmlhtmlFor="password">Specialization:</label>

                <p className='text-[10px] text-red-500'>{errors?.speciality?.type === 'required' ? errors.speciality.message : ''}</p>
                <select class="select w-full max-w-xs" {...register("speciality", {
                    required: {
                        value: true,
                        message: 'Field is required'
                    }

                })}>

                    {
                        services.map(service => <option key={service.id} value={service.name}>{service.name}</option>)
                    }
                </select>
                <p className='text-[10px] text-red-500'>{errors?.speciality?.type === 'required' ? errors.speciality.message : ''}</p>

                {/* <input type="file" className='file' {...register('image', {
                    required: {
                        value: true,
                        message: 'Please choose an image.'
                    }
                })} /> */}

                <div class="max-w-xl">
                    <label
                        class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span class="font-medium text-gray-600">
                                Drop your profile picture, or
                                <span class="text-blue-600 underline">browse</span>
                            </span>
                            <span class="font-medium text-gray-600">



                            </span>

                        </span>
                        <input type="file" name="file_upload" class="hidden" {...register('image', {
                            required: {
                                value: true,
                                message: 'Please choose an image.'
                            }
                        })} />
                    </label>
                </div>
                <p className='text-[10px] text-red-500'>{errors?.image?.type === 'required' ? errors.image.message : ''}</p>
                <button className='btn btn-accent text-white' type='submit'>Add a Doctor</button>
            </form>

        </div>
    );
};

export default AddDoctor;