import React from 'react'

function EnquiryForm() {
  return (
    <div className='enquirySection'>
        <h3>How can we help you?</h3>
        <div className='enquiryInput' style={{position:'relative',display:'flex'}}>
        <input type="text" placeholder='Choose from our services'/>
        <svg className='dropInput'  xmlns="http://www.w3.org/2000/svg" style={{width:'1rem',position:'absolute',alignSelf:'center',right:'2px',background:'#0E8B8F'}} viewBox="0 0 25.91 12.32"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polyline class="cls-1" style={{fill:'none',stroke:'#fff',strokeWidth:'2',strokeMiterlimit:'10'}} points="0.33 0.38 13.15 11.64 25.57 0.38"/></g></g></svg>
        </div>
        
         <br />
        <span>Continue</span>
    </div>
  )
}

export default EnquiryForm