import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Form = ({initialList, handleSubmit, buttonLabel, history}) => {
    // initialize the form with the initalList state
    const [formData, setFormData] = useState(initialList)
    
    // functions
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    // function to run when form is submitted
    const handleSubmission = (event) => {
        // prevent page refresh
        event.preventDefault()
        // pass formData to handleSubmit prop function
        handleSubmit(formData)
        //push user back to main page
        history.push('/')
    }

    return (
        <div className='form'>
        <form onSubmit={handleSubmission}>
            <input 
            type='text'
            onChange={handleChange}
            value={formData.item}
            name='item'
            />
            <input 
            type='text'
            onChange={handleChange}
            value={formData.list}
            name='list'
            />
          <input class='inputButton' type='submit' value={buttonLabel}/>
        </form>
        <Link to='/'>
                 <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Form