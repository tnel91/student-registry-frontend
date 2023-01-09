import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {BASE_URL} from '../globals'

const CourseForm = () => {
    let navigate = useNavigate()

    const initialState = {
        course_number: '',
        name: '',
        credit_hours: '',
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
    }
    
    const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/school/course/create`, formState)
    navigate(`/courses`)

    }

    return (
        <div className='d-flex justify-content-center align-items-center align-self-center m-5 p-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group p-3 px-5">
                    <label htmlFor="course_number">Course Number</label>
                    <input 
                    className="form-control pl-5" 
                    id="course_number" 
                    type="text" 
                    placeholder="Write The Course Number Here" 
                    onChange={handleChange}
                    value={formState.course_number}
                    required
                    />
                </div>
                <div className="form-group p-3 px-5">
                    <label htmlFor="name">Course Name</label>
                    <input 
                    className="form-control pl-5" 
                    id="name" 
                    type="text" 
                    placeholder="Write The Course Name Here" 
                    onChange={handleChange}
                    value={formState.name}
                    required
                    />
                </div>
                <div className="form-group p-3 px-5">
                    <label htmlFor="credit_hours">Credit Hour</label>
                    <input 
                    className="form-control pl-5" 
                    id="credit_hours" 
                    type="number" 
                    placeholder="Write How Many Credit Hours The Course Is Worth" 
                    onChange={handleChange}
                    value={formState.credit_hours}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary ms-5">Submit</button>
            </form>


        </div>
      ) 
}

export default CourseForm
