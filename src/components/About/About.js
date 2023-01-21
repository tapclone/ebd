import React from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from '../Home/EnquiryForm'
import Header from '../Home/Header'
import avatar from '../../assets/Asset 1@300.png'
import './About.css'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
import group from '../../assets/videos/EBD intro.mp4'

function About() {
  return (
    <div>
      <Header></Header>

      <section className='groupSection' >
        <video className='groupDesc' autoPlay muted loop src={group}></video>
        <video className='groupMobile' src={groupMobile} autoPlay muted loop></video>

      </section>
     
      <section style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'4rem'}}>
        <div style={{width:'60%'}}>
        <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>About EBD Group</h1> <br />
        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>
        <p style={{textAlign:'justify'}}> Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.</p>
        </div>
     

        
      </section >

      <section style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5rem'}}>
        <div style={{width:'60%'}}>
          <div style={{marginLeft:'1rem'}}>
          <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>Founders & Patrons</h1> <br />
          <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>
          </div>
      
      <div style={{display:'flex',width:'100%',marginTop:'3rem'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center',width:'30%'}}>
          <img className='avatar' style={{width:'10rem',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>
        <div style={{alignSelf:'end',width:'70%'}}>
          <p style={{textAlign:'justify'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

      </div>
      </div>

      </section>

      <section style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{width:'60%'}}>
      
      <div style={{display:'flex',width:'100%',marginTop:'3rem'}}>
        <div style={{alignSelf:'end',width:'70%'}}>
          <p style={{textAlign:'justify'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'end',justifyContent:'center',textAlign:'center',width:'30%'}}>
          <img className='avatar'  style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>

      </div>
      </div>

      </section>


      <section style={{background:'#F3F9F9',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'5rem',padding:'3rem 0'}}>
        <div style={{width:'60%'}}>
        <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>The Core of EBD group</h1> <br />
        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

        <div style={{display:'grid',gridTemplateColumns:'auto auto auto',columnGap:'6rem',marginTop:'2rem'}}>

        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar'  style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>

        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar'   style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>


        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar'   style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>

        </div>
        </div>
      


      </section>

      <section style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'5rem',padding:'3rem 0',marginBottom:'10rem'}}>
        <div style={{width:'60%'}}>
        <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>The Team</h1> <br />
        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>

        <div style={{display:'grid',gridTemplateColumns:'auto auto auto',columnGap:'6rem',rowGap:'2rem',marginTop:'2rem'}}>

        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar'  style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>

        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar' style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>


        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar' style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>

        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar' style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>

        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar' style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>

        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',textAlign:'center'}}>
          <img className='avatar' style={{width:'10rem',border:'1px solid #0E8B8F',borderRadius:'90px'}} src={avatar} alt="" />
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'0',color:'#0E8B8F'}}>MUHAMMAD SHIBILI</p>
            <p style={{marginTop:'0'}}>Managing Director</p>
          </div>
          
        </div>

        </div>
        </div>
      


      </section>
      <EnquiryForm></EnquiryForm>
      <Footer></Footer>

    </div>
  )
}

export default About