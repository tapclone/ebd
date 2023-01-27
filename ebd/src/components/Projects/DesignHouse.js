import React from 'react'
import { useNavigate } from 'react-router-dom'
import EnquiryForm from '../Home/EnquiryForm'
import image from '../../assets/Asset 3@300.png'
import video from '../../assets/videos/ebd pc.mp4'

function DesignHouse() {
    const navigate = useNavigate()
    return (
        <div>
            <section className='projSec' style={{ marginTop: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className='constructionH1'>
                    <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Design House</h1>
                </div>
                <div className='constructionSection'>
                    <div className="imgSec">
                        <video src={video} autoPlay muted loop></video>
                    </div>
                    <div className="contentSec">
                        <p style={{ textAlign: 'justify' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                            <p style={{ textAlign: 'justify' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                            <p style={{ textAlign: 'justify' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </p>

                    </div>
                </div>
            </section>

            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: '3rem', paddingTop: '3rem' }}>
                <div className='constructionH1'>
                    <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Design House</h1>
                </div>
                <p style={{textAlign:'justify'}}>That's where we stand out</p>

                <div className='projectsGrid' style={{ display: 'grid', width: '100%', gridTemplateColumns: 'auto auto auto', placeItems: 'center', placeContent: 'center', columnGap: '5%',rowGap:'2rem', marginTop: "2rem" }}>
                    <div className='card card1' >
                        <img src={image} alt="" />
                        <p style={{ margin: '0', fontWeight: 'lighter', color: 'white', textAlign: 'center', fontSize: '0.8rem', marginTop: '10px' }}>BABIL ASPENGLOW</p>
                        <div style={{ background: 'white', width: '3rem', height: '1px', marginTop: '4px' }}></div>
                    </div>
                    <div className='card card2' >
                        <img src={image} alt="" />
                        <p style={{ margin: '0', fontWeight: 'lighter', textAlign: 'center', fontSize: '0.8rem', marginTop: '10px' }}>BABIL ASPENGLOW</p>
                        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px', marginTop: '4px' }}></div>
                    </div>
                    <div className='card card3'>
                        <p style={{ maxWidth: '80%', textAlign: 'justify', hyphens: 'auto', marginTop: '30%', color: 'white', fontWeight: 'lighter', opacity: '0.8' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                        <span className='readMore' onClick={() => navigate('/project')} style={{ color: 'white' }}>READ MORE</span>
                    </div>

               
                    <div className='card card1' >
                        <img src={image} alt="" />
                        <p style={{ margin: '0', fontWeight: 'lighter', color: 'white', textAlign: 'center', fontSize: '0.8rem', marginTop: '10px' }}>BABIL ASPENGLOW</p>
                        <div style={{ background: 'white', width: '3rem', height: '1px', marginTop: '4px' }}></div>
                    </div>
                    <div className='card card2' >
                        <img src={image} alt="" />
                        <p style={{ margin: '0', fontWeight: 'lighter', textAlign: 'center', fontSize: '0.8rem', marginTop: '10px' }}>BABIL ASPENGLOW</p>
                        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px', marginTop: '4px' }}></div>
                    </div>
                    <div className='card card3'>
                        <p style={{ maxWidth: '80%', textAlign: 'justify', hyphens: 'auto', marginTop: '30%', color: 'white', fontWeight: 'lighter', opacity: '0.8' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                        <span className='readMore' onClick={() => navigate('/project')} style={{ color: 'white' }}>READ MORE</span>
                    </div>

               
                    <div className='card card1' >
                        <img src={image} alt="" />
                        <p style={{ margin: '0', fontWeight: 'lighter', color: 'white', textAlign: 'center', fontSize: '0.8rem', marginTop: '10px' }}>BABIL ASPENGLOW</p>
                        <div style={{ background: 'white', width: '3rem', height: '1px', marginTop: '4px' }}></div>
                    </div>
                    <div className='card card2' >
                        <img src={image} alt="" />
                        <p style={{ margin: '0', fontWeight: 'lighter', textAlign: 'center', fontSize: '0.8rem', marginTop: '10px' }}>BABIL ASPENGLOW</p>
                        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px', marginTop: '4px' }}></div>
                    </div>
                    <div className='card card3'>
                        <p style={{ maxWidth: '80%', textAlign: 'justify', hyphens: 'auto', marginTop: '30%', color: 'white', fontWeight: 'lighter', opacity: '0.8' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                        <span className='readMore' onClick={() => navigate('/project')} style={{ color: 'white' }}>READ MORE</span>
                    </div>

                </div>

                <span className='readMoreC'>Read More</span>
            </section>
            <EnquiryForm></EnquiryForm>

        </div>
    )
}

export default DesignHouse