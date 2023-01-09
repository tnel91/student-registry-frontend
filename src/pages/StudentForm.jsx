import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { BASE_URL } from '../globals'

const StudentForm = () => {
    let navigate = useNavigate()

    const initialState = {
        name: '',
        email: '',
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
    }
    
    const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/school/student/create`, formState)
    navigate(`/students`)

    }

    return (
        <div className='d-flex justify-content-center align-items-center align-self-center m-5 p-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group p-3">
                    <label htmlFor="name">Full Name</label>
                    <input 
                    className="form-control" 
                    id="name" 
                    type="text" 
                    placeholder="Write The Student's Name" 
                    onChange={handleChange}
                    value={formState.name}
                    required
                    />
                </div>
                <div className="form-group p-3">
                    <label htmlFor="email">E-mail</label>
                    <input 
                    className="form-control" 
                    id="email" 
                    type="email" 
                    placeholder="Write The Student's E-mail" 
                    onChange={handleChange}
                    value={formState.email}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
      ) 
}

export default StudentForm
