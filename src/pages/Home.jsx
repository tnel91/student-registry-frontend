import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div class="row">
        <div
          class="align-self-center col-md-6 text-dark d-none d-md-block"
          id="hp-syllabus-background-img"
        >
          <div class="container">
            <Link to="/syllabus">
              <button class="btn btn-primary btn-lg my-5 ms-5">Syllabus</button>
            </Link>
          </div>
        </div>
        <div class="col-md-6  bg-dark text-light">
          <div class="container py-5">
            <h4 className="text-warning pt-5">Syllabus</h4>
            <p>View all available classes.</p>
            <Link to="/syllabus">
              <button class="btn btn-primary btn-lg my-5 ms-5  d-md-none">
                Syllabus
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="align-self-center col-md-6 text-dark d-none d-md-block "
          id="hp-courses-background-img"
        >
          <div class="container">
            <Link to="/courses">
              <button class="btn btn-primary btn-lg my-5 ms-5">Courses</button>
            </Link>
          </div>
        </div>
        <div class="col-md-6  bg-dark text-light">
          <div class="container py-5">
            <h4 className="text-warning pt-5">Courses</h4>
            <p>View all courses.</p>
            <Link to="/courses">
              <button class="btn btn-primary btn-lg my-5 ms-5  d-md-none">
                Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="align-self-center col-md-6 text-dark d-none d-md-block "
          id="hp-students-background-img"
        >
          <div class="container">
            <Link to="/students">
              <button class="btn btn-primary btn-lg my-5 ms-5">Students</button>
            </Link>
          </div>
        </div>
        <div class="col-md-6  bg-dark text-light">
          <div class="container py-5">
            <h4 className="text-warning pt-5">Students</h4>
            <p>View all students.</p>
            <Link to="/students">
              <button class="btn btn-primary btn-lg my-5 ms-5  d-md-none">
                Students
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="p-4 mt-0">
    //   <div className="container">
    //     <div className="row">
    //       <div
    //         class="align-self-center col-md-6 text-dark d-md-block "
    //         id="hp-syllabus-background-img"
    //       >
    //         <div class="container">
    //           <Link to="/syllabus">
    //             <button class="btn btn-primary btn-lg my-5 ms-5">
    //               Syllabus
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div
    //         class="align-self-center col-md-6 text-dark d-md-block "
    //         id="hp-courses-background-img"
    //       >
    //         <div class="container">
    //           <Link to="/courses">
    //             <button class="btn btn-primary btn-lg my-5 ms-5">
    //               Courses
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div
    //         class="align-self-center col-md-6 text-dark d-md-block "
    //         id="hp-students-background-img"
    //       >
    //         <div class="container">
    //           <Link to="/students">
    //             <button class="btn btn-primary btn-lg my-5 ms-5">
    //               Students
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home
