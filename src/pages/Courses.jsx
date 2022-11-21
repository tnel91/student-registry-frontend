import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
  <div>
    <Link to="/courses/new_course">
    <button>Create new Course</button>
    </Link>
    </div>
    )
}

export default Courses
