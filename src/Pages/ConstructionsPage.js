import React, { useEffect, useState } from 'react'
import Constructions from '../components/Projects/Constructions'
import logo from '../assets/logo.svg'
import Header from '../components/Home/Header'
import Footer from '../components/Footer/Footer'

function ConstructionsPage()  {
    const [state,setState]=useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setState(false)
      },1500)
    },[])
    return (
      <div className={state?'blankDiv':''}>
          <Header></Header>
          <Constructions></Constructions>
          <Footer></Footer>
          {state?<div className='blank'>
          <img style={{width:'10rem'}} src={logo} alt="" />
          </div>:''}
      </div>
    )
  }

export default ConstructionsPage