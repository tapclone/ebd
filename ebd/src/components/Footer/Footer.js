import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import {useNavigate} from 'react-router-dom'

function Footer() {
    const navigate=useNavigate()
    return (
        <div className='footerSection'>
            <div className="logoSection" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <svg className='footerLogo' onClick={()=>navigate('/')}  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="40 30 216 130" style={{width:'12rem',cursor:'pointer'}}>
                        <defs>
                            {/* <style>.cls-1{fill:#0e8b8f;}

                            </style> */}
                        </defs>
                        <path style={{fill:'#0e8b8f'}} class="cls-1 " d="M173.42,92.77c0,6.49,0,13,0,19.45a20.49,20.49,0,1,1-22.9-20.61A20.19,20.19,0,0,1,165.74,96a3.28,3.28,0,0,1,1.16,1.76,2.28,2.28,0,0,1-.7,2.54,2.3,2.3,0,0,1-2.61.44,7.51,7.51,0,0,1-1.44-.86,15.19,15.19,0,1,0,5.6,15.39,17.5,17.5,0,0,0,.35-3.62c0-6.54,0-13.08,0-19.63s0-2.05,0-8.69A2.67,2.67,0,0,1,171,80.5a2.59,2.59,0,0,1,2.46,2.37c0,.34,0,.68,0,1v8.88Z" />
                        <path style={{fill:'#0e8b8f'}} class="cls-1 " d="M87.08,92.86V83.23a2.45,2.45,0,0,1,2.5-2.73,2.57,2.57,0,0,1,2.67,2.73c0,4,0,2.37,0,6.36,0,4.58-.05,3.55-.05,8.13q0,7.2.05,14.4a15.15,15.15,0,1,0,5.92-12.19,11.07,11.07,0,0,1-1.24.82,2.48,2.48,0,0,1-3-.5,2.34,2.34,0,0,1-.36-2.93,5.34,5.34,0,0,1,1.22-1.38A20.43,20.43,0,1,1,87.31,116a12.3,12.3,0,0,1-.22-2.5c0-6.89,0-13.78,0-20.66Z" />
                        <path style={{fill:'#0e8b8f'}} class="cls-1 " d="M44,119.79a12.09,12.09,0,0,1-1-3.23,21.28,21.28,0,0,1,1.88-14.35c3-5.59,7.7-8.83,13.78-10.26a19.64,19.64,0,0,1,11.58.63A19.92,19.92,0,0,1,81,102a3,3,0,0,1,.06,3.11,3,3,0,0,1-1.7,1.24l-7.59,2.9-22.18,8.42c-1.55.59-3.07,1.2-4.61,1.8-.28.11-.58.2-.91.31m30.7-17.38a5.92,5.92,0,0,0-.63-.82,24.49,24.49,0,0,0-2.73-2.38,14.56,14.56,0,0,0-10.16-2.29,14.78,14.78,0,0,0-13,12A10.38,10.38,0,0,0,48,112.6l26.73-10.19" />
                        <path style={{fill:'#0e8b8f'}} class="cls-1 " d="M44.38,120.69l4.88-1.9a3.08,3.08,0,0,1,.32.39,14.14,14.14,0,0,0,6.18,6,15.23,15.23,0,0,0,12.48,1.09,13.93,13.93,0,0,0,7.16-5.6c.26-.38.5-.78.75-1.18a2.63,2.63,0,0,1,3.57-1,2.55,2.55,0,0,1,1,3.62,19.71,19.71,0,0,1-8.89,8.41,20.08,20.08,0,0,1-14,1.14,19.63,19.63,0,0,1-12.86-9.91c-.18-.33-.33-.67-.56-1.14" />
                    </svg>
                    <p className='textBelow' style={{ textAlign: 'justify', maxWidth: '17rem', margin: '0' }}>Estate Builders & Developers</p>
                    <div className='footerSocialMedia' style={{ display: 'flex' }}>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="60 90 96 50">
                            <a href='https://www.facebook.com/estatebuilder/' target="_blank">
                            <path class="cls-1" d="M108,159.62h0a45.32,45.32,0,1,1,45.32-45.32A45.32,45.32,0,0,1,108,159.62Z" />
                            <path class="cls-2" d="M101.88,138.59h9.78V114.1h6.82l.73-8.21h-7.55v-4.67c0-1.93.39-2.69,2.26-2.69h5.29V90h-6.77c-7.28,0-10.56,3.21-10.56,9.35v6.53H96.79v8.31h5.09Z" />
                            </a></svg>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="57 86 104 50">
                            <a href='https://instagram.com/ebdgroups?igshid=YmMyMTA2M2Y=' target="_blank">
                            <path class="cls-1" d="M108,159.66h0a49.33,49.33,0,1,1,49.33-49.33A49.34,49.34,0,0,1,108,159.66Z" />
                            <path class="cls-2" d="M108,90.67c6.4,0,7.16,0,9.69.14a13,13,0,0,1,4.45.82,8,8,0,0,1,4.56,4.55,13.7,13.7,0,0,1,.82,4.46c.12,2.53.14,3.28.14,9.69s0,7.16-.14,9.69a13.56,13.56,0,0,1-.82,4.45,7.51,7.51,0,0,1-1.8,2.76,7.36,7.36,0,0,1-2.76,1.79,13.22,13.22,0,0,1-4.45.83c-2.53.11-3.29.14-9.69.14s-7.16,0-9.69-.14a13.22,13.22,0,0,1-4.45-.83,7.36,7.36,0,0,1-2.76-1.79,7.51,7.51,0,0,1-1.8-2.76,13.56,13.56,0,0,1-.82-4.45c-.12-2.53-.14-3.29-.14-9.69s0-7.16.14-9.69a13.7,13.7,0,0,1,.82-4.46,8,8,0,0,1,4.56-4.55,13,13,0,0,1,4.45-.82c2.53-.12,3.29-.14,9.69-.14m0-4.33c-6.51,0-7.33,0-9.89.15a17.81,17.81,0,0,0-5.82,1.11A12,12,0,0,0,88,90.37a11.78,11.78,0,0,0-2.76,4.25,17.47,17.47,0,0,0-1.12,5.82c-.11,2.56-.14,3.37-.14,9.89s0,7.33.14,9.88A17.54,17.54,0,0,0,85.28,126a12.26,12.26,0,0,0,7,7,17.78,17.78,0,0,0,5.82,1.12c2.56.11,3.38.14,9.89.14s7.33,0,9.89-.14a17.78,17.78,0,0,0,5.82-1.12,12.26,12.26,0,0,0,7-7,17.54,17.54,0,0,0,1.12-5.83c.11-2.55.14-3.37.14-9.88s0-7.33-.14-9.89a17.47,17.47,0,0,0-1.12-5.82A11.78,11.78,0,0,0,128,90.37a12,12,0,0,0-4.25-2.77,17.81,17.81,0,0,0-5.82-1.11c-2.56-.12-3.38-.15-9.89-.15" />
                            <path class="cls-2" d="M108,98a12.32,12.32,0,1,0,12.32,12.32A12.33,12.33,0,0,0,108,98m0,20.31a8,8,0,1,1,8-8,8,8,0,0,1-8,8" />
                            <path class="cls-2" d="M123.68,97.53a2.88,2.88,0,1,1-2.88-2.88,2.87,2.87,0,0,1,2.88,2.88" />
                            </a></svg>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="57 85 105 47">
                            <a href='https://wa.me/+91' target="_blank">
                            <path class="cls-1" d="M108,157.66h0a49.33,49.33,0,1,1,49.33-49.33A49.34,49.34,0,0,1,108,157.66Z" />
                            <path class="cls-2" d="M137.07,105.94A28.56,28.56,0,0,0,80,105.42c0,.41,0,.83,0,1.24a28.17,28.17,0,0,0,4.09,14.64l-5.15,15.2,15.82-5a28.61,28.61,0,0,0,42.36-24.82c0-.24,0-.48,0-.72m-28.54,24.55a23.91,23.91,0,0,1-13.21-4l-9.23,2.94,3-8.85a23.54,23.54,0,0,1-4.58-14,22.2,22.2,0,0,1,.13-2.31,24,24,0,0,1,47.82.45c0,.62.08,1.23.08,1.86a24,24,0,0,1-24,23.83" />
                            <path class="cls-2" d="M120.79,112.38c-.71-.34-4.14-2-4.78-2.26s-1.12-.34-1.58.35-1.82,2.26-2.22,2.72-.82.52-1.53.17a19,19,0,0,1-5.62-3.45,20.5,20.5,0,0,1-3.9-4.8c-.4-.69,0-1.07.31-1.42s.7-.81,1.06-1.21l.25-.34a7,7,0,0,0,.44-.83,1.25,1.25,0,0,0,0-1.21c-.17-.35-1.58-3.77-2.17-5.16s-1.16-1.15-1.57-1.15-.87-.07-1.34-.07a2.56,2.56,0,0,0-1.87.87,7.74,7.74,0,0,0-2.45,5.8,9.07,9.07,0,0,0,.36,2.37,15.82,15.82,0,0,0,2.5,4.81c.35.46,4.84,7.7,12,10.5s7.13,1.84,8.41,1.72,4.15-1.67,4.72-3.3a5.79,5.79,0,0,0,.42-3.3c-.17-.28-.64-.46-1.34-.81" />
                            </a></svg>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="60 -10 106 249">
                        </svg>
                    </div>
                </div>

            </div>
            <div className="contactSectionF">
                <div style={{ borderBottom: '1px solid black', paddingBottom: '15px' }}>
                    <span style={{ fontSize: '1.1rem', color: '#0E8B8F' }}> CALL US ON</span><br />
                     <a className='callUs' style={{ margin: '0', marginTop: '2px', fontWeight: '600',cursor:'pointer',}} href="tel:+919539714670">+91 9539 714 670</a>
                </div>
                <div style={{ borderBottom: '1px solid black', paddingTop: '10px', paddingBottom: '15px' }}>
                    <span style={{ fontSize: '1.1rem', color: '#0E8B8F' }}>Location</span><br />
                    <p style={{ margin: '0', marginTop: '2px',textAlign:'left' }}>Vattampoyil Gate, near Chemmangadu Police Station, <br />
                        Thekepuram, Kuttichira, Kozhikode, Kerala 673 003
                    </p>
                </div>
                <div className='businessHours' style={{ paddingTop: '10px' }}>
                    <span style={{ fontSize: '1.1rem', color: '#0E8B8F' }}>Business Hours</span><br />
                    <p style={{ margin: '0' }}>MON-SAT :9AM - 6PM</p>
                </div>

            </div>

        </div>
    )
}

export default Footer