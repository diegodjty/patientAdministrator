import React,{Fragment,useState} from 'react';
import Form from './components/Form'


function App() {
  
  // Appoitment array
  const [appoitments,handelAppt] = useState([]);

  // Function that take actual appoitments and add new ones
  const createAppt = appoitment =>{
    handelAppt([
      ...appoitments,
      appoitment
    ])
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
              2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
