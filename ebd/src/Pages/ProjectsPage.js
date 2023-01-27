import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import Projects from '../components/Projects/Projects'

function ProjectsPage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1500)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <Projects></Projects>
        {state?<div className='blank'>
        <img style={{width:'10rem'}} src={logo} alt="" />
        </div>:''}
    </div>
  )
}

export default ProjectsPage