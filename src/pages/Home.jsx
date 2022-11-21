import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="p-5 mt-2">
      <div className="container">
        <div
          class="align-self-center col-md-6 text-dark d-none d-md-block "
          id="hp-syllabus-background-img"
        >
          <div class="container">
            <Link to="/syllabus">
              <button class="btn btn-primary btn-lg my-5 ms-5 syllabus-button">
                Syllabus
              </button>
            </Link>
          </div>
        </div>
        <div
          class="align-self-center col-md-6 text-dark d-none d-md-block "
          id="hp-courses-background-img"
        >
          <div class="container">
            <Link to="/courses">
              <button class="btn btn-primary btn-lg my-5 ms-5 syllabus-button">
                Courses
              </button>
            </Link>
          </div>
        </div>
        <div
          class="align-self-center col-md-6 text-dark d-none d-md-block "
          id="hp-students-background-img"
        >
          <div class="container">
            <Link to="/students">
              <button class="btn btn-primary btn-lg my-5 ms-5 syllabus-button">
                Students
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
