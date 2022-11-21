import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Syllabus from './pages/Syllabus'
import Students from './pages/Students'
import Courses from './pages/Courses'
import CourseForm from './pages/CourseForm'
import StudentForm from './pages/StudentForm'
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/new_student" element={<StudentForm />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/new_course" element={<CourseForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
