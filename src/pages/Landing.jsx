import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
  <div >
     <section
      class=" bg-dark text-light py-5 text-center text-sm-start"
    >
      <div class="container ">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>Become a <span class="text-warning"> Software Engineer </span>Today</h1>
            <p class="lead my-4">
              Software Engineering jobs have been on high demand lately. Achive success by learning how to become a full stack developer and empower yourself by landing a job that can even earn you a 6 figure income!
            </p>
            <Link to="/register">
              <button
                class="btn btn-primary btn-lg my-5"
              >
              Enrollment Today
              </button>
            </Link>
          </div>
          <img
            class="img-fluid w-50 d-none d-md-block ms-5 my-3 rounded"
            src="https://i.imgur.com/f616IDz.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section id='hero' class="bg-image shadow-2-strong"></section>
    <div class="row">
      <div class="align-self-center col-md-6 text-dark d-none d-md-block " id="lp-background-img">
        <div class="container">
        <Link to="/syllabus">
          <button class="btn btn-primary btn-lg my-5 ms-5 syllabus-button">
              Get The Syllabus
          </button>
        </Link>
        </div>
      </div>
    <div class="col-md-6  bg-dark text-light">
      <div class="container py-5">
        <h4 className='text-warning pt-5'>Full Stack Developer</h4>
          <p >
            Software Engineering represents the fastest growing segment of software
            professionals - men and women who solve problems and issues in the
            development of mission-critical software to meet the needs of business
            and industry. The undergraduate program in Software Engineering has the
            primary objective of preparing a new generation of software developers
            focused on the engineering of software systems; that is, those systems
            that meet specified requirements, that are built with mission critical quality
            levels, and that are within cost and schedule requirements.
          </p>
          <Link to="/syllabus"> 
            <button class="btn btn-primary btn-lg my-5 ms-5  d-md-none">
              Get The Syllabus
            </button>
          </Link>
      </div>
    </div>
</div>
</div>
    )
}

export default Landing

