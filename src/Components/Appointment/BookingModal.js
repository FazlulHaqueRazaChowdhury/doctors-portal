import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, selected }) => {
    const [user] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const name = e.target.name.value;
        const date = e.target.date.value;
        const time = e.target.time.value;


        console.log({
            email: email,
            name: name,
            date: date,
            time: time
        })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal modal-bottom md:modal-middle">
                <div class="modal-box relative ">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">{treatment.name}</h3>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-[14px]'>
                        <input type="text" value={selected ? format(selected, 'PP') : 'Please pick a date'} class="input lg:w-full bg-[#E6E6E6] text-[#000000]" name='date' />
                        <select class="select lg:w-full bg-[#E6E6E6]" name='time'>

                            {
                                treatment?.slots?.map(treat => <option value={treat}>{treat}</option>)
                            }

                        </select>
                        <input type="text" value={user.displayName} placeholder="Full Name" name='name' class="input input-bordered lg:w-full" required />
                        <input type="email" placeholder="Email" value={user.email} name='email' class="input input-bordered lg:w-full" required />
                        <input type="text" placeholder="Phone Number" name='phone' class="input input-bordered lg:w-full" required />
                        <button className='btn btn-accent text-white' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;