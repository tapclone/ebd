
import "./Project.css";
import { React, useState, useEffect } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
function Project() {
    const [open, setOpen] = useState(false);
    const [widgetLoading, setWidgetLoading] = useState(true);  
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState();
    const [gallery, setGallery] = useState([]);
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);
    const adminToken = localStorage.getItem("adminToken");
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
    const {
      register,
      handleSubmit,
      trigger,
      reset,
      formState: { errors },
    } = useForm();
    const Imageupload = () => {
      setWidgetLoading(true);
      var myWidget = window.cloudinary.openUploadWidget(
        {
          cloudName: "dbpxhm5vt",
          uploadPreset: "Nediyath",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setImage(result.info.url);
  
            // setImage((prev) => [
            //   ...prev,
            //   { url: result.info.url, public_id: result.info.public_id },
            // ]);
          }
        }
      );
  
      myWidget.open();
    };
    const onSubmit = async ({ Name }) => {
      if (image) {
        try {
          const config = {
            headers: {
              "auth-token": adminToken,
            },
          };
          const { data } = await axios.post(
            "https://render-test-3dm2.onrender.com/api/admin/addGallery",
            { Name, image },
            config
          );
          reset();
          setImage("");
          setOpen(false);
          setLoading(!loading);
        } catch (error) {
          console.log(error);
          swal("OOPS!", "Something Went Wrong!", "error");
        }
      } else {
        swal("OOPS!", "Please Upload Image!", "error");
      }
    };
  
    useEffect(() => {
      axios
        .get("https://render-test-3dm2.onrender.com/api/admin/viewAllGallery")
        .then((res) => {
          setGallery(res.data);
        });
    }, [loading]);
  
    const DeleteData = async (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          try {
            const config = {
              headers: {
                "auth-token": adminToken,
              },
            };
            await axios
              .delete(
                `https://render-test-3dm2.onrender.com/api/admin/deleteGallery/${id}`,
                config
              )
              .then((res) => {
                setLoading(!loading);
              })
              .catch((err) => {
                console.log(err);
              });
          } catch (err) {
            console.log(err);
          }
        } else {
          swal("Your Data Is Safe");
        }
      });
    };
  return (
    <div
      className="tableMain"
      style={{ marginLeft: "10%", marginTop: "3%", overflow: "scroll" }}
    >
      <button
        className="addBtn"
        style={{ marginLeft: "70%", marginBottom: "1%" }}
        onClick={handleOpen}
      >
        ADD GALLERY
      </button>
      <table
        class="table adminTable table-bordered"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {gallery.map((item) => {
            return (
              <tr>
                <td style={{ width: "10rem", height: "10rem" }}>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "inherit", height: "inherit" }}
                  />
                </td>
                <td>{item.Name}</td>
                <td>
                  <DeleteIcon onClick={() => DeleteData(item._id)}></DeleteIcon>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <h4 style={{ textAlign: "center" }}>ADD IMAGES</h4>
              <form
                className="tm-edit-product-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="Enter Image Name"
                  className="form-control mt-3"
                  {...register("Name", {
                    required: "Name is Required",
                  })}
                  onKeyUp={() => {
                    trigger("Name");
                  }}
                />
                {errors.Name && (
                  <div>
                    <small className="text-danger">{errors.Name.message}</small>
                  </div>
                )}

                <a
                  className="form-control uploadImg btn btn-warning mt-3"
                  onClick={Imageupload}
                  style={{ cursor: widgetLoading ? "disabled" : "pointer" }}
                >
                  UPLOAD IMAGE
                </a>
                {
                  <div
                    style={{ width: "7rem", height: "3rem", display: "inline" }}
                  >
                    <img
                      src={
                        !image
                          ? "https://imgv3.fotor.com/images/homepage-feature-card/Upload-an-image.jpg"
                          : image
                      }
                      alt=""
                      style={{
                        width: "inherit",
                        height: "inherit",
                        marginTop: "1rem",
                      }}
                    />
                  </div>
                }
                <span style={{ marginLeft: "4%" }}>( 800 x 450)</span>
                <button
                  type="submit"
                  className="btn btn-success mt-3"
                  style={{ display: "block" }}
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Project;
