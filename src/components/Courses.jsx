import React from 'react'

const Courses = ({id, name, creditHours, courseNumber}) => {
  return (
  <div className="container" key={id}>
    <div className='row border-bottom border-none'>
      <h5 className='col-sm'>{courseNumber}</h5>
      <h5 className='col-sm'>{name}</h5>
      <h5 className='col-sm'>{creditHours}</h5>
    </div>
  </div>
  )
}

export default Courses
