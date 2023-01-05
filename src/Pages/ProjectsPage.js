import React, { useEffect, useState } from 'react'

import Projects from '../components/Projects/Projects'

function ProjectsPage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1000)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <Projects></Projects>
        {state?<div className='blank'/>:''}
    </div>
  )
}

export default ProjectsPage