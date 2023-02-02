import React, { useEffect, useState } from 'react'
import video from '../../assets/videos/ebd pencil.mp4'
import { useNavigate } from 'react-router-dom'
import image from '../../assets/Asset 3@300.png'
import EnquiryForm from '../Home/EnquiryForm'
import axios from 'axios'

function Constructions() {
    const navigate = useNavigate()
    const [constructions,setConstructions]=useState([])
    useEffect(() => {
        (async function () {
          await axios.get("/api/admin/view-all-project").then((res) => {
            setConstructions(res.data);
    
            const construction = res.data.filter(
              (character) => character.Category === "EBD Constructions"
            );
            setConstructions(construction);
            
            
          });
        })();
      }, []);
    return (
        <div>
            <section className='projSec' style={{ marginTop: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className='constructionH1'>
                    <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Constructions</h1>
                </div>
                <div className='constructionSection'>
                    <div className="imgSec">
                        <video src={video} autoPlay muted loop ></video>
                    </div>
                    <div className="contentSec">
                        <p style={{ textAlign: 'justify' }}>Using high-standard materials, techniques, and processes ensuring that the project meets or exceeds the expectations and requirements of the client, stakeholders, and relevant building codes and standards. It involves effective planning, execution, and monitoring of all aspects of the project, from design to completion, to ensure that the end result is safe, functional, and aesthetically pleasing. Achieving quality work in construction is by the collaboration of a skilled and experienced team of professionals, including architects, engineers, contractors, and craftsmen.

                            
                        </p>

                    </div>
                </div>
            </section>

            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: '3rem', paddingTop: '3rem' }}>
                <div className='constructionH1'>
                    <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Constructions</h1>
                </div>
                <p style={{ textAlign: "center" }}>That's where we stand out</p>

                <div className='projectsGrid projectSectionMain' style={{ display: 'grid', width: '100%', gridTemplateColumns: 'auto auto auto', placeItems: 'center', placeContent: 'center', columnGap: '5%', rowGap: '2rem', marginTop: "2rem" }}>
                    {constructions?.map((items) => {

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

export default Constructions