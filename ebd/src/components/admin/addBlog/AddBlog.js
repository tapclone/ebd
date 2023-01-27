import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

import "./AddBlog.css";

function AddProject() {
  const [projectName, setProjectName] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState();
  const Navigate = useNavigate();

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
      setImageLoading(false);
      setImages(data);
    } catch (error) {
      setImageLoading(false);
      console.log(error);
    }
  };

  const AddProject = async () => {
    const obj = {
      Name: projectName,
      Description: description,
      Image: images,
    };
    if (projectName && description && images) {
      try {
        const { data } = await axios.post("/api/admin/add-blog", obj);
        Navigate("/view-all-blog");
      } catch (error) {
        setError("Something Went Wrong");
      }
    } else {
      setError("Please Update Field");
    }
  };
  return (
    <div class="container ms-5" style={{marginTop:"5rem"}}>
      <form>
        <div class="row" style={{marginLeft:"2rem"}}>
          <h4>Heading</h4>
          <div class="input-group input-group-icon">
            <input
              type="text"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              placeholder="Heading"
              required
            />
            <div class="input-icon">
              <i class="fa fa-user"></i>
            </div>
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
          <h4>ADD IMAGES</h4>
          <div class="input-group input-group-icon">
            <input
              type="file"
              onChange={(e) => {
                FileUploader(e);
              }}
              placeholder="Enter Feature Name"
              required
            />
            <div class="input-icon">
              <i class="fa fa-key"></i>
            </div>
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
          {images && (
            <img
              src={images.url}
              style={{ width: "7rem", height: "7rem" }}
            ></img>
          )}
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
