import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EnquiryForm from '../Home/EnquiryForm'
import video from '../../assets/videos/ebd survey cam.mp4'
import image from '../../assets/Asset 3@300.png'
import axios from 'axios'

function Builders() {
    const navigate = useNavigate()
    const [builders,setBuilders]=useState([])
    useEffect(() => {
        (async function () {
          await axios.get("/api/admin/view-all-project").then((res) => {
            setBuilders(res.data);
    
            const builder = res.data.filter(
              (character) => character.Category === "EBD Builders"
            );
            setBuilders(builder);
            
            
          });
        })();
      }, []);

    return (
        <div>
            <section className='projSec' style={{ marginTop: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className='constructionH1'>
                    <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Developers</h1>
                </div>
                <div className='constructionSection'>
                    <div className="imgSec">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                    <div className="contentSec">
                        <p style={{ textAlign: 'justify' }}>We are professionals responsible for constructing buildings and other structures. We oversee all aspects of a construction project, from planning and design to construction and completion. We typically work with a team of architects, engineers, subcontractors, and labourers to ensure that the project is completed on time, within budget, and to the required standards. <br/> <br/>
                        We have a thorough understanding of building codes, safety regulations, and construction techniques, as well as strong leadership and management skills to coordinate the work of the various parties involved in a construction project. We work on residential, commercial, or industrial projects, and the size of the projects can range from small renovations to large-scale developments.

                           
                        </p>

                    </div>
                </div>
            </section>

            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: '3rem', paddingTop: '3rem' }}>
                <div className='constructionH1'>
                    <h1 style={{ margin: '0', fontWeight: '500', color: '#0E8B8F', textAlign: 'center', fontSize: '1.2rem' }}>EBD Builders</h1>
                </div>
                <p style={{textAlign:'center'}}>That's where we stand out</p>

                <div className='projectsGrid projectSectionMain' style={{ display: 'grid', width: '100%', gridTemplateColumns: 'auto auto auto', placeItems: 'center', placeContent: 'center', columnGap: '5%', rowGap: '2rem', marginTop: "2rem" }}>
                {builders?.map((items) => {
        
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

export default Builders