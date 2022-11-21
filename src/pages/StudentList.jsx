import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const StudentList = () => {

const [students, setStudents] = useState([])
let { id } = useParams()

  useEffect(() => {
    const getStudents = async () => {
        const response = await axios.get(
            `https://damp-peak-71043.herokuapp.com/school/grade/${id}`
        )
        setStudents(response.data)
        console.log(response.data)
    }
    getStudents()
  }, [])

  return (
    <div>StudentList</div>
  )
}

export default StudentList