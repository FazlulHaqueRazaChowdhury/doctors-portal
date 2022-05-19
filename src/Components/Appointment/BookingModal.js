import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, selected, refetch }) => {
    const [user] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const name = e.target.name.value;
        const date = e.target.date.value;
        const time = e.target.time.value;



        const booking = {
            treatmentId: treatment._id,
            treatmentName: treatment.name,
            patientEmail: email,
            patientName: name,
            price: treatment.price,
            date: date,
            time: time
        };
        axios.post('http://localhost:5000/booking', booking)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {

                    toast.success(res.data.booking)
                    refetch();
                }
                else {
                    toast.warn(res.data.booking)
                }
            });
    }
    return (
        <div className='bookingModal'>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom md:modal-middle">
                <div className="modal-box relative ">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold" > {treatment.name}</h3 >
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-[14px]'>
                        <input type="text" value={selected ? format(selected, 'PP') : 'Please pick a date'} className="input lg:w-full bg-[#E6E6E6] text-[#000000]" name='date' required />
                        <select className="select lg:w-full bg-[#E6E6E6]" name='time'>

                            {
                                treatment?.slots?.map(treat => <option value={treat}>{treat}</option>)
                            }

                        </select>
                        <input type="text" value={user.displayName} placeholder="Full Name" name='name' className="input input-bordered lg:w-full" required />
                        <input type="email" placeholder="Email" value={user.email} name='email' className="input input-bordered lg:w-full" required />
                        <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered lg:w-full" required />
                        <button disabled={selected ? false : true} className='btn btn-accent text-white' type='submit'>Submit</button>
                    </form >
                </div >
            </div >
        </div >
    );
};

export default BookingModal;