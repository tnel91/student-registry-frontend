import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import StudentDetails from '../components/StudentDetails'

const Students = () => {
    const [students, setStudents] = useState([])


    // for(let i = 0; i < grade.length; i++){
    //     if(grade < 62){
    //         return (`F`)
    //     } else if(grade >= 62 && grade < 65){
    //         return (`D-`)
    //     } else if(grade >= 65 && grade < 67 ){
    //         return (`D`)
    //     } else if(grade >= 65 && grade < 72 ){
    //         return (`D`)
    //     } else if(grade >= 65 && grade < 75 ){
    //         return (`D`)
    //     } else if(grade >= 65 && grade < 67 ){
    //         return (`D`)
    //     } else if(grade >= 65 && grade < 67 ){
    //         return (`D`)
    //     } else if(grade >= 65 && grade < 67 ){
    //         return (`D`)
    //     }
    // }
  
    useEffect(() => {
        const getStudents = async () => {
            const response = await axios.get(
                `https://damp-peak-71043.herokuapp.com/school/grade/retrieve`
            )
            setStudents(response.data)
            console.log(response.data)
            
        }
        getStudents()
    }, [])
    return (
        <div>
            <Link to="/students/new_student">
                <button>Add New Student</button>
            </Link>
            <section>
                {students?.map((student) => (
                    <StudentDetails
                        id={student.id}
                        name={student.name}
                        email={student.email}
                        studentCourses={student.student_course}
                        creditHours={student.student_course.credit_hours}
                        courseNumber={student.student_course.course_number}
                    />
                ))}
            </section>
        </div>
    )
}

export default Students
