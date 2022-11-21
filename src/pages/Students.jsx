import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
        `https://damp-peak-71043.herokuapp.com/school/grade/retrieve`
      )
      setStudents(response.data)
      console.log(response.data)
    }
    getStudentsDetails()
  }, [])


  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://damp-peak-71043.herokuapp.com/school/student/delete/${id}`
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
        <button class=" btn btn-primary btn-lg my-5">Add New Student</button>
      </Link>
      <section className="container">
        <div className="row text-light">
          {students?.map((student) => (
            <div className="col-3 border border-success rounded wrap m-4 p-4 student-card">
              <div>
                <button
                  class=" btn btn-primary btn-sm my-1"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
                <h3>{student.name}</h3>
                <h5 className="d-flex flex-wrap email-text">
                  {' '}
                  <p className="text-warning">E-mail:</p> {student.email}
                </h5>
              </div>
              <div className="">
                {student.student_course?.map((course) => (
                  <div className="d-flex flex-wrap">
                    <h5>{course.name}&nbsp;&nbsp;</h5>
                    <h5 className="text-info" id="intGrade">
                      "{` ${letterGrade[Math.round(`${course.Grade.score}`)]}`}"
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Students
