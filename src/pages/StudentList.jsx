import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const StudentList = () => {

const [students, setStudents] = useState([])
let { courseId } = useParams()

  useEffect(() => {
    const getStudents = async () => {
        const response = await axios.get(
            `https://damp-peak-71043.herokuapp.com/school/grade/course/${courseId}`
        )
        setStudents(response.data)
        console.log(response.data)
    }
    getStudents()
  }, [])

  return (
    <div>
      {students.course_grade.map((student) => (
        <div className='course'> <h5>Student: {student.name} Grade: {student.Grade.score}</h5></div>
        ))}
    </div>
  )
}

export default StudentList