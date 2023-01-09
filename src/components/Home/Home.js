import React from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from './EnquiryForm'
import Header from './Header'
import './Home.css'
import compas from '../../assets/compas.png'
import group from '../../assets/group.png'
import compas2 from '../../assets/compas2.png'
import protactor from '../../assets/protactor.png'
import scale1 from '../../assets/scale1.png'
import scale2 from '../../assets/scale2.png'


function Home() {
  return (
    <div>
      <Header></Header>
      <section className='groupSection' >
        <img style={{ width:'70%'}} src={group} alt="" />
      </section>


      <section style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className='dividerSection'> 

        <img src={compas} alt="" />

        <div className='dividerContent'>
        <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Accurate <br /> Dimension Transfer</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        </div>

      </section>

      <section style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='compasSection'>
        <div className='compasContent'>
        <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Inscribing shapes <br /> and arcs</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
          <img src={compas2} alt="" />
        </div>
        
      </section>


      <section style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='protactorSection'>
          <img src={protactor} alt="" />
          <div className='protactorContent'>
          <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Perfect angles <br /> and measures</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        </div>

      </section>

      <section style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='scale1Section'>
        <div className='scale1Content'>
        <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Providing a<br />straightedge</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
          <img src={scale1} alt="" />
        </div>
        
      </section>

      <section style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='scale2Section'>
          <img src={scale2} alt="" />
          <div className='scale2Content'>
          <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Planar angle<br />to a baseline</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.</p>
        </div>
        </div>
      </section>

      <section style={{textAlign:'center',height:'40vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingTop:'5rem'}}>
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