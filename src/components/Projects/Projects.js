import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Home/Header'
import group from '../../assets/videos/EBD intro.mp4'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
import './Projects.css'
import image from '../../assets/Asset 3@300.png'
import EnquiryForm from '../Home/EnquiryForm'
import {useNavigate} from 'react-router-dom'

function Projects() {
  const navigate=useNavigate()
  return (
    <div>
      <Header></Header>
      <section className='groupSection' >
        <video className='groupDesc' autoPlay muted loop src={group}></video>
        <video className='groupMobile' src={groupMobile} autoPlay muted loop></video>

      </section>

      
      <section style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'7rem'}}>
      <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F',textAlign:'center'}}>Our Projects</h1> 
      <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' ,marginTop:'5px'}}></div>
      <p className='ourProjectsP' style={{textAlign:'justify',width:'60%',minWidth:'36rem'}}>Estate Builders & Developers was launched at the onset of the second millennium, as a contract construction company. With deep dedication & hard work of the team, it fixed firmly and settled well versed in the field. Quality, punctuality and the perfection in all the works lead to many major dignified projects, which in turn lead EBD to be upgraded as an architectural and developmental firm in the year 2019. It also came up with an extremely glorious project called EALA STAYS in the year 2020. It was a grand and major milestone in the history of EBD.</p>
        
      </section>


      <section style={{width:'100%',marginTop:'5rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F',textAlign:'center'}}>EBD Design House</h1>
      <div style={{ background: '#0E8B8F', width: '3rem', height: '1px',marginTop:'5px' }}></div>
      <div className='projectsGrid' style={{display:'grid',width:'100%',gridTemplateColumns:'auto auto auto',placeItems:'center',placeContent:'center',columnGap:'5%',marginTop:"2rem"}}>
      <div className='card card1' >
        <img  src={image} alt="" />
        <p style={{margin:'0',fontWeight:'lighter',color:'white',textAlign:'center',fontSize:'0.8rem',marginTop:'10px'}}>BABIL ASPENGLOW</p>
        <div style={{ background: 'white', width: '3rem', height: '1px' ,marginTop:'4px'}}></div>
      </div>
      <div className='card card2' >
        <img  src={image} alt="" />
        <p style={{margin:'0',fontWeight:'lighter',textAlign:'center',fontSize:'0.8rem',marginTop:'10px'}}>BABIL ASPENGLOW</p>
        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' ,marginTop:'4px'}}></div>
      </div>
      <div className='card card3'>
        <p style={{maxWidth:'80%',textAlign:'justify',hyphens:'auto',marginTop:'30%',color:'white',fontWeight:'lighter',opacity:'0.8'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        <span className='readMore' onClick={()=>navigate('/project')} style={{color:'white'}}>READ MORE</span>
      </div>

      </div>
      </section>

      <section style={{width:'100%',marginTop:'5rem',display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'4rem'}}>
      <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F',textAlign:'center'}}>EBD Constructions</h1>
      <div style={{ background: '#0E8B8F', width: '3rem', height: '1px',marginTop:'5px' }}></div>
        <div className='projectsGrid' style={{display:'grid',width:'100%',gridTemplateColumns:'auto auto auto',placeItems:'center',placeContent:'center',columnGap:'5%',marginTop:"2rem"}}>
      <div className='card card1' >
        <img  src={image} alt="" />
        <p style={{margin:'0',fontWeight:'lighter',color:'white',textAlign:'center',fontSize:'0.8rem',marginTop:'10px'}}>BABIL ASPENGLOW</p>
        <div style={{ background: 'white', width: '3rem', height: '1px' ,marginTop:'4px'}}></div>
      </div>
      <div className='card card2' >
        <img  src={image} alt="" />
        <p style={{margin:'0',fontWeight:'lighter',textAlign:'center',fontSize:'0.8rem',marginTop:'10px'}}>BABIL ASPENGLOW</p>
        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' ,marginTop:'4px'}}></div>
      </div>
      <div className='card card3'>
        <p style={{maxWidth:'80%',textAlign:'justify',hyphens:'auto',marginTop:'30%',color:'white',fontWeight:'lighter',opacity:'0.8'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        <span className='readMore' onClick={()=>navigate('/project')} style={{color:'white'}}>READ MORE</span>
      </div>

      </div>
      </section>

      <section style={{width:'100%',marginTop:'5rem',display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'4rem'}}>
      <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F',textAlign:'center'}}>EBD Builders</h1>
      <div style={{ background: '#0E8B8F', width: '3rem', height: '1px',marginTop:'5px' }}></div>
        <div className='projectsGrid' style={{display:'grid',width:'100%',gridTemplateColumns:'auto auto auto',placeItems:'center',placeContent:'center',columnGap:'5%',marginTop:"2rem"}}>
      <div className='card card1' >
        <img  src={image} alt="" />
        <p style={{margin:'0',fontWeight:'lighter',color:'white',textAlign:'center',fontSize:'0.8rem',marginTop:'10px'}}>BABIL ASPENGLOW</p>
        <div style={{ background: 'white', width: '3rem', height: '1px' ,marginTop:'4px'}}></div>
      </div>
      <div className='card card2' >
        <img  src={image} alt="" />
        <p style={{margin:'0',fontWeight:'lighter',textAlign:'center',fontSize:'0.8rem',marginTop:'10px'}}>BABIL ASPENGLOW</p>
        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' ,marginTop:'4px'}}></div>
      </div>
      <div className='card card3'>
        <p style={{maxWidth:'80%',textAlign:'justify',hyphens:'auto',marginTop:'30%',color:'white',fontWeight:'lighter',opacity:'0.8'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        <span className='readMore' onClick={()=>navigate('/project')} style={{color:'white'}}>READ MORE</span>
      </div>

      </div>
      </section>

      <EnquiryForm></EnquiryForm>

      <Footer></Footer>
    </div>
  )
}

export default Projects