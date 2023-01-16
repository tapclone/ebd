import React, { useEffect, useState } from 'react'
import About from '../components/About/About'
import logo from '../assets/logo.svg'

function AboutPage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1500)
  },[])
  return (
    <div  className={state?'blankDiv':''}>
        <About></About>
        {state?<div className='blank'>
        <img style={{width:'10rem'}} src={logo} alt="" />
        </div>:''}
    </div>
  )
}

export default AboutPage