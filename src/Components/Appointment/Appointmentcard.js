import React from 'react';

const Appointmentcard = ({ app }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="card-title mx-auto text-secondary text-[20px] font-semibold">{app.title}</h2>
                    <p>{app.start} AM - {app.end} AM</p>
                    <p>{app.available} spaces available</p>
                    <div class="card-actions justify-center  mt-[15px]">
                        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l text-white">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointmentcard;