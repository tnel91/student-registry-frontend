import { useState, useEffect } from 'react'

const StudentCard = (props) => {
  const [GPA, setGPA] = useState(null)

  const getGPA = () => {
    let sum = 0
    props.student.student_course?.map((course) => {
      sum += parseFloat(course.Grade.score)
    })
    let rawGPA = sum / props.student.student_course.length
    let GPA = rawGPA.toFixed(2)
    setGPA(GPA)
  }

  useEffect(() => {
    getGPA()
  }, [])

  return (
    <div>
      <div>
        <button
          className=" btn btn-danger btn-sm mb-4"
          onClick={() => props.handleDelete(props.student.id)}
        >
          Dropout
        </button>
        <h3>{props.student.name}</h3>
        <h5 className="d-flex flex-wrap email-text">
          {' '}
          <p className="text-warning">E-mail:&nbsp;</p> {props.student.email}
        </h5>
      </div>
      <div className="">
        {props.student.student_course?.map((course) => (
          <div className="d-flex flex-wrap" key={course.id}>
            <h5>{course.name}&nbsp;&nbsp;</h5>
            <h5 className="text-info" id="intGrade">
              "{` ${props.letterGrade[Math.round(`${course.Grade.score}`)]}`}"
            </h5>
          </div>
        ))}
      </div>
      <div className="d-flex flex-wrap">
        <h5>GPA&nbsp;&nbsp;</h5>
        <h5 className="text-info" id="intGrade">
          {GPA}
        </h5>
      </div>
    </div>
  )
}

export default StudentCard
