import React from 'react';
import BookingModal from './BookingModal';

const Appointmentcard = ({ app, setTreatment }) => {

    return (
        <div >
            <div className="card mx-auto lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto text-secondary text-[20px] font-semibold">{app.name}</h2>
                    <p>{app.slots.length > 0 ? app.slots[0] : 'Please try another day.'}</p>
                    <p>{app.slots.length} {app.slots.length > 0 ? 'spaces' : 'space'} available</p>
                    <p className='text-3xl'>{app?.price} <span className='font-bold'>$</span></p>
                    <div className="card-actions justify-center  mt-[15px]" >

                        <label htmlFor="my-modal-3" className="btn modal-button  btn-primary modal-button bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l text-white" disabled={app.slots.length === 0} onClick={
                            () => {
                                setTreatment(app)
                            }
                        }> BOOK APPOINTMENT</label >

                    </div >
                </div >

            </div >

        </div >
    );
};

export default Appointmentcard;