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
        <div>
            <Link to="/students/new_student">
                <button>Add New Student</button>
            </Link>
            <section>
                {students?.map((student) => (
                    <div className='d-flex flex-column container bg-dark text-light py-3'>
                        <div>
                            {student.name}
                            {student.email}
                        </div>
                        <div>
                            {student.student_course?.map((course) => (
                                <div >                
                                    {course.name}  
                                    {course.Grade}                                     
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
