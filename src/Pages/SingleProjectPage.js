import React, { useEffect, useState } from 'react'
import SingleProject from '../components/Projects/SingleProject'
import logo from '../assets/logo.svg'

function SingleProjectPage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1500)
  },[])
  useEffect(()=>{
    document.documentElement.scrollTop=0;
  },[state])
  return (
    <div onLoad={()=>setState(true)} className={state?'blankDiv':''}>
        <SingleProject></SingleProject>
        {state?<div className='blank'>
          <img style={{width:'10rem'}} src={logo} alt="" />
        </div>:''}
    </div>
  )
}

export default SingleProjectPage