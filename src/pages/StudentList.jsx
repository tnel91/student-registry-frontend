import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const StudentList = () => {

const [students, setStudents] = useState([])
let { courseId } = useParams()
const letterGrade = {
  4: 'A',
  3: 'B',
  2: 'C',
  1: 'D',
  0: 'F'
};

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
      <section>
      {students.course_grade?.map((student) => (
        <div className='course'> 
        <h5>Student: {student.name}</h5>
        <h5 className='text-info' id="intGrade">"{` ${letterGrade[Math.round(`${student.Grade.score}`)]}`}"</h5>
        </div>
        ))}
      </section>
    </div>
  )
}

export default StudentList