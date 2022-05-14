import React from 'react';
import BookingModal from './BookingModal';

const Appointmentcard = ({ app, setTreatment }) => {

    return (
        <div >
            <div class="card mx-auto lg:w-96 bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="card-title mx-auto text-secondary text-[20px] font-semibold">{app.name}</h2>
                    <p>{app.slots.length > 0 ? app.slots[0] : 'Please try another day.'}</p>
                    <p>{app.slots.length} {app.slots.length > 0 ? 'spaces' : 'space'} available</p>
                    <div class="card-actions justify-center  mt-[15px]">

                        <label for="my-modal-3" class="btn modal-button  btn-primary modal-button bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l text-white" disabled={app.slots.length === 0} onClick={
                            () => {
                                setTreatment(app)
                            }
                        }>BOOK APPOINTMENT</label>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Appointmentcard;