import React from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from '../Home/EnquiryForm'
import Header from '../Home/Header'
import image2 from '../../assets/Asset 4@300.png'

function BlogSingle() {
    return (
        <div>
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',marginTop:"5rem" }}>
                <p style={{ textAlign: 'center' }}>Blog Blogname</p>
                <div className='blogSectionS'>
                    <h2 style={{ color: '#0E8B8F', fontWeight: 'normal' }}>Calicut's best Architecture firm?</h2>
                    <p style={{margin:'0',textAlign:'justify'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p style={{textAlign:'justify'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <div>
                        <img style={{width:'100%'}} src={image2} alt="" />
                    </div>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div>
                        <img style={{width:'100%'}} src={image2} alt="" />
                    </div>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p style={{textAlign:'justify'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <EnquiryForm></EnquiryForm>
        </div>
    )
}

export default BlogSingle