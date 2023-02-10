import axios from "axios";
import React, { useState } from "react";
import "./Addproject.css";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const [featureName, setFeatureName] = useState();
  const [featureValue, setFeatureValue] = useState();
  const [moreFeatureName, setMoreFeatureName] = useState();
  const [projectName, setProjectName] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState([]);
  const [feature, setFeature] = useState([]);
  const [moreFeature, setMoreFeature] = useState([]);
  const [error, setError] = useState();
  const [video, setVideo] = useState();
  const [category, setCategory] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const [cardImages, setCardImage] = useState([]);
  const [cardImagesLoading, setCartImagesLoading] = useState(false);
  const Navigate = useNavigate();

  const AddFeature = () => {
    console.log();
    if (featureName && featureValue) {
      const obj = {
        Name: featureName,
        Value: featureValue,
      };
      setFeature((pre) => [...pre, obj]);
      setFeatureName("");
      setFeatureValue("");
    } else {
      setError("Please Update Field");
    }
  };

  const MoreFeatures = () => {
    if (moreFeatureName) {
      const obj = {
        Name: moreFeatureName,
      };
      setMoreFeature((pre) => [...pre, obj]);
      setMoreFeatureName("");
    } else {
      setError("Please Update Field");
    }
  };
  const FileUploader = async (e) => {
    setImageLoading(true);
    console.log(e);
    console.log(e.target.files.length);
    const length = e.target.files.length;
    let formData = new FormData();
    for (let i = 0; i < length; i++) {
      const file = e.target.files[i];
      //   const fileName = e.target.files[i].name;

      formData.append("file", file);
    }
    //   formData.append("file", fileName);
    try {
      const { data } = await axios.post("/api/admin/image-uploading", formData);
      if (data[0]) {
        setImageLoading(false);
        setImages(data);
      } else {
        setImageLoading(false);
        images.push(data);
      }
    } catch (error) {
      setImageLoading(false);
      console.log(error);
    }
  };

  const AddProject = async () => {
    const obj = {
      Name: projectName,
      Description: description,
      Feature: feature,
      MoreFeature: moreFeature,
      Image: images,
      cardImage: cardImages,
      Video: video,
      Category: category,
    };

    if (
      projectName &&
      description &&
      feature &&
      moreFeature &&
      images[0] &&
      category &&
      video
    ) {
      try {
        const { data } = await axios.post("/api/admin/add-project", obj);
        Navigate("/view-all-projects");
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("Please Updated Field");
    }
  };
  const CardImages = async (e) => {
    setCartImagesLoading(true);
    console.log(e.target.files.length);
    const length = e.target.files.length;
    let formData = new FormData();
    for (let i = 0; i < length; i++) {
      const file = e.target.files[i];
      //   const fileName = e.target.files[i].name;

      formData.append("file", file);
    }
    //   formData.append("file", fileName);
    try {
      const { data } = await axios.post("/api/admin/image-uploading", formData);
      if (data[0]) {
        setCartImagesLoading(false);
        setCardImage(data);
      } else {
        setCartImagesLoading(false);
        cardImages.push(data);
      }
    } catch (error) {
      setCartImagesLoading(false);
      console.log(error);
    }
  };
  return (
    <div class="container ms-5" style={{ marginTop: "5rem" }}>
      <form>
        <div class="row" style={{ marginLeft: "2rem" }}>
          <h4>Project Name</h4>
          <div class="input-group input-group-icon">
            <input
              type="text"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              placeholder="Name"
            />
            <div class="input-icon">
              <i class="fa fa-user"></i>
            </div>
          </div>
          <div class="input-group ">
            <select
              id="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              name="Category"
            >
              <option>Select Category</option>
              <option value="EBD Design House">EBD Design House</option>
              <option value="EBD Constructions">EBD Constructions</option>
              <option value="EBD Builders">EBD Builders</option>
            </select>
          </div>
          <div class="input-group ">
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="message"
              rows={4}
              placeholder="Project Description"
            />
          </div>

          <h4>Features</h4>
          <div class="input-group input-group-icon">
            <input
              type="text"
              value={featureName}
              onChange={(e) => {
                setFeatureName(e.target.value);
              }}
              placeholder="Enter Feature Name"
            />
            <div class="input-icon">
              <i class="fa fa-key"></i>
            </div>
          </div>
          <div class="input-group input-group-icon">
            <input
              type="text"
              value={featureValue}
              onChange={(e) => {
                setFeatureValue(e.target.value);
              }}
              placeholder="Enter Feature Value"
            />
            <div class="input-icon">
              <i class="fa fa-key"></i>
            </div>
          </div>

          <div style={{ textAlign: "end" }}>
            <a
              onClick={AddFeature}
              style={{
                cursor: "pointer",
                backgroundColor: "#4CAF50",
                border: "none",
                color: "white",
                padding: "8px 8px",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "3px",
                display: "inline-block",
                fontSize: "16px",
                marginRight: "1rem",
              }}
            >
              ADD
            </a>
          </div>
          <h4>Features</h4>
          <div class="input-group input-group-icon">
            <input
              type="text"
              value={moreFeatureName}
              onChange={(e) => {
                setMoreFeatureName(e.target.value);
              }}
              placeholder="Enter Feature Name"
            />
            <div class="input-icon">
              <i class="fa fa-key"></i>
            </div>
          </div>
          <div style={{ textAlign: "end" }}>
            <a
              onClick={MoreFeatures}
              style={{
                cursor: "pointer",
                backgroundColor: "#4CAF50",
                border: "none",
                color: "white",
                padding: "8px 8px",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "3px",
                display: "inline-block",
                fontSize: "16px",
                marginRight: "1rem",
              }}
            >
              ADD
            </a>
          </div>
          <h4>ADD IMAGES</h4>
          <label>Card Image</label>
          <div class="input-group input-group-icon">
            <input
              type="file"
              onChange={(e) => {
                CardImages(e);
              }}
              placeholder="Enter Feature Name"
            />
            <div class="input-icon">
              <i class="fa fa-key"></i>
            </div>
          </div>
          <div
            class="input-group input-group-icon"
            style={{ display: "contents", float: "left" }}
          >
            {imageLoading && (
              <Oval
                height={30}
                width={30}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            )}
            {!cardImagesLoading && (
              <>
                {cardImages?.map((items) => {
                  return (
                    <img
                      src={items.url}
                      style={{ width: "7rem", height: "7rem" }}
                    ></img>
                  );
                })}
              </>
            )}
          </div>
          <label>Project Images</label>
          <div class="input-group input-group-icon">
            <input
              type="file"
              onChange={(e) => {
                FileUploader(e);
              }}
              placeholder="Enter Feature Name"
              multiple
            />
            <div class="input-icon">
              <i class="fa fa-key"></i>
            </div>
          </div>
          <div
            class="input-group input-group-icon"
            style={{ display: "contents", float: "left" }}
          >
            {imageLoading && (
              <Oval
                height={30}
                width={30}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            )}
            {!imageLoading && (
              <>
                {images?.map((items) => {
                  return (
                    <img
                      src={items.url}
                      style={{ width: "7rem", height: "7rem" }}
                    ></img>
                  );
                })}
              </>
            )}
          </div>

          <h4>ENTER EMBED ID</h4>
          <div class="input-group input-group-icon">
            <input
              type="text"
              onChange={(e) => {
                setVideo(e.target.value);
              }}
              placeholder="Enter Embed Id"
            />
            <div class="input-icon">
              <i class="fa fa-key"></i>
            </div>
          </div>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div style={{ textAlign: "center" }}>
          <a
            onClick={AddProject}
            style={{
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "8px 8px",
              textAlign: "center",
              textDecoration: "none",
              borderRadius: "3px",
              display: "inline-block",
              fontSize: "16px",
              marginRight: "1rem",
              marginTop: "2rem",
            }}
          >
            SUBMIT
          </a>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
