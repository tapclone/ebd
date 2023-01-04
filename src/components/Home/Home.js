import React from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from './EnquiryForm'
import Header from './Header'
import './Home.css'
import compas from '../Home/assets/compas.png'
import group from '../Home/assets/group.png'
import compas2 from '../Home/assets/compas2.png'
import protactor from '../Home/assets/protactor.png'
import scale1 from '../Home/assets/scale1.png'
import scale2 from '../Home/assets/scale2.png'



function Home() {
  return (
    <div>
      <Header></Header>
      <section style={{ textAlign: 'center',width:"100%",height:'60vh'}}>
        <img style={{ width:'53rem'}} src={group} alt="" />
      </section>


      <section style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative',height:'90vh'}}>

        <img style={{width:'20rem',position:'absolute',top:'3.5rem',left:'15rem'}} src={compas} alt="" />
        <div style={{maxWidth:'20rem',marginLeft:'15rem',marginTop:'3rem'}}>
          <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Accurate <br /> Dimension Transfer</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </section>


      <section style={{display:'flex',alignItems:'start',justifyContent:'center',position:'relative',height:'90vh'}}>
        <div style={{maxWidth:'20rem',marginRight:'5rem',marginTop:'8rem'}}>
         <h1 style={{ color: '#0E8B8F', fontWeight: 'lighter', margin: '0' }}>Inscribing shapes <br /> and arcs</h1> <br />
         <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <img style={{width:'24rem',position:'absolute',top:'0',right:'14rem'}} src={compas2} alt="" />
      </section>


      <section style={{ display: 'flex', justifyContent: 'end', alignItems: 'center',position:'relative',height:'65vh'}}>

        <img style={{width:'30rem',position:'absolute',left:'10rem',top:'3rem'}}  src={protactor} alt="" />
        <div style={{ maxWidth: '20rem',marginRight:"10rem"}}>
          <h1 style={{ color: '#0E8B8F', fontWeight: 'lighter', margin: '0' }}>Perfect angles <br />and measures</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </section>

      <section style={{display:'flex',alignItems:'start',justifyContent:'center',position:'relative',height:'60vh',marginTop:'5rem'}}>
        <div style={{maxWidth:'20rem',marginRight:'15rem'}}>
         <h1 style={{ color: '#0E8B8F', fontWeight: 'lighter', margin: '0' }}>Providing a<br />straightedge</h1> <br />
         <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <img style={{width:'33rem',position:'absolute',top:'1rem',right:'5rem'}} src={scale1} alt="" />
      </section>

      <section style={{ display: 'flex', justifyContent: 'end', alignItems: 'center',position:'relative',height:'90vh'}}>

        <img style={{width:'40rem',position:'absolute',left:'8rem',top:'14rem'}}  src={scale2} alt="" />
        <div style={{ maxWidth: '20rem',marginRight:"10rem"}}>
          <h1 style={{ color: '#0E8B8F', fontWeight: 'lighter', margin: '0' }}>Perfect angles <br />and measures</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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