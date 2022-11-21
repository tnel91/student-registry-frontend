import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Students = () => {
    const [students, setStudents] = useState([])
  
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

    return (
        <div className='bg-dark'>
            <Link to="/students/new_student">
                <button>Add New Student</button>
            </Link>
            <section>
                {students?.map((student) => (
                    <div className='d-flex flex-column container bg-dark text-light py-3'>
                        <div>
                            <h3>{student.name}</h3>
                            <h5 className='d-flex'> <p className='text-warning'>E-mail:&nbsp;&nbsp;</p>{student.email}</h5>
                        </div>
                        <div className='container'>
                            {student.student_course?.map((course) => (
                                <div className='d-flex'>                                                   
                                    <h5>{course.name}&nbsp;</h5> 
                                    <h5>{course.Grade.score}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    
                    
                    // <StudentDetails
                    //     id={student.id}
                    //     name={student.name}
                    //     email={student.email}
                    //     studentCourses={student.student_course}   
                    
                    // />
                
                
                
                
                ))}
                
                
            </section>
        </div>
    )
}

export default Students
