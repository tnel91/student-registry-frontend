import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
  
    <nav className="d-flex align-items-center navbar navbar-expand-lg bg-dark  navbar-dark py-1  border-bottom border-secondary">
        <div className=" container" >
            <Link to="/home" className="navbar-brand">
                
                    <img src="https://i.imgur.com/O3umAgs.png" alt="logo" class="lg-sm invisible-sm me-4" width="50px"/>
                    <span className='logo-text'>GA Software Engineer Bootcamp</span>

            </Link>
            <label>
                <input type="checkbox" className='menu_toggle'></input>
                <span className="menu"> <span className="hamburger"></span> </span>
              
                <ul className="navbar-nav d-lg-inline-flex list-unstyled fix-margin">
                <li className="text-white px-2 nav-item"> <a href="/home" className="nav-link"><h5>Home</h5></a> </li>
                <li className="text-white px-2 nav-item"> <a href="/courses" className="nav-link"><h5>Courses</h5></a> </li>
                <li className="text-white px-2 nav-item"> <a href="/students" className="nav-link"><h5>Students</h5></a> </li>
                <li className="text-white px-2 nav-item"> <a href="/syllabus" className="nav-link"><h5>Syllabus</h5></a> </li>
                <li className="text-white px-2 nav-item"> <a href="/syllabus" className="nav-link"><h5>Login</h5></a> </li>
                </ul>
                
            </label>
      </div>
    </nav>
 
    
    )
}

export default Navbar
