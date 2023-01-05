import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Home/Header'

function BlogPage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1000)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <Header></Header>
        <Footer></Footer>
        {state?<div className='blank'/>:''}
    </div>
  )
}

export default BlogPage