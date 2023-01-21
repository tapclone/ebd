import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import hamburger from '../../assets/hamburger.svg'
import './header.css'
import closeBtn from '../../assets/close.svg'

function Header() {
    const navigate = useNavigate()
    const [responsive, setResponsive] = useState(false)

    window.addEventListener('resize', () => {
        if (window.innerWidth > 850) {
            setResponsive(false)
        }
    })
    // var selector=document.querySelectorAll('.nav')
    // selector.forEach(element=>{
    //     element.addEventListener('click',()=>{
    //         console.log('hey');
    //         selector.forEach(elem=>elem.classList.remove('activeNavLink'))
    //         this.classList.add('activeNavLink')
    //     })
    // })
    window.addEventListener('scroll',()=>{

        setResponsive(false)
    })

    return (
        <div className='headerSection' >
            <div onClick={() => navigate('/')} className='logoSection'>
                <img className='logo' style={{ width: '10rem' }} src={logo} alt="" />
            </div>

            <div className='navSection' style={{ height: responsive ? '80vh' : '' }}>

                <div className="navLinks">
                    <span ><NavLink to='/'> HOME &nbsp;<span className='dot'>.</span></NavLink></span><div className='line'></div>
                    <span><NavLink to='/about' > ABOUT US &nbsp;<span className='dot'>.</span></NavLink></span><div className='line'></div>
                    <span className='dropdown'><NavLink className='dropNav'> OUR PROJECTS &nbsp;<span className='dot'>.</span></NavLink>
                        <ul className='dropdownList'>
                            <li><NavLink to='/constructions'>Ebd Constructions</NavLink></li>
                            <li><NavLink to='/designHouse'>Ebd Design House</NavLink></li>
                            <li><NavLink to='/builders'>Ebd Builders</NavLink></li>
                        </ul>

                    </span><div className='line lineI'></div>
                    <span ><NavLink to='/blogs'> BLOGS &nbsp;<span className='dot'>.</span></NavLink></span><div className='line'></div>
                    <span ><NavLink to='/contact'> CONTACT US &nbsp;<span className='dot'>.</span></NavLink></span><div className='line'></div>
                </div>
                <div className="socialMediaSection" >
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="60 90 96 50">
                        <path class="cls-1" d="M108,159.62h0a45.32,45.32,0,1,1,45.32-45.32A45.32,45.32,0,0,1,108,159.62Z" />
                        <path class="cls-2" d="M101.88,138.59h9.78V114.1h6.82l.73-8.21h-7.55v-4.67c0-1.93.39-2.69,2.26-2.69h5.29V90h-6.77c-7.28,0-10.56,3.21-10.56,9.35v6.53H96.79v8.31h5.09Z" />
                    </svg>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="57 86 104 50">
                        <path class="cls-1" d="M108,159.66h0a49.33,49.33,0,1,1,49.33-49.33A49.34,49.34,0,0,1,108,159.66Z" />
                        <path class="cls-2" d="M108,90.67c6.4,0,7.16,0,9.69.14a13,13,0,0,1,4.45.82,8,8,0,0,1,4.56,4.55,13.7,13.7,0,0,1,.82,4.46c.12,2.53.14,3.28.14,9.69s0,7.16-.14,9.69a13.56,13.56,0,0,1-.82,4.45,7.51,7.51,0,0,1-1.8,2.76,7.36,7.36,0,0,1-2.76,1.79,13.22,13.22,0,0,1-4.45.83c-2.53.11-3.29.14-9.69.14s-7.16,0-9.69-.14a13.22,13.22,0,0,1-4.45-.83,7.36,7.36,0,0,1-2.76-1.79,7.51,7.51,0,0,1-1.8-2.76,13.56,13.56,0,0,1-.82-4.45c-.12-2.53-.14-3.29-.14-9.69s0-7.16.14-9.69a13.7,13.7,0,0,1,.82-4.46,8,8,0,0,1,4.56-4.55,13,13,0,0,1,4.45-.82c2.53-.12,3.29-.14,9.69-.14m0-4.33c-6.51,0-7.33,0-9.89.15a17.81,17.81,0,0,0-5.82,1.11A12,12,0,0,0,88,90.37a11.78,11.78,0,0,0-2.76,4.25,17.47,17.47,0,0,0-1.12,5.82c-.11,2.56-.14,3.37-.14,9.89s0,7.33.14,9.88A17.54,17.54,0,0,0,85.28,126a12.26,12.26,0,0,0,7,7,17.78,17.78,0,0,0,5.82,1.12c2.56.11,3.38.14,9.89.14s7.33,0,9.89-.14a17.78,17.78,0,0,0,5.82-1.12,12.26,12.26,0,0,0,7-7,17.54,17.54,0,0,0,1.12-5.83c.11-2.55.14-3.37.14-9.88s0-7.33-.14-9.89a17.47,17.47,0,0,0-1.12-5.82A11.78,11.78,0,0,0,128,90.37a12,12,0,0,0-4.25-2.77,17.81,17.81,0,0,0-5.82-1.11c-2.56-.12-3.38-.15-9.89-.15" />
                        <path class="cls-2" d="M108,98a12.32,12.32,0,1,0,12.32,12.32A12.33,12.33,0,0,0,108,98m0,20.31a8,8,0,1,1,8-8,8,8,0,0,1-8,8" />
                        <path class="cls-2" d="M123.68,97.53a2.88,2.88,0,1,1-2.88-2.88,2.87,2.87,0,0,1,2.88,2.88" />
                    </svg>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="57 85 105 47">
                        <path class="cls-1" d="M108,157.66h0a49.33,49.33,0,1,1,49.33-49.33A49.34,49.34,0,0,1,108,157.66Z" />
                        <path class="cls-2" d="M137.07,105.94A28.56,28.56,0,0,0,80,105.42c0,.41,0,.83,0,1.24a28.17,28.17,0,0,0,4.09,14.64l-5.15,15.2,15.82-5a28.61,28.61,0,0,0,42.36-24.82c0-.24,0-.48,0-.72m-28.54,24.55a23.91,23.91,0,0,1-13.21-4l-9.23,2.94,3-8.85a23.54,23.54,0,0,1-4.58-14,22.2,22.2,0,0,1,.13-2.31,24,24,0,0,1,47.82.45c0,.62.08,1.23.08,1.86a24,24,0,0,1-24,23.83" />
                        <path class="cls-2" d="M120.79,112.38c-.71-.34-4.14-2-4.78-2.26s-1.12-.34-1.58.35-1.82,2.26-2.22,2.72-.82.52-1.53.17a19,19,0,0,1-5.62-3.45,20.5,20.5,0,0,1-3.9-4.8c-.4-.69,0-1.07.31-1.42s.7-.81,1.06-1.21l.25-.34a7,7,0,0,0,.44-.83,1.25,1.25,0,0,0,0-1.21c-.17-.35-1.58-3.77-2.17-5.16s-1.16-1.15-1.57-1.15-.87-.07-1.34-.07a2.56,2.56,0,0,0-1.87.87,7.74,7.74,0,0,0-2.45,5.8,9.07,9.07,0,0,0,.36,2.37,15.82,15.82,0,0,0,2.5,4.81c.35.46,4.84,7.7,12,10.5s7.13,1.84,8.41,1.72,4.15-1.67,4.72-3.3a5.79,5.79,0,0,0,.42-3.3c-.17-.28-.64-.46-1.34-.81" />
                    </svg>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="60 -10 106 249">
                        <path class="cls-1" d="M110.25,164h0a47.29,47.29,0,1,1,47.29-47.28A47.28,47.28,0,0,1,110.25,164Z" />
                        <path class="cls-2" d="M104,131.68a8,8,0,0,0,3.32-1.47,8.1,8.1,0,0,0,2.08-2.31,8.59,8.59,0,0,0,1.3-4.68,7.77,7.77,0,0,0-1.14-4.3,6.51,6.51,0,0,0-3.39-2.59,7.1,7.1,0,0,0,2.24-1.67,6.53,6.53,0,0,0,1.36-4.33,7.46,7.46,0,0,0-1.35-4.48q-2.23-3-7.61-3.12H86.61v29.35H99.84a20,20,0,0,0,4.15-.4M92.47,107.82h6.39a11.25,11.25,0,0,1,3.47.46A2.63,2.63,0,0,1,103.9,111a2.78,2.78,0,0,1-1.19,2.58,5.84,5.84,0,0,1-3.11.73H92.47Zm0,19.16v-7.82h7.22a7.55,7.55,0,0,1,2.94.49,3.17,3.17,0,0,1,1.87,3.15,3.7,3.7,0,0,1-1.93,3.67,7,7,0,0,1-3,.51Z" />
                        <path class="cls-2" d="M115.67,130.15a11.8,11.8,0,0,0,7.64,2.67c3.5,0,6.23-1,8.17-3.17a7.14,7.14,0,0,0,2.11-3.92h-5.8a4.43,4.43,0,0,1-4.32,2.49,5.73,5.73,0,0,1-3.13-.82c-1.43-.87-2.18-2.4-2.27-4.58h15.81a26.63,26.63,0,0,0-.19-4.31A10.63,10.63,0,0,0,132,114a8.78,8.78,0,0,0-3.75-3.21,12.45,12.45,0,0,0-5.1-1,10.48,10.48,0,0,0-7.77,3q-3,3-3,8.65,0,6,3.32,8.69m4-14.43a4.49,4.49,0,0,1,3.39-1.24,5,5,0,0,1,3.37,1.17,4.77,4.77,0,0,1,1.51,3.43h-9.78a5.89,5.89,0,0,1,1.51-3.36" />
                        <rect class="cls-2" x="116.36" y="104.41" width="12.76" height="2.96" />
                    </svg>
                </div>
                {/* <div style={{background:'black',height:'1px',width:'14rem',position:'absolute',top:'53px',right:'75px'}}></div> */}


            </div>
            <img className='hamburger' onClick={() => setResponsive(!responsive)} src={responsive ? closeBtn : hamburger} alt="" />
        </div>
    )
}

export default Header