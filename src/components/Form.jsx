import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4';

export default function Form() {
  const [appointment, setAppointment] = useState({
    pet:'',
    owner:'',
    date:'',
    time:'',
    symptoms:''
  });

  const [error, setError] = useState(false);

  //Function that is excecuted when the user writes in an input
  const updateState = e => {
    setAppointment({
      ...appointment,
      [e.target.name] : e.target.value
    })
  }
  //Extract values
  const {pet, owner, date, time, symptoms} = appointment;

  //Function than add appointment 
  const addAppointment = e => {
    e.preventDefault();

    //Validate form
    if(pet.trim()  === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === ''){
      setError(true);
      return console.log("Error, fill in all fields");
    } 
    //Delete error message
    setError(false);
    //Assign id
    appointment.id = uuid();
    //Create appointment
    console.log(appointment);
    //empty the form


  }
	return (
		<Fragment>
			<h2>Create Appointment</h2>
      {error ? <p className="alerta-error">Are fields are required</p> : null

      }
			<form onSubmit = { addAppointment }>
				<label htmlFor="pet">Name pet</label>
				<input
					type = "text"
					name = "pet"
					className = "u-full-width"
          placeholder ="pet name"
          onChange = {updateState}
          value = {pet}
				/>
				<label htmlFor = "owner">Owner's name</label>
				<input
					type = "text"
					name = "owner"
					className = "u-full-width"
          placeholder = "owner's name"
          onChange = {updateState}
          value = {owner}
				/>
				<label htmlFor = "date">Date</label>
				<input
					type = "date"
					name = "date"
          className = "u-full-width"
          onChange = {updateState}
          value = {date}
				/>
				<label htmlFor = "time">Time</label>
				<input
					type = "time"
					name = "time"
          className = "u-full-width"
          onChange = {updateState}
          value = {time}
				/>
				<label htmlFor = "symptoms">Symptoms</label>
				<textarea
					type = "text"
					name = "symptoms"
					className = "u-full-width"
          placeholder = "symptoms"
          onChange = {updateState}
          value = {symptoms}
				/>
				<button
          type = "submit"
          className = "u-full-width button-primary"
				>Add appointment</button>
			</form>
		</Fragment>
	)
}
