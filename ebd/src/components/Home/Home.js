import { React, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from './EnquiryForm'
import Header from './Header'
import './Home.css'
import divider from '../../assets/videos/divider.mp4'
import compas from '../../assets/videos/Compass.mp4'
import protactor from '../../assets/videos/protractor.mp4'
import scale1 from '../../assets/videos/set square 2.mp4'
import scale2 from '../../assets/videos/set square.mp4'
import group from '../../assets/videos/EBD intro.mp4'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
import GroupSection from './GroupSection'


function Home() {
  return (
    <div style={{width:'100%',overflowX:'hidden'}}>
      <Header></Header>
      <GroupSection></GroupSection>


      <section style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='dividerSection'>


          <video autoPlay loop muted src={divider} ></video>
          <div className="respDividerContent">
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Accurate <br /> <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px',marginTop:'1px' }}></div>
            Dimension Transfer</h1> <br />
            
          </div>

          <div className='dividerContent'>
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Accurate <br /> Dimension Transfer</h1> <br />
            <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

            <p className='sectionp'>Transforming data from one set of dimensions or coordinates to another while maintaining the integrity and accuracy of the information. It includes mathematical transformations, machine learning algorithms, and computer graphics techniques making the data more useful or interpretable for a particular application or analysis.</p>
          </div>

        </div>

      </section>

       <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className='compasSection'>
          <div className='compasContent'>
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F', }}>Inscribing shapes <br /> and arcs</h1> <br />
            <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

            <p className='sectionp'>For the design and planning of buildings, structures and the spaces around them, Architects use their knowledge of materials, construction techniques, and regulations to create functional, safe, and aesthetically pleasing structures. Perfect inscription of shapes and arcs to construct the buildings and structures designed by architects, we use a variety of tools and materials, such as bricks, concrete, steel, and wood, to build the structure according to the plans and specifications provided by the architect.</p>
          </div>

          <div className="respCompasContent">
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Inscribing shapes  <br /> <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px',marginTop:'1px' }}></div>
            and arcs</h1> <br />
            
          </div>
          <video autoPlay loop muted src={compas}></video>

          
        </div>

      </section>


   <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className='protactorSection'>
        <div className="respProtactorContent">
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Perfect angles  <br /> <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px',marginTop:'1px' }}></div>
            and measures</h1> <br />
            
          </div>
          <video autoPlay loop muted src={protactor}></video>
          <div className='protactorContent'>
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Perfect angles <br /> and measures</h1> <br />
            <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

            <p className='sectionp'>We ensure that the angles and dimensions of a structure are precise and accurate. This is essential for ensuring the stability, safety, and functionality of the structure.</p>
          </div>
        </div>

      </section>

        <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className='scale1Section'>
          <div className='scale1Content'>
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Providing a<br />straightedge</h1> <br />
            <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

            <p className='sectionp'>Helping to ensure accuracy and precision in the creation of straight lines and in measuring distances and angles. Drawing straight lines , checking straightness, measuring distances, guiding a cutting tool done precisely.</p>
          </div>
          <div className="respScale1Content">
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Providing a  <br /> <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px',marginTop:'1px' }}></div>
            straightedge</h1> <br />
            
          </div>
          <video src={scale1} autoPlay loop muted ></video>
        </div>

      </section>

      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className='scale2Section'>
        <div className="respScale2Content">
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Planar angle<br /> <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px',marginTop:'1px' }}></div>
            to a baseline</h1> <br />

          </div>
          <video src={scale2} autoPlay loop muted ></video>
          <div className='scale2Content'>
            <h1 className='sectionh1' style={{ margin: '0', fontWeight: 'lighter', color: '#0E8B8F' }}>Planar angle<br />to a baseline</h1> <br />
            <div className='underLine' style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

            <p className='sectionp'> It used to determine the slope of a roof, the incline of a ramp, or the angle of a wall or other vertical surface. By measuring the angle between the baseline and the planar surface, we ensure that the surface is level, or that it has the desired slope or angle.</p>
          </div>
        </div>
      </section>

       <section className='caption' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem', paddingBottom: '4%' }}>
        <h1 style={{ textTransform: 'uppercase', color: '#0E8B8F', fontWeight: 'lighter' }}>a Perfect craft in every aspect</h1>
        <div style={{ width: '3rem', height: '1px', background: '#0E8B8F' }}></div>
        <h1 style={{ textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', fontWeight: 'lighter' }}>Thats what we stand for!</h1>
      </section>

   <EnquiryForm></EnquiryForm>
        <Footer></Footer>
    </div>
  )
}

export default Home