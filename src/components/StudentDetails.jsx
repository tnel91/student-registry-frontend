import React from 'react'

const StudentDetails = ({id, name, email, studentCourses}) => {
  return (
  <div key={id}>
    <h5>{name}</h5>
    <h5>{email}</h5>
    {/* <h5>{studentCourses}</h5> */}
    </div>
    )
}

export default StudentDetails

