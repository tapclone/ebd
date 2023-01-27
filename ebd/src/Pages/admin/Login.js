import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "../../components/admin/login/Login";

function Login() {
  const Navigate=useNavigate()
  const adminToken = localStorage.getItem("adminToken");
  useEffect(()=>{
    if(adminToken){
     Navigate('/admin-home')
    }
  })
  return (
    <div>
      <AdminLogin />
    </div>
  );
}

export default Login;
