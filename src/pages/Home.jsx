import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="p-5 mt-2">
      <div className="container">
        <div>
          <button
            class=" btn btn-primary btn-lg my-1"
            onClick={() => navigate('/courses')}
          >
            Courses
          </button>
        </div>
        <div>
          <button
            class=" btn btn-primary btn-lg my-1"
            onClick={() => navigate('/students')}
          >
            Students
          </button>
        </div>
        <div>
          <button
            class=" btn btn-primary btn-lg my-1"
            onClick={() => navigate('/syllabus')}
          >
            Syllabus
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
