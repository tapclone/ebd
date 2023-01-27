import React from 'react'
import Slider from 'react-slick'
import logo from '../../assets/btnLogo.svg'
import './GroupSection.css'
import group from '../../assets/videos/EBD intro.mp4'
import groupMobile from '../../assets/videos/EBD mobile gif.mp4'
function GroupSection() {
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

                <div className='groupSectionBtnMain'>
                    <div className='groupSectionBtn' style={{ display: 'flex' }}>
                        <img src={logo} alt="" />
                        <span>Constructions</span>
                    </div>
                </div>

                <div className='groupSectionBtnMain'>
                    <div className='groupSectionBtn' style={{ display: 'flex' }}>
                        <img src={logo} alt="" />
                        <span>DesignHouse</span>
                    </div>
                </div>

                <div className='groupSectionBtnMain'>
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