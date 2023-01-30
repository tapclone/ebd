import React from 'react'
import {useNavigate} from 'react-router-dom'
import Slider from 'react-slick'
import logo from '../../assets/btnLogo.svg'
import './GroupSection.css'
import group from '../../assets/videos/EBD intro.mp4'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
function GroupSection() {
    const navigate=useNavigate()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        nextArrow: false,
        prevArrow: false,
        centerMode:true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    infinite: true
                }
            }
        ]


    };
    return (
        <section className='groupSection' >
            <video className='groupDesc' autoPlay muted loop src={group}></video>
            <video className='groupMobile' src={groupMobile} autoPlay muted loop></video>

            <Slider {...settings}>

                <div onClick={()=>navigate('/constructions')} className='groupSectionBtnMain'>
                    <div className='groupSectionBtn' style={{ display: 'flex' }}>
                        <img src={logo} alt="" />
                        <span>Constructions</span>
                    </div>
                </div>

                <div onClick={()=>navigate('/designHouse')} className='groupSectionBtnMain'>
                    <div className='groupSectionBtn' style={{ display: 'flex' }}>
                        <img src={logo} alt="" />
                        <span>DesignHouse</span>
                    </div>
                </div>

                <div onClick={()=>navigate('/builders')} className='groupSectionBtnMain'>
                    <div className='groupSectionBtn' style={{ display: 'flex' }}>
                        <img src={logo} alt="" />
                        <span>Builders</span>
                    </div>
                </div>



            </Slider>
        </section>
    )
}

export default GroupSection