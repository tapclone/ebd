import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
import group from '../../assets/videos/EBD intro.mp4'
import './Blog.css'
import image from '../../assets/Asset 3@300.png'
import EnquiryForm from '../Home/EnquiryForm'
import GroupSection from '../Home/GroupSection'
import axios from 'axios'
function Blogs() {
  const navigate = useNavigate()
  const [blogs,setBlogs]=useState([])

  useEffect(() => {
    (async function () {
      await axios.get("/api/admin/view-all-blog").then((res) => {
       setBlogs(res.data)
       console.log(blogs);
      });
    })();
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <GroupSection></GroupSection>

      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '3rem', marginTop: '3rem' }}>

        <div className='blogH1'>
          <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Blogs</h1>
        </div>
        <div className='blogSection'>

        {blogs.map((items, index) => {
              return (

                <div className='blogCard '>
            <div className='imgSectionBlogCard'>
              <img src={items?.Image[0].url} alt="" />
            </div>
            <div className='contentSectionBlogCard'>
              <h2 style={{ margin: '0', fontWeight: 'normal' }}>{items.Name}</h2>
              <p style={{ textAlign: 'justify', color: 'white', margin: '0', marginBottom: '2rem' }}>
              {" "}
              {items.Description.slice(0, 200)}{" "}
              </p>
              <div style={{ textAlign: 'center' }}>
                <span className='readMoreC' onClick={() => navigate(`/blog/${items._id}`)} style={{ border: '1px solid white' }}>Read More</span>
              </div>

            </div>

          </div>
               
              );
            })}


          

          

        


        </div>


        {/* <div className='readMoreC'>Load More</div> */}

      </section>
      <EnquiryForm></EnquiryForm>

    </div>
  )
}

export default Blogs