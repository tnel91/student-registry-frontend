import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import StudentCard from '../components/StudentCard'
import {BASE_URL} from '../globals'

const Students = () => {
  const [students, setStudents] = useState([])

  const letterGrade = {
    4: 'A',
    3: 'B',
    2: 'C',
    1: 'D',
    0: 'F'
  }

  useEffect(() => {
    const getStudentsDetails = async () => {
      const response = await axios.get(
        `${BASE_URL}/school/grade/retrieve`
      )
      setStudents(response.data)
    }
    getStudentsDetails()
  }, [])

  const handleDelete = async (id) => {
    await axios
      .delete(
        `${BASE_URL}/school/student/delete/${id}`
      )
      .then(() => {
        console.log(`Deleted student with id of ${id}`)
        // getStudentsDetails()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-dark">
      <Link to="/students/new_student">
        <button className=" btn btn-primary btn-lg my-5">
          Add New Student
        </button>
      </Link>
      <section className="container">
        <div className="row text-light">
          {students?.map((student) => (
            <div
              className="col-3 border border-success rounded wrap m-4 p-4 student-card"
              key={student.id}
            >
              <StudentCard
                handleDelete={handleDelete}
                letterGrade={letterGrade}
                student={student}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Students
