import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AppointmentContainer from './AppointmentContainer';

const Appointment = () => {
    const [selected, setSelected] = useState();
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected} />
            <AppointmentContainer selected={selected} />
        </div>
    );
};

export default Appointment;