import React,{Fragment, useState} from 'react';

const Form = () => {

    //
    

    const [appointment, updateAppointment] = useState({

        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''

    });

    const handelChange = e => {
        updateAppointment({
            ...appointment,
            [e.target.name] : e.target.value
        })   
    }

    const {pet,owner,date,time,symptoms} = appointment

    return ( 
        <Fragment >
            <h1>From form</h1>
            <form action="">

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
                ></button>
            </form>
        </Fragment>
     );
}
 
export default Form;