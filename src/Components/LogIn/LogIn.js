import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const LogIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || googleUser);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => signInWithEmailAndPassword(data.email, data.password);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card border rounded-lg lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <h2 className="card-title text-[#000000] text-[20px] mx-auto">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-[10px]'>
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


                        <label htmlhtmlFor="password">Password:</label>
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

                        <p className='text-[10px]'>Forgot Password?</p>
                        <button className='btn btn-accent' type='submit'>LOGIN</button>
                    </form>

                    <p className='text-[12px] mx-auto'>New to Doctors Portal?<Link to='/signUp' className='text-secondary ml-[2px]'>Create new account</Link></p>
                    <div className="divider" > OR</div >
                    <button className='btn btn-outline btn-accent' onClick={() => {
                        signInWithGoogle();
                    }}>CONTINUE WITH GOOGLE</button>

                </div >
            </div >
        </div >

    );
};

export default LogIn;