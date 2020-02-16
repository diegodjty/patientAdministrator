import React,{Fragment,useState} from 'react';
import Form from './components/Form'
import Appointment from './components/Appoitment';


function App() {
  
  // Appoitment array
  const [appointments,handelAppt] = useState([]);

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
              <h2>Handel your appointments</h2>
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
