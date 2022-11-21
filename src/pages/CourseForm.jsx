import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { useNavigate} from 'react-router-dom'


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
    axios.post(`http://localhost:3001/school/course/create`, formState)
    navigate(`/courses`)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="course_number">Course Number</label>
                    <input 
                    className="form-control" 
                    id="course_number" 
                    type="text" 
                    placeholder="Write The Course Number Here" 
                    onChange={handleChange}
                    value={formState.course_number}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Course Name</label>
                    <input 
                    className="form-control" 
                    id="name" 
                    type="text" 
                    placeholder="Write The Course Name Here" 
                    onChange={handleChange}
                    value={formState.name}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="credit_hours">Credit Hour</label>
                    <input 
                    className="form-control" 
                    id="credit_hours" 
                    type="number" 
                    placeholder="Write How Many Credit Hours The Course Is Worth" 
                    onChange={handleChange}
                    value={formState.credit_hours}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
      ) 
}

export default CourseForm
