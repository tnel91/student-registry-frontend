import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Syllabus from './pages/Syllabus'

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
        </Routes>
      </main>
    </div>
  )
}

export default App
