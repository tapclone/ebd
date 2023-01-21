import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Home/Header'
import logo from '../assets/logo.svg'
import Blogs from '../components/Blogs/Blogs'

function BlogPage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1500)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <Header></Header>
        <Blogs></Blogs>
        <Footer></Footer>
        {state?<div className='blank'>
        <img style={{width:'10rem'}} src={logo} alt="" />
        </div>:''}
    </div>
  )
}

export default BlogPage