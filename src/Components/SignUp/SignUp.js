import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { async } from '@firebase/util';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, userError] = useUpdateProfile(auth);



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error || googleError || userError) {
        console.log(error || googleError || userError);
    }
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const photoURL = 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png';
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.displayName, photoURL: photoURL });
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card border rounded-lg lg:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-[#000000] text-[20px] mx-auto">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-[10px]'>
                        <label htmlFor="name">Name:</label>
                        <input type='text' className='input input-bordered w-full'  {...register("displayName", {
                            required: {
                                value: true,
                                message: 'Field is required'
                            }
                        })} />
                        <p className='text-[10px] text-red-500'>{errors?.name?.type === 'required' ? errors?.name?.message : ''}</p>
                        <label htmlFor="email">Email:</label>
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


                        <label htmlFor="password">Password:</label>
                        <input type='password' className='input input-bordered w-full'  {...register("password", {
                            required: {
                                value: true,
                                message: 'Field is required'
                            }
                            ,
                            minLength: {
                                value: 6,
                                message: 'Must be more than 6'
                            }
                        })} />
                        <p className='text-[10px] text-red-500'>{errors?.password?.type === 'required' ? errors.password.message : ''}</p>
                        <p className='text-[10px] text-red-500'>{errors?.password?.type === 'minLength' ? errors.password.message : ''}</p>


                        <button className='btn btn-accent' type='submit'>SIGN UP</button>
                    </form>

                    <p className='text-[12px] mx-auto'>Already have an account?<Link to='/logIn' className='text-secondary ml-[2px]'>Log In with existing account</Link></p>
                    <div class="divider">OR</div>
                    <button className='btn btn-outline btn-accent' onClick={() => {
                        signInWithGoogle();
                    }}>CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;