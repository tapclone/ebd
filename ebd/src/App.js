import React from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ProjectsPage from './Pages/ProjectsPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import './App.css'
import SingleProjectPage from './Pages/SingleProjectPage'
import BuildersPage from './Pages/BuildersPage'
import DesignHousePage from './Pages/DesignHousePage'
import ConstructionsPage from './Pages/ConstructionsPage'
import BlogSinglePage from './Pages/BlogSinglePage'

import AdminLogin from "./Pages/admin/Login";
import Home from "./Pages/admin/Home";
import Project from "./Pages/admin/Project";
import AddProject from "./Pages/admin/AddProject";
import Blog from "./Pages/admin/Blog";
import AddBlogpage from "./Pages/admin/AddBlog";

function App() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD:ebd/src/App.js
        <Routes> 
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/projects" element={<ProjectsPage />}></Route>
          <Route exact path="/blogs" element={<BlogPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/project" element={<SingleProjectPage />}></Route>
          <Route exact path="/builders" element={<BuildersPage />}></Route>
          <Route
            exact
            path="/designHouse"
            element={<DesignHousePage />}
          ></Route>
          <Route
            exact
            path="/constructions"
            element={<ConstructionsPage />}
          ></Route>

          {/* admin pages routes */}
          <Route exact path="/admin-login" element={<AdminLogin />}></Route>
          <Route exact path="/admin-home" element={<Home />}></Route>
          <Route exact path="/view-all-projects" element={<Project />}></Route>
          <Route exact path="/add-project" element={<AddProject />}></Route>
          <Route exact path="/view-all-blog" element={<Blog />}></Route>
          <Route exact path="/Add-Blog" element={<AddBlogpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
=======
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/projects" element={<ProjectsPage />}></Route>
        <Route exact path="/blogs" element={<BlogPage />}></Route>
        <Route exact path="/contact" element={<ContactPage />}></Route>
        <Route exact path="/project" element={<SingleProjectPage />}></Route>
        <Route exact path="/builders" element={<BuildersPage />}></Route>
        <Route exact path="/designHouse"  element={<DesignHousePage />} ></Route>
        <Route exact  path="/constructions"  element={<ConstructionsPage />} ></Route>

        {/* admin pages routes */}
        <Route exact path="/admin-login" element={<AdminLogin />}></Route>
        <Route exact path="/admin-home" element={<Home />}></Route>
        <Route exact path="/view-all-projects" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
    </div >
>>>>>>> 6e9d644da9d9dafcc480ec8cdd989ad64f504963:src/App.js
  );
}

export default App;
