import "./Project.css";
import { React, useState, useEffect } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Project() {
  const [open, setOpen] = useState(false);
  const [widgetLoading, setWidgetLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const [Project, setProject] = useState([]);

  const handleClose = () => setOpen(false);
  const adminToken = localStorage.getItem("adminToken");
  const Navigate = useNavigate();



  useEffect(() => {
    (async function () {
      await axios.get("/api/admin/view-all-project").then((res) => {
        console.log(res.data);
        setProject(res.data);
      });
    })();
  }, [loading]);  

  const DeleteProject = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          // const config = {
          //   headers: {
          //     "auth-token": adminToken,
          //   },
          // };
          await axios
            .delete(`/api/admin/deleting-project/${id}`)
            .then((res) => {
              setLoading(false);
              setLoading(true);
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
  // const DeleteProject = async (id) => {
  //   try {
  //     const { data } = await axios.delete(`/api/admin/deleting-project/${id}`);
  //     setLoading(true);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div
      className="tableMain"
      style={{ marginLeft: "5rem", marginTop: "4rem"}}
    >
      <button
        className="addBtn"
        style={{
          marginLeft: "70%",
          marginBottom: "1%",
          padding: "7px",
          color: "white",
          backgroundColor: "cornflowerblue",
          border: "aliceblue",
          borderRadius: "11px",
        }}
        onClick={() => {
          Navigate("/add-project");
        }}
      >
        ADD PROJECT
      </button>
      <div class="header_fixed ">
        <table >
          <thead>
            <tr>
              <th>S No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Project.map((items, index) => {
              console.log(items);
              return (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  <td style={{ textAlign: "center" }}>
                    <img src={items?.Image[0].url} />
                  </td>
                  <td style={{ textAlign: "center" }}>{items.Name}</td>

                  <td style={{ textAlign: "center" }}>
                    <button
                      onClick={(e) => {
                        DeleteProject(items._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project;
