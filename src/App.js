import React from 'react'
import HomePage from './Pages/HomePage'
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import AboutPage from './Pages/AboutPage'
import ProjectsPage from './Pages/ProjectsPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import './App.css'
import SingleProjectPage from './Pages/SingleProjectPage'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/about" element={<AboutPage/>}></Route>
      <Route exact path="/projects" element={<ProjectsPage/>}></Route>
      <Route exact path="/blogs" element={<BlogPage/>}></Route>
      <Route exact path="/contact" element={<ContactPage/>}></Route>
      <Route exact path="/project" element={<SingleProjectPage/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App