import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'

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
            `${BASE_URL}/school/grade/course/${courseId}`
        )
        setStudents(response.data)
    }
    getStudents()
  }, [])

  return (
    <div className='bg-dark text-light studentList-bg'>
      <section className='container p-5'>
        <div className='row'>
          {students.course_grade?.map((student) => (
            <div className='col-3 border border-success rounded m-4  p-5 course studentList-card' key={student.id}> 
            <h5><span className='text-secondary'>Student:&nbsp; </span> {student.name}</h5>
            <h5 className='text-info' id="intGrade"><span className='text-warning'>Grade:&nbsp; </span> "{` ${letterGrade[Math.round(`${student.Grade.score}`)]}`}"</h5>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default StudentList