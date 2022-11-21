import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Courses = () => {

  const [courses, setCourses] = useState([])
  let navigate = useNavigate()

  const handleClick = (e) => {
    navigate(`/courses/${e.target.id}`)
  }

  useEffect(() => {
    const getCourses = async () => {
        const response = await axios.get(
            `https://damp-peak-71043.herokuapp.com/school/grade/courses`
        )
        setCourses(response.data)
        console.log(response.data)
    }
    getCourses()
}, [])


  return (
  <div className='d-flex flex-column align-items-center justify-content-center bg-dark text-light'>
    <Link to="/courses/new_course">
    <button class="btn btn-info btn-lg my-5 ms-5">Create new Course</button>
    </Link>
    <section className='container'>
    {courses.map((course) => (
        <div className='course' id={course.id} onClick={handleClick}> 
          <h5><p className='text-info'>Course Number:</p> {course.course_number}</h5>
          Course: {course.name} 
          Credit Hours: {course.credit_hours} 
        </div>
        ))}
    </section>
    </div>
    )
}

export default Courses
