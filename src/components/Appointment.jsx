import React from 'react';
import PropTypes from 'prop-types'


const Appointment = ({appointment, deleteAppointent}) =>(
    <div className="cita">
        <p>Pet:<span>{appointment.pet}</span></p>
        <p>Owner:<span>{appointment.owner}</span></p>
        <p>Date:<span>{appointment.date}</span></p>
        <p>Time:<span>{appointment.time}</span></p>
        <p>Symptoms:<span>{appointment.symptoms}</span></p>
        <button 
            className="button eliminar -u-full-width"
            onClick={ () => deleteAppointent(appointment.id)}>
        Eliminar &times;</button>
    </div>
);

Appointment.propTypes = {
    appointment : PropTypes.object.isRequired,
    deleteAppointent : PropTypes.func.isRequired,
}


export default Appointment;