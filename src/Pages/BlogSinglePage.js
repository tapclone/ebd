import React, { useEffect, useState } from 'react'
import BlogSingle from '../components/Blogs/BlogSingle'
import logo from '../assets/logo.svg'
import Footer from '../components/Footer/Footer'
import Header from '../components/Home/Header'

function BlogSinglePage() {
    const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1500)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <Header></Header>
        <BlogSingle></BlogSingle>
        <Footer></Footer>
        {state?<div className='blank'>
        <img style={{width:'10rem'}} src={logo} alt="" />
        </div>:''}
    </div>
  )
}

export default BlogSinglePage