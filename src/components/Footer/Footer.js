import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerSection'>
        <div className="logoSection"></div>
        <div className="contactSection">
            <div style={{borderBottom:'1px solid black',paddingBottom:'15px'}}>
                <span style={{fontSize:'1.1rem',color:'#0E8B8F'}}>CALL US ON</span><br />
                <p style={{margin:'0',marginTop:'2px',fontWeight:'600'}}>+91 9539 714 670</p>
            </div>
            <div style={{borderBottom:'1px solid black',paddingTop:'10px',paddingBottom:'15px'}}>
                <span style={{fontSize:'1.1rem',color:'#0E8B8F'}}>Location</span><br />
                <p style={{margin:'0',marginTop:'2px'}}>Vattampoyil Gate, near Chemmangadu Police Station, <br />
                Thekepuram, Kuttichira, Kozhikode, Kerala 673 003
                </p>
            </div>
            <div style={{paddingTop:'10px'}}>
                <span style={{fontSize:'1.1rem',color:'#0E8B8F'}}>Business Hours</span><br />
                <p style={{margin:'0'}}>MON-SAT :9AM - 6PM</p>
            </div>

        </div>

    </div>
  )
}

export default Footer