import {React,useEffect,useState} from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from './EnquiryForm'
import Header from './Header'
import './Home.css'
import divider from '../../assets/videos/divider.mp4'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
import compas from '../../assets/videos/Compass.mp4'
import protactor from '../../assets/videos/protractor.mp4'
import scale1 from '../../assets/videos/set square 2.mp4'
import scale2 from '../../assets/videos/set square.mp4'
import group from '../../assets/videos/EBD intro.mp4'


function Home() {
  return (
    <div >
      <Header></Header>
      <section className='groupSection' >
        <video className='groupDesc' autoPlay muted loop   src={group}></video>
        <video className='groupMobile' src={groupMobile} autoPlay muted loop></video>

      </section>


      <section style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className='dividerSection'> 

        <video autoPlay loop muted src={divider} ></video>

        <div className='dividerContent'>
        <h1 className='sectionh1' style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Accurate <br /> Dimension Transfer</h1> <br />
          <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p className='sectionp'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        </div>

      </section>

      <section style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='compasSection'>
        <div className='compasContent'>
        <h1 className='sectionh1' style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F',}}>Inscribing shapes <br /> and arcs</h1> <br />
          <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p className='sectionp'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
          <video controls src={compas}></video>
        </div>
        
      </section>


      <section style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='protactorSection'>
          <video controls src={protactor}></video>
          <div className='protactorContent'>
          <h1 className='sectionh1' style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Perfect angles <br /> and measures</h1> <br />
          <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p className='sectionp'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        </div>

      </section>

      <section style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='scale1Section'>
        <div className='scale1Content'>
        <h1 className='sectionh1' style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Providing a<br />straightedge</h1> <br />
          <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p className='sectionp'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
          <video src={scale1} controls></video>
        </div>
        
      </section>

      <section style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='scale2Section'>
          <video src={scale2} controls></video>
          <div className='scale2Content'>
          <h1 className='sectionh1' style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Planar angle<br />to a baseline</h1> <br />
          <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p className='sectionp'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.</p>
        </div>
        </div>
      </section>

      <section style={{textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingTop:'5rem',paddingBottom:'4%'}}>
        <h1 style={{textTransform:'uppercase',color:'#0E8B8F',fontWeight:'lighter'}}>a Perfect craft in every aspect</h1>
        <div style={{width:'3rem',height:'1px',background:'#0E8B8F'}}></div>
        <h1 style={{textTransform:'uppercase',color:'rgba(0,0,0,0.5)',fontWeight:'lighter'}}>Thats what we stand for!</h1>
      </section>

      <EnquiryForm></EnquiryForm>
      <Footer></Footer>
    </div>
  )
}

export default Home