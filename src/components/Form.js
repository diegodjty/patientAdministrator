import React,{Fragment, useState} from 'react';
import uuid from 'uuid';

const Form = ({createAppt}) => {

    //
    

    const [appointment, updateAppointment] = useState({

        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''

    });

    const [error, handelError] = useState(false)

    const handelChange = e => {
        updateAppointment({
            ...appointment,
            [e.target.name] : e.target.value
        })   
    }

    //extract values
    const {pet,owner,date,time,symptoms} = appointment
    
    // When user press add Appoitment
    const addAppt = e =>{
        e.preventDefault();

        // Validate
        if(pet.trim() === ''|| owner.trim() === ''|| date.trim() === ''|| time.trim() === ''|| symptoms.trim() === ''){
            handelError(true)
            return;
        }
        // Delete error message
        handelError(false)
        // Assign ID
        appointment.id=uuid();
        // Create appoitment
        createAppt(appointment)
        // Reset Form
        updateAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }

    return ( 
        <Fragment >
            <h1>Create Appoitment</h1>

            { error ? <p className="alerta-error">All fields are required</p> : null }

            <form 

                onSubmit={addAppt}
            >

                <label htmlFor="">Pet Name</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Name"
                    onChange={handelChange}
                    value={pet}
                />

                <label htmlFor="">Owner Name</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner Name"
                    onChange={handelChange}
                    value={owner}
                />

                <label htmlFor="">Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handelChange}
                    value={date}
                />

                <label htmlFor="">Time</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handelChange}
                    value={time}
                />

                <label htmlFor="">Symtoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handelChange}
                    value={symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add Appoitment</button>

            </form>
        </Fragment>
     );
}
 
export default Form;