import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from '../Home/EnquiryForm'
import Header from '../Home/Header'
import image2 from '../../assets/Asset 4@300.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function BlogSingle() {
    const params = useParams();
    const [blog,setBlog]=useState([])
    const [images,setImages]=useState([])
    const [loaded,setLoaded]=useState(false)

    useEffect(() => {
        (async function () {
          try {
            const  data  = await axios.get(
              `/api/admin/view-single-blog/${params.id}`
            );
            setBlog(data.data)
            setImages(data.data.Image)
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);
      useEffect(()=>{
        setLoaded(true)
        console.log(images[1]?.url);
      },[images])
    return (
        <div>
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',marginTop:"5rem" }}>
                <p style={{ textAlign: 'center' }}>Blog > <span style={{color:'#0E8B8F'}}>{blog?.Name}</span></p>
                <div className='blogSectionS'>
                    <h2 style={{ color: '#0E8B8F', fontWeight: 'normal' }}>{blog?.Name}</h2>
                    <p style={{margin:'0',textAlign:'justify'}}>{blog?.Description}</p>
                    {/* <p style={{textAlign:'justify'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> */}
                    <div>
                       {loaded ? <img style={{width:'100%',marginTop:'2rem',marginBottom:'2rem'}} src={images[1]?.url} alt="" />:''} 
                    </div>
                    {/* <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div>
                        <img style={{width:'100%'}} src={image2} alt="" />
                    </div>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                </div>
            </section>
            <EnquiryForm></EnquiryForm>
        </div>
    )
}

export default BlogSingle