import React from 'react';

const Appointment = ({appointment}) => {
    return ( 

        <div className="appointment">
            <p>Pet:<span>{appointment.pet}</span></p>
            <p>Pet:<span>{appointment.owner}</span></p>
            <p>Pet:<span>{appointment.date}</span></p>
            <p>Pet:<span>{appointment.time}</span></p>
            <p>Pet:<span>{appointment.symptoms}</span></p>
        </div>
     );
}
 
export default Appointment;