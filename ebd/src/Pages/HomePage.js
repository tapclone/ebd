import {React,useEffect,useState} from 'react'
import Home from '../components/Home/Home'
import logo from '../assets/logo.svg'

function HomePage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1500)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <Home></Home>
        {state?<div className='blank'>
        <img style={{width:'10rem'}} src={logo} alt="" />
        </div>:''}
    </div>
  )
}


export default HomePage