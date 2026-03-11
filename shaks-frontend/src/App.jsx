import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import LessonDetail from './pages/LessonDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail/>} />
        <Route path="/lessons/:id" element={<LessonDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
