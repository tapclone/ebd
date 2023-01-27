import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";

function AdminLogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  //   const token = localStorage.getItem("adminToken");
  //   useEffect(() => {
  //     if (token) {
  //       navigate("/adminHome");
  //     }
  //   }, []);

  const handleLogin = async (e) => {
    if (username && password) {
      e.preventDefault();
      await axios
        .post("/api/admin/login", {
          username,
          password,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("adminToken", res.data);
          navigate("/admin-home");
        })
        .catch((err) => {
          setError("Invalid Password And Email");
        });
    } else {
      setError("Please updated form");
    }
  };

  function togglePassword() {
    var x = document.getElementById("typePasswordX");
    if (x.type === "password") {
      x.type = "text";
      document.querySelector(".visibleIcon").style.color = "rgb(57, 119, 234)";
    } else {
      x.type = "password";
      document.querySelector(".visibleIcon").style.color = "white";
    }
  }

  return (
    <section class="login_section">
      <div class="loginform">
        <h2>ADMIN LOGIN</h2>

        <form class="form_login">
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            class="login_fields"
            placeholder="Enter Email"
            required
          />
          <label>Username</label>
          <br />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            class="login_fields"
            placeholder="password"
            required
          />
          <label>Password</label>
          <br />
          <input
            type="submit"
            name="submit"
            value="LOG IN"
            onClick={handleLogin}
            class="login_submit"
          />
          <br />
          {error && <p class="error">{error} </p>}
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
