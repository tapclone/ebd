import React from 'react'
import './Contact.css'
import group from '../../assets/videos/EBD intro.mp4'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
import logo from '../../assets/logo.svg'
import EnquiryForm from '../Home/EnquiryForm'

function Contact() {
  return (
    <div>
      <section className='groupSection' >
        <video className='groupDesc' autoPlay muted loop src={group}></video>
        <video className='groupMobile' src={groupMobile} autoPlay muted loop></video>
      </section>

      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '3rem' }}>
        <div className='contactSection'>
          <div className='logoSectionContact'>
            <svg style={{ width: '75%',minWidth:'10rem' }} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 50 216 130" >

              <path class="cls-1 " style={{ fill: '#0E8B8F' }} d="M173.42,92.77c0,6.49,0,13,0,19.45a20.49,20.49,0,1,1-22.9-20.61A20.19,20.19,0,0,1,165.74,96a3.28,3.28,0,0,1,1.16,1.76,2.28,2.28,0,0,1-.7,2.54,2.3,2.3,0,0,1-2.61.44,7.51,7.51,0,0,1-1.44-.86,15.19,15.19,0,1,0,5.6,15.39,17.5,17.5,0,0,0,.35-3.62c0-6.54,0-13.08,0-19.63s0-2.05,0-8.69A2.67,2.67,0,0,1,171,80.5a2.59,2.59,0,0,1,2.46,2.37c0,.34,0,.68,0,1v8.88Z" />
              <path class="cls-1 " style={{ fill: '#0E8B8F' }} d="M87.08,92.86V83.23a2.45,2.45,0,0,1,2.5-2.73,2.57,2.57,0,0,1,2.67,2.73c0,4,0,2.37,0,6.36,0,4.58-.05,3.55-.05,8.13q0,7.2.05,14.4a15.15,15.15,0,1,0,5.92-12.19,11.07,11.07,0,0,1-1.24.82,2.48,2.48,0,0,1-3-.5,2.34,2.34,0,0,1-.36-2.93,5.34,5.34,0,0,1,1.22-1.38A20.43,20.43,0,1,1,87.31,116a12.3,12.3,0,0,1-.22-2.5c0-6.89,0-13.78,0-20.66Z" />
              <path class="cls-1 " style={{ fill: '#0E8B8F' }} d="M44,119.79a12.09,12.09,0,0,1-1-3.23,21.28,21.28,0,0,1,1.88-14.35c3-5.59,7.7-8.83,13.78-10.26a19.64,19.64,0,0,1,11.58.63A19.92,19.92,0,0,1,81,102a3,3,0,0,1,.06,3.11,3,3,0,0,1-1.7,1.24l-7.59,2.9-22.18,8.42c-1.55.59-3.07,1.2-4.61,1.8-.28.11-.58.2-.91.31m30.7-17.38a5.92,5.92,0,0,0-.63-.82,24.49,24.49,0,0,0-2.73-2.38,14.56,14.56,0,0,0-10.16-2.29,14.78,14.78,0,0,0-13,12A10.38,10.38,0,0,0,48,112.6l26.73-10.19" />
              <path class="cls-1 " style={{ fill: '#0E8B8F' }} d="M44.38,120.69l4.88-1.9a3.08,3.08,0,0,1,.32.39,14.14,14.14,0,0,0,6.18,6,15.23,15.23,0,0,0,12.48,1.09,13.93,13.93,0,0,0,7.16-5.6c.26-.38.5-.78.75-1.18a2.63,2.63,0,0,1,3.57-1,2.55,2.55,0,0,1,1,3.62,19.71,19.71,0,0,1-8.89,8.41,20.08,20.08,0,0,1-14,1.14,19.63,19.63,0,0,1-12.86-9.91c-.18-.33-.33-.67-.56-1.14" />
            </svg>
          </div>
          <div className='ContactDetails'>
            <div style={{ paddingBottom: '15px' }}>
              <span style={{ fontSize: '1.1rem', color: '#0E8B8F' }}> CALL US ON</span><br />
              <a className='callUs' style={{ margin: '0', marginTop: '2px', fontWeight: '600', cursor: 'pointer', }} href="tel:+919539714670">+91 9539 714 670</a>
            </div>
            <div style={{ paddingTop: '10px', paddingBottom: '15px' }}>
              <span style={{ fontSize: '1.1rem', color: '#0E8B8F' }}>Location</span><br />
              <p style={{ margin: '0', marginTop: '2px' }}>Vattampoyil Gate, near Chemmangadu Police Station, <br />
                Thekepuram, Kuttichira, Kozhikode, Kerala 673 003
              </p>
            </div>
            <div className='businessHours' style={{ paddingTop: '10px' }}>
              <span style={{ fontSize: '1.1rem', color: '#0E8B8F' }}>Business Hours</span><br />
              <p style={{ margin: '0' }}>MON-SAT :9AM - 6PM</p>
            </div>

          </div>
        </div>

      </section>

     <section  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='mapSection'>
          <p style={{ margin: '0', fontSize: '1.1rem', marginBottom: '2rem',color:'#0E8B8F'}}>Visit Us At</p>
          <div className='mapIframe'><iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1003903.1736447873!2d75.52023080086687!3d10.618461876892004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d10.007061!2d76.3058215!4m5!1s0x3ba65932f13952c3%3A0x532ed70879d4f851!2sEstate%20Builders%20and%20Developers%2C%20Vattampoyil%20Gate%2C%20near%20Chemmangadu%20Police%20Station%2C%20Kozhikode%2C%20Kerala%20673003!3m2!1d11.238916699999999!2d75.786019!5e0!3m2!1sen!2sin!4v1674297447398!5m2!1sen!2sin"  style={{border:'0',width:'100%',aspectRatio:'1/0.5'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>



      </section >


  <section style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem 0'}}>

        <div className='newsLetterSection' style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
          <h1 style={{textAlign:'center',color:'#0E8B8F',margin:'0',marginBottom:'5px'}}>Request A Call Back</h1>
          <p className='newsLetterSectionP' style={{textAlign:'center',margin:'0',marginBottom:'4rem'}}>By clicking Request a call back, you agree our terms and conditions and our privacy policy.</p>
          <div className='newsLetter'>
            <div className='newsLetter1'>
              <h2 style={{color:'white',margin:'0'}}>Join Our Monthly Newsletter</h2>
              <p style={{textAlign:'justify',color:'white',margin:'0'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. </p>
              <div className='contactInputDiv'>
                <input type="text" placeholder='Your Email' />
                <span>Subscribe</span>
              </div>
             
            </div>
            <div className='newsLetter2'>
              <div >
                <h2 style={{margin:'0'}}>Talk To Us</h2>
                <p style={{margin:'0'}}>Request A call back</p>
                <input placeholder='Your Name*' type="text" />
                <input placeholder='Your Phone Number*' type="text" />
                <input placeholder='Your Email Address*' type="text" />
                <span>Join Us</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='respEnquiryForm' style={{display:'none'}}>
      <div className='enquirySection'>
        <h3>How can we help you?</h3>
        <div className='enquiryInput' style={{position:'relative',display:'flex'}}>
        <input type="text" placeholder='Enter your email'/>
        <svg className='dropInput'  xmlns="http://www.w3.org/2000/svg" style={{width:'1rem',position:'absolute',alignSelf:'center',right:'2px',background:'#0E8B8F'}} viewBox="0 0 25.91 12.32"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polyline class="cls-1" style={{fill:'none',stroke:'#fff',strokeWidth:'2',strokeMiterlimit:'10'}} points="0.33 0.38 13.15 11.64 25.57 0.38"/></g></g></svg>
        </div>
        
         <br />
        <span style={{padding:'5px 1rem',fontSize:'1rem',borderRadius:'10px',border:'1'}}>Connect with us !</span>
    </div>
      </section>
    </div>
  )
}

export default Contact