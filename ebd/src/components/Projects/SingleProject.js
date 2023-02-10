import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import EnquiryForm from "../Home/EnquiryForm";
import Header from "../Home/Header";
import image from "../../assets/Asset 4@300.png";
import image2 from "../../assets/Asset 5@300.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import sliderImg from "../../assets/Asset 5@300.png";

function SingleProject() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [head, setHead] = useState([]);
  const [embedId, setembedId] = useState();
  const [slider, setSlider] = useState(false);
  const [viewImage, setViewImage] = useState();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `/api/admin/view-single-project/${params.id}`
        );

        setImage(data.Image);
        console.log(data.Image.length);
        if (data.Image.length > 1) {
          setSlider(true);
        }

        setData(data);
        setViewImage(data.Image[0].url);
        setembedId(data.Video);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const settingss = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      <Header></Header>

      <section
        className="singleProjectSection"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5%",
          flexDirection: "column",
        }}
      >
        <p style={{ marginBottom: "3rem" }}>{data?.Name}</p>
        <div style={{ width: "65%", display: "flex", alignItems: "center" }}>
          <div>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="35 70 150 70"
              style={{ width: "6rem" }}
            >
              <path
                class="cls-1 "
                style={{ fill: "black", stroke: "black" }}
                d="M173.42,92.77c0,6.49,0,13,0,19.45a20.49,20.49,0,1,1-22.9-20.61A20.19,20.19,0,0,1,165.74,96a3.28,3.28,0,0,1,1.16,1.76,2.28,2.28,0,0,1-.7,2.54,2.3,2.3,0,0,1-2.61.44,7.51,7.51,0,0,1-1.44-.86,15.19,15.19,0,1,0,5.6,15.39,17.5,17.5,0,0,0,.35-3.62c0-6.54,0-13.08,0-19.63s0-2.05,0-8.69A2.67,2.67,0,0,1,171,80.5a2.59,2.59,0,0,1,2.46,2.37c0,.34,0,.68,0,1v8.88Z"
              />
              <path
                class="cls-1 "
                style={{ fill: "black", stroke: "black" }}
                d="M87.08,92.86V83.23a2.45,2.45,0,0,1,2.5-2.73,2.57,2.57,0,0,1,2.67,2.73c0,4,0,2.37,0,6.36,0,4.58-.05,3.55-.05,8.13q0,7.2.05,14.4a15.15,15.15,0,1,0,5.92-12.19,11.07,11.07,0,0,1-1.24.82,2.48,2.48,0,0,1-3-.5,2.34,2.34,0,0,1-.36-2.93,5.34,5.34,0,0,1,1.22-1.38A20.43,20.43,0,1,1,87.31,116a12.3,12.3,0,0,1-.22-2.5c0-6.89,0-13.78,0-20.66Z"
              />
              <path
                class="cls-1 "
                style={{ fill: "black", stroke: "black" }}
                d="M44,119.79a12.09,12.09,0,0,1-1-3.23,21.28,21.28,0,0,1,1.88-14.35c3-5.59,7.7-8.83,13.78-10.26a19.64,19.64,0,0,1,11.58.63A19.92,19.92,0,0,1,81,102a3,3,0,0,1,.06,3.11,3,3,0,0,1-1.7,1.24l-7.59,2.9-22.18,8.42c-1.55.59-3.07,1.2-4.61,1.8-.28.11-.58.2-.91.31m30.7-17.38a5.92,5.92,0,0,0-.63-.82,24.49,24.49,0,0,0-2.73-2.38,14.56,14.56,0,0,0-10.16-2.29,14.78,14.78,0,0,0-13,12A10.38,10.38,0,0,0,48,112.6l26.73-10.19"
              />
              <path
                class="cls-1 "
                style={{ fill: "black", stroke: "black" }}
                d="M44.38,120.69l4.88-1.9a3.08,3.08,0,0,1,.32.39,14.14,14.14,0,0,0,6.18,6,15.23,15.23,0,0,0,12.48,1.09,13.93,13.93,0,0,0,7.16-5.6c.26-.38.5-.78.75-1.18a2.63,2.63,0,0,1,3.57-1,2.55,2.55,0,0,1,1,3.62,19.71,19.71,0,0,1-8.89,8.41,20.08,20.08,0,0,1-14,1.14,19.63,19.63,0,0,1-12.86-9.91c-.18-.33-.33-.67-.56-1.14"
              />
            </svg>
          </div>
          <div style={{ borderLeft: "1.5px solid black", paddingLeft: "5px" }}>
            {/* <span style={{ fontSize: "1.2rem", padding: "0" }}>BABIL</span>{" "} */}
            <br />
            <span style={{ fontSize: "1.8rem", padding: "0" }}>
              {data?.Name}
            </span>
          </div>
        </div>
        <div style={{ width: "65%", textAlign: "justify" }}>
          <p>{data.Description}</p>
        </div>
        {/* {image.map((items) => {
          return <img src={image[1]?.url} className="imageSection"></img>;
        })} */}
        {image[0] && (
          <img
            src={viewImage}
            className="imageSection"
            style={{ mixBlendMode: "multiply" }}
          ></img>
        )}
      </section>
      {slider && (
        <section
          className="singleProjectSlider"
          style={{
            aspectRatio: "1/0.2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-5%",
          }}
        >
          <div
            className="singleProjectSliderDiv"
            style={{
              background: "#0e8b8f",
              width: "65%",
              height: "100%",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              paddingBottom: "2%",
            }}
          >
            <div style={{ width: "90%" }}>
              <Slider {...settingss}>
                {image.map((items) => {
                  return (
                    <div>
                      <img
                        onClick={(e) => {
                          setViewImage(items.url);
                        }}
                        style={{ width: "90%", border: "10px white solid",cursor:"pointer" }}
                        src={items.url}
                        alt=""
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
      )}

      <section
        className="singleProjDetail"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "3rem",
          flexDirection: "column",
        }}
      >
        <div
          className="singleProjDetailHeading"
          style={{ display: "flex", alignItems: "start", width: "65%" }}
        >
          <p style={{ color: "#0E8B8F", textAlign: "start" }}>
            PROJECT DETAILS
          </p>
        </div>
        <div className="projectDetail">
          <div className="colmn1">
            {data?.Feature?.map((items) => {
              return (
                <div style={{ display: "flex", marginTop: "0.5rem" }}>
                  <div style={{ width: "45%" }}>
                    <span>{items.Name}</span>
                  </div>
                  <div style={{ width: "55%" }}>
                    <span className="dtl">{items.Value}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="colmn2">
            {data?.MoreFeature?.map((items, index) => {
              return (
                <div style={{ marginTop: "0.5rem" }}>
                  <span>{items.Name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "6%",
        }}
      >
        <div className="Image-360Section">
          <div style={{ height: "50%" }}></div>
          <div style={{ height: "50%", background: "rgb(234 234 234)" }}></div>
          <div className="video-responsive">
            <iframe
              width="50%"
              height="50%"
              src={`https://www.youtube.com/embed/${embedId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </section>

      <EnquiryForm></EnquiryForm>
      <Footer></Footer>
    </div>
  );
}

export default SingleProject;
