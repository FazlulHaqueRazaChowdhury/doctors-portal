import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Checkoutform = ({ book }) => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe()
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { price } = book;
    useEffect(() => {
        axios.post(`http://localhost:5000/create-payment-intent`, { price: price }, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => setClientSecret(res.data.clientSecret));
    }, [price])
    console.log(clientSecret);
    const handleSubmit = async e => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(console.log(error));
            setCardError(error.message);
        } else {
            setCardError('');
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe} className='-z-50 btn my-[30px] btn-sm'>
                    Pay
                </button>
                <br></br>
                <div className="text-red-600">
                    {cardError}
                </div>
            </form>
        </div>
    );
};

export default Checkoutform;