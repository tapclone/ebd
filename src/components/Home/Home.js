import React from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from './EnquiryForm'
import Header from './Header'
import './Home.css'
import compas from '../Home/assets/compas.png'
import group from '../Home/assets/group.png'
import compas2 from '../Home/assets/compas2.png'
import protactor from '../Home/assets/protactor.png'


function Home() {
  return (
    <div>
      <Header></Header>
      <section style={{ textAlign: 'center',width:"100%",height:'60vh'}}>
        <img style={{ width:'53rem'}} src={group} alt="" />
      </section>


      {/* <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-18rem' }}>

        <img style={{ width: '30rem' }} src={compas} alt="" />
        <div style={{ maxWidth: '20rem', marginLeft: '-6rem' }}>
          <h1 style={{ color: '#0E8B8F', fontWeight: 'lighter', margin: '0' }}>Accurate <br /> Dimension Transfer</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </section>


      <section style={{ display: 'flex', justifyContent: 'end', alignItems: 'center',marginRight:'20rem'}}>
        <div style={{ maxWidth: '20rem', }}>
         <h1 style={{ color: '#0E8B8F', fontWeight: 'lighter', margin: '0' }}>Inscribing shapes <br /> and arcs</h1> <br />
         <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <img style={{ width: '30rem',marginLeft:'-15rem'}} src={compas2} alt="" />
      </section>


      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-2rem' }}>

        <img style={{ width: '30rem' }} src={protactor} alt="" />
        <div style={{ maxWidth: '20rem', marginLeft: '-6rem' }}>
          <h1 style={{ color: '#0E8B8F', fontWeight: 'lighter', margin: '0' }}>Accurate <br /> Dimension Transfer</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </section> */}

      <EnquiryForm></EnquiryForm>
      <Footer></Footer>
    </div>
  )
}

export default Home