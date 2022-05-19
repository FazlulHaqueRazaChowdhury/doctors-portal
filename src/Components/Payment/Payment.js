import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Dashboard/CheckoutForm';
import Checkoutform from './Checkoutform';

const stripePromise = loadStripe('pk_test_51L0jNMINSzKcEHUEDrQnFsXSUGTAjo28H1T8aKMEJOqdBdjez5V6sb66bnZSLuF9FKYW8nDLFVXKdT4CfKxjk5yX00BXZqmrRG');
const Payment = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403 || res.status === 404) {
                    signOut(auth);
                    return <Navigate to='/login' />
                }
                return res.json();
            })
            .then(data => setBook(data));
    }, [id])
    return (
        <div>

            <div class="hero min-h-screen w-full">
                <div class="hero-content flex-col lg:flex-row-reverse w-full">
                    <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h3 className='text-2xl'>Hello <span className='text-accent font-bold'>{book?.patientName}</span></h3>
                            <h2 class="card-title">Pay for {book?.treatmentName}</h2>
                            <p>We will see you {book?.date} at {book?.time}</p>
                            <h2 className='text-3xl'><span className='font-bold text-accent'>${book?.price}</span> only.</h2>
                            <div class="card-actions justify-end">
                                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l text-white" >Pay Now</button >
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">

                            <Elements stripe={stripePromise}>
                                <Checkoutform book={book} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;