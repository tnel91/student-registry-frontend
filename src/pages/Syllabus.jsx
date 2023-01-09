import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Courses from '../components/Courses'
import { BASE_URL } from '../globals'


const Syllabus = () => {
const [syllabus, setSyllabus] = useState(null)

useEffect(() => {
    const getSyllabus = async () => {
        const response = await axios.get(
            `${BASE_URL}/school/course/retrieve`
        )
        setSyllabus(response.data)
    }
    getSyllabus()
}, [])
  return ( 
    <div id="syllabus-hero">
        <div className='container'> 
            <header className='m-4 py-2'>
                <h2 className='my-2 py-5'>Program Requirements</h2>
                <h4 className=' p-4'><p className='text-warning'>Note: </p> All courses  must have a 'C' or better to count
                toward graduation. Any general education course which is a prerequisite
                to another course that is required must also have a 'C' or better.”
                </h4>
                <div className='row border-bottom mb-1'> 
                    <h3 className='col-sm'>Course Number </h3>
                    <h3 className='col-sm'>Course Name</h3>
                    <h3 className='col-sm'>Course Credit Hours</h3>
                </div>
            </header>
            <main>
                {syllabus?.map((course) => (
                    <Courses
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        creditHours={course.credit_hours}
                        courseNumber={course.course_number}
                    />
                ))}
            </main>
        </div>
    </div>)
}

export default Syllabus
