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
  <div>
    <Link to="/courses/new_course">
    <button>Create new Course</button>
    </Link>
    <section>
    {courses.map((course) => (
        <div className='course' id={course.id} onClick={handleClick}> Course: {course.name} Credit Hours: {course.credit_hours} Course Number: {course.course_number}</div>
        ))}
    </section>
    </div>
    )
}

export default Courses
