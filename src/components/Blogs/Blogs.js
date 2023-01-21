import React from 'react'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
import group from '../../assets/videos/EBD intro.mp4'
import './Blog.css'
import image from '../../assets/Asset 3@300.png'
import EnquiryForm from '../Home/EnquiryForm'
function Blogs() {
  return (
    <div>
      <section className='groupSection' >
        <video className='groupDesc' autoPlay muted loop src={group}></video>
        <video className='groupMobile' src={groupMobile} autoPlay muted loop></video>

      </section>

      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '3rem' }}>

        <div className='blogH1'>
          <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Blogs</h1>
        </div>
        <div className='blogSection'>
          <div className='blogCard '>
            <div className='imgSectionBlogCard'>
              <img src={image} alt="" />
            </div>
            <div className='contentSectionBlogCard'>
              <h2 style={{ margin: '0' ,fontWeight:'normal'}}>Best Builders In Calicut</h2>
              <p style={{ textAlign: 'justify', color: 'white', margin: '0', marginBottom: '2rem' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <div style={{textAlign:'center'}}>
                <span className='readMoreC' style={{ border: '1px solid white' }}>Read More</span>
              </div>

            </div>



          </div>

          <div className='blogCard plane'>
            <div className='imgSectionBlogCard'>
              <img src={image} alt="" />
            </div>
            <div className='contentSectionBlogCard'>
              <h2 style={{ margin: '0' ,fontWeight:'normal'}}>Best Builders In Calicut</h2>
              <p style={{ textAlign: 'justify', color: 'white', margin: '0', marginBottom: '2rem' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <div style={{textAlign:'center'}}>
                <span className='readMoreC' style={{ border: '1px solid white' }}>Read More</span>
              </div>

            </div>

          </div>

          <div className='blogCard  '>
            <div className='imgSectionBlogCard'>
              <img src={image} alt="" />
            </div>
            <div className='contentSectionBlogCard'>
              <h2 style={{ margin: '0' ,fontWeight:'normal'}}>Best Builders In Calicut</h2>
              <p style={{ textAlign: 'justify', color: 'white', margin: '0', marginBottom: '2rem' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <div style={{textAlign:'center'}}>
                <span className='readMoreC' style={{ border: '1px solid white' }}>Read More</span>
              </div>

            </div>

          </div>

          <div className='blogCard plane'>
            <div className='imgSectionBlogCard'>
              <img src={image} alt="" />
            </div>
            <div className='contentSectionBlogCard'>
              <h2 style={{ margin: '0' ,fontWeight:'normal'}}>Best Builders In Calicut</h2>
              <p style={{ textAlign: 'justify', color: 'white', margin: '0', marginBottom: '2rem' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <div style={{textAlign:'center'}}>
                <span className='readMoreC' style={{ border: '1px solid white' }}>Read More</span>
              </div>

            </div>

          </div>

          <div className='blogCard '>
            <div className='imgSectionBlogCard'>
              <img src={image} alt="" />
            </div>
            <div className='contentSectionBlogCard'>
              <h2 style={{ margin: '0' ,fontWeight:'normal'}}>Best Builders In Calicut</h2>
              <p style={{ textAlign: 'justify', color: 'white', margin: '0', marginBottom: '2rem' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <div style={{textAlign:'center'}}>
                <span className='readMoreC' style={{ border: '1px solid white' }}>Read More</span>
              </div>

            </div>

          </div>


        </div>


        <div className='readMoreC'>Load More</div>

      </section>
      <EnquiryForm></EnquiryForm>

    </div>
  )
}

export default Blogs