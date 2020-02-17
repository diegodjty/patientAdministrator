import React,{Fragment,useState,useEffect } from 'react';
import Form from './components/Form'
import Appointment from './components/Appoitment';


function App() {

  // Appointments in local storage
  let initialAppt = JSON.parse(localStorage.getItem('appointments'))
  if(!initialAppt){
    initialAppt=[];
  }
  // Appoitment array
  const [appointments,handelAppt] = useState(initialAppt);

  // UseEffect is for some operations that run when the state changes

  useEffect( () => {
    if(initialAppt){
      localStorage.setItem('appointments',JSON.stringify(appointments))
    }else{
      localStorage.setItem('appointmens',JSON.stringify([]))
    }
  },[appointments]);

  // Function that take actual appoitments and add new ones
  const createAppt = appointment =>{
    handelAppt([
      ...appointments,
      appointment
    ])
  }

  // Function that deletes appointment by ID

  const deleteAppt = id => {
    const newAppt = appointments.filter(appointment => appointment.id !== id);
    handelAppt(newAppt)
  }

  // conditional message
  const title = appointments.length === 0 ? 'No appointments' : 'Handel Appointments' ;

  return (
    <Fragment>
      <h1>Patient Administrator</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form
                createAppt={createAppt}
              />
          </div>
          <div className="one-half column">
              <h2>{title}</h2>
              {appointments.map(appointment => (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppt={deleteAppt}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
