import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  //appointment in localStorage
  let initialAppointment = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointment){
    initialAppointment = [];
  }

  //array appoitment
  const [appointments, setAppointment] = useState(initialAppointment);

  //useEffect is used to perform operation when the state changes
  useEffect( ()=> {
    if(initialAppointment){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }else{
      localStorage.setItem('appointments', JSON.stringify([]));
    }

  }, [appointments]);//para decirle a useEfect que se ejecute una vez hay que pasarle un arreglo vacio,
  //si le pasamos a useEffect un array el se ejecutara cada que el array cambie

  //function to take current appointmends and add a new one
   const createAppointment = appointment =>{
    setAppointment([ ...appointments, appointment ]);

   }
   //function that deletes one appointment
   const deleteAppointent = id =>{
     const newAppointment = appointments.filter(appointment => appointment.id !== id);
     setAppointment(newAppointment);
   }
   //conditional message
   const title = appointments.length === 0 ?  'No hay citas'    : 'Manage your appointment'

  return (
      <Fragment>
        <h1>Appointment Manager</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
                <Form
                  createAppointment={createAppointment}
                />
            </div>
            <div className="one-half column">
                <h2>{title}</h2>
                {
                  appointments.map(appointment =>(
                      <Appointment
                        key={appointment.id} 
                        appointment={appointment}
                        deleteAppointent={deleteAppointent}/>
                  ))
                }
            </div>
          </div>
        </div>
      </Fragment>
  );
}

export default App;
