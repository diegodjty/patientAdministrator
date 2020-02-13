import React,{Fragment} from 'react';

const Form = () => {
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
                />

                <label htmlFor="">Owner Name</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner Name"
                />

                <label htmlFor="">Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                />

                <label htmlFor="">Time</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                />

                <label htmlFor="">Symtoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    
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