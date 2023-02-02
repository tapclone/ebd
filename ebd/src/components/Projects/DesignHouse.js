import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EnquiryForm from '../Home/EnquiryForm'
import image from '../../assets/Asset 3@300.png'
import video from '../../assets/videos/ebd pc.mp4'
import axios from 'axios'

function DesignHouse() {
    const navigate = useNavigate()
    const [designs, setDesigns] = useState([])
    useEffect(() => {
        (async function () {
            await axios.get("/api/admin/view-all-project").then((res) => {
                setDesigns(res.data);

                const design = res.data.filter(
                    (character) => character.Category === "EBD Design House"
                );
                setDesigns(design);


            });
        })();
    }, []);
    return (
        <div>
            <section className='projSec' style={{ marginTop: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className='constructionH1'>
                    <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Design House</h1>
                </div>
                <div className='constructionSection'>
                    <div className="imgSec">
                        <video src={video} autoPlay muted loop></video>
                    </div>
                    <div className="contentSec">
                        <p style={{ textAlign: 'justify' }}>We specialize in the creation and production of creative designs in home décor, and accessories. With the support of our extremely talented designers who develop and produce collections for various clients, focusing their requirements and updations in the field. We also offer design consulting services to help clients with product development and branding. One can visualize a dream home or palace before the construction begins, which helps to give a satisfaction in designing their living spaces.</p>

                    </div>
                </div>
            </section>

            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: '3rem', paddingTop: '3rem' }}>
                <div className='constructionH1'>
                    <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Design House</h1>
                </div>
                <p style={{ textAlign: 'justify' }}>That's where we stand out</p>

                <div className='projectsGrid projectSectionMain' style={{ display: 'grid', width: '100%', gridTemplateColumns: 'auto auto auto', placeItems: 'center', placeContent: 'center', columnGap: '5%', rowGap: '2rem', marginTop: "2rem" }}>
                    {designs?.map((items) => {

                        return (
                            <div className="cardMain1">
                                <div
                                    className="cardMain"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="card card1">
                                        <img src={items.Image[0]?.url} alt="" />
                                        <p
                                            style={{
                                                margin: "0",
                                                fontWeight: "lighter",
                                                color: "white",
                                                textAlign: "center",
                                                fontSize: "0.8rem",
                                                marginTop: "10px",
                                            }}
                                        >
                                            {items.Name}
                                        </p>
                                        <div
                                            style={{
                                                background: "white",
                                                width: "3rem",
                                                height: "1px",
                                                marginTop: "4px",
                                            }}
                                        ></div>
                                    </div>

                                    <div className="card card3">
                                        <p
                                            style={{
                                                maxWidth: "80%",
                                                textAlign: "justify",
                                                hyphens: "auto",
                                                marginTop: "30%",
                                                color: "white",
                                                fontWeight: "lighter",
                                                opacity: "0.8",
                                            }}
                                        >
                                            {" "}
                                            {items.Description.slice(0, 200)}{" "}
                                        </p>
                                        <span
                                            className="readMore"
                                            onClick={() => navigate(`/project/${items._id}`)}
                                            style={{ color: "white" }}
                                        >
                                            READ MORE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

                {/* <span className='readMoreC'>Read More</span> */}
            </section>
            <EnquiryForm></EnquiryForm>

        </div>
    )
}

export default DesignHouse