import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../globals';

const Courses = () => {

  const [courses, setCourses] = useState([])
  let navigate = useNavigate()

  const handleClick = (e) => {
    navigate(`/courses/${e.target.id}`)
  }

  useEffect(() => {
    const getCourses = async () => {
        const response = await axios.get(
            `${BASE_URL}/school/grade/courses`
        )
        setCourses(response.data)
    }
    getCourses()
}, [])


  return (
  <div className='d-flex flex-column align-items-center justify-content-center bg-dark text-light'>
    <Link to="/courses/new_course">
    <button className="btn btn-info btn-lg my-5 ms-5">Create new Course</button>
    </Link>
    <section className='container'>
    {courses.map((course) => (
        <div className='d-flex flex-column border border-success rounded m-3 p-4' id={course.id} key={course.id}> 
          <h5><span className='text-info'>Course Number:&nbsp; </span> {course.course_number}</h5>
          <h5><span className='text-info'>Course:&nbsp; </span>{course.name}</h5>  
          <h5><span className='text-info'>Credit Hours:&nbsp;</span>{course.credit_hours} </h5>
          <Link to={`/courses/${course.id}`}> 
            <button className="btn btn-info btn-lg my-5 mx-5" onClick={handleClick}>View This Semester's Student Grades For {course.name}&nbsp;{course.course_number}</button>
          </Link>
        </div>
        ))}
    </section>
    </div>
    )
}

export default Courses
