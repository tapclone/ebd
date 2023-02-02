import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Home/Header";
import group from "../../assets/videos/EBD intro.mp4";
import groupMobile from "../../assets/videos/EBD mobile gif.mp4";
import "./Projects.css";
import image from "../../assets/Asset 3@300.png";
import EnquiryForm from "../Home/EnquiryForm";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import arrowBtnLeft from "../../assets/arrow1.svg";
import arrowBtnRight from "../../assets/arrow2.svg";
import GroupSection from "../Home/GroupSection";
import axios from "axios";
function Projects() {
  const navigate = useNavigate();
  const [Design, setDesign] = useState([]);
  const [Constructions, setConstructions] = useState([]);
  const [Builders, setBuilders] = useState([]);

  useEffect(() => {
    (async function () {
      await axios.get("/api/admin/view-all-project").then((res) => {
        setDesign(res.data);

        const builder = res.data.filter(
          (character) => character.Category === "EBD Builders"
        );
        setBuilders(builder);
        const design = res.data.filter(
          (character) => character.Category === "EBD Design House"
        );
        setDesign(design);
        const construction = res.data.filter(
          (character) => character.Category === "EBD Constructions"
        );
        setConstructions(construction);
      });
    })();
  }, []);

  function CustomArrowR(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img className="slideBtn" src={arrowBtnRight} alt="" />
      </div>
    );
  }
  function CustomArrowL(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img className="slideBtn" src={arrowBtnLeft} alt="" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrowR></CustomArrowR>,
    prevArrow: <CustomArrowL></CustomArrowL>,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <CustomArrowR></CustomArrowR>,
          prevArrow: <CustomArrowL></CustomArrowL>,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          dots: true,
        },
      },
    ],
  };

  const arr = [1, 2, 3, 4];
  return (
    <div
      style={{ width: "100%", overflowX: "hidden" }}
      className="projectSectionMain"
    >
      <Header></Header>
      <GroupSection></GroupSection>

      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "7rem",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontWeight: "lighter",
            color: "#0E8B8F",
            textAlign: "center",
          }}
        >
          Our Projects
        </h1>
        <div
          style={{
            background: "#0E8B8F",
            width: "3rem",
            height: "1px",
            marginTop: "5px",
          }}
        ></div>
        <p
          className="ourProjectsP"
          style={{ textAlign: "justify", width: "60%", minWidth: "36rem" }}
        >
          Estate Builders & Developers was launched at the onset of the second
          millennium, as a contract construction company. With deep dedication &
          hard work of the team, it fixed firmly and settled well versed in the
          field. Quality, punctuality and the perfection in all the works lead
          to many major dignified projects, which in turn lead EBD to be
          upgraded as an architectural and developmental firm in the year 2019.
          It also came up with an extremely glorious project called EALA STAYS
          in the year 2020. It was a grand and major milestone in the history of
          EBD.
        </p>
      </section>

      <section
        style={{
          width: "100%",
          marginTop: "5rem",
          marginBottom: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontWeight: "lighter",
            color: "#0E8B8F",
            textAlign: "center",
          }}
        >
          EBD Design House
        </h1>
        <div
          style={{
            background: "#0E8B8F",
            width: "3rem",
            height: "1px",
            marginTop: "5px",
            marginBottom: "2rem",
          }}
        ></div>


        <div className="sliderContainer">
          <Slider {...settings}>
            {Design?.map((items) => {

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
          </Slider>
        </div>

      </section>

      <section
        style={{
          width: "100%",
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "4rem",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontWeight: "lighter",
            color: "#0E8B8F",
            textAlign: "center",
          }}
        >
          EBD Constructions
        </h1>
        <div
          style={{
            background: "#0E8B8F",
            width: "3rem",
            height: "1px",
            marginTop: "5px",
            marginBottom: "2rem",
          }}
        ></div>

        <div className="sliderContainer">
          <Slider {...settings}>
            {Constructions?.map((items) => {
              console.log(items, "dkvkjd");
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
          </Slider>
        </div>

      </section>

      <section
        style={{
          width: "100%",
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "4rem",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontWeight: "lighter",
            color: "#0E8B8F",
            textAlign: "center",
          }}
        >
          EBD Developers
        </h1>
        <div
          style={{
            background: "#0E8B8F",
            width: "3rem",
            height: "1px",
            marginTop: "5px",
            marginBottom: "2rem",
          }}
        ></div>
        <div className="sliderContainer">
        <Slider {...settings}>
          {Builders?.map((items) => {
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
        </Slider>
        </div>
      </section>

      <EnquiryForm></EnquiryForm>

      <Footer></Footer>
    </div>
  );
}

export default Projects;
