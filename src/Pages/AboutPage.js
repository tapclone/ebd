import React, { useEffect, useState } from 'react'
import About from '../components/About/About'

function AboutPage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1000)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <About></About>
        {state?<div className='blank'/>:''}
    </div>
  )
}

export default AboutPage