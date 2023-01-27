import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Home/Header'
import logo from '../assets/logo.svg'
import Contact from '../components/Contact/Contact'

function ContactPage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1500)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <Header></Header>
        <Contact></Contact>
        <Footer></Footer>
        {state?<div className='blank'>
        <img style={{width:'10rem'}} src={logo} alt="" />
        </div>:''}
    </div>
  )
}

export default ContactPage