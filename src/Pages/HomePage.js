import {React,useEffect,useState} from 'react'
import Home from '../components/Home/Home'

function HomePage() {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },1000)
  },[])
  return (
    <div className={state?'blankDiv':''}>
        <Home></Home>
        {state?<div className='blank'/>:''}
    </div>
  )
}


export default HomePage