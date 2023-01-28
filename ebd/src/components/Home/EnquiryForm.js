import React from 'react'

function EnquiryForm() {
  return (
    <div className='enquirySection'>
        <h3>How can we help you?</h3>
        <div className='enquiryInput' style={{position:'relative',display:'flex'}}>
        <input type="text" placeholder='Enter your email'/>
        </div>
        
         <br />
        <span>Subscribe</span>
    </div>
  )
}

export default EnquiryForm