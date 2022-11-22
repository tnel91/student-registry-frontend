import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="row">
        <div
          className="align-self-center col-md-6 text-dark d-none d-md-block"
          id="hp-syllabus-background-img"
        >
          <div className="container">
            <Link to="/syllabus">
              <button className="btn btn-primary btn-lg my-5 ms-5">
                Syllabus
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6  bg-dark text-light">
          <div className="container py-5">
            <h4 className="text-warning pt-5">Syllabus</h4>
            <p>View all available classes.</p>
            <Link to="/syllabus">
              <button className="btn btn-primary btn-lg my-5 ms-5  d-md-none">
                Syllabus
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="align-self-center col-md-6 text-dark d-none d-md-block "
          id="hp-courses-background-img"
        >
          <div className="container">
            <Link to="/courses">
              <button className="btn btn-primary btn-lg my-5 ms-5">
                Courses
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6  bg-dark text-light">
          <div className="container py-5">
            <h4 className="text-warning pt-5">Courses</h4>
            <p>View all courses.</p>
            <Link to="/courses">
              <button className="btn btn-primary btn-lg my-5 ms-5  d-md-none">
                Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="align-self-center col-md-6 text-dark d-none d-md-block "
          id="hp-students-background-img"
        >
          <div className="container">
            <Link to="/students">
              <button className="btn btn-primary btn-lg my-5 ms-5">
                Students
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6  bg-dark text-light">
          <div className="container py-5">
            <h4 className="text-warning pt-5">Students</h4>
            <p>View all students.</p>
            <Link to="/students">
              <button className="btn btn-primary btn-lg my-5 ms-5  d-md-none">
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
