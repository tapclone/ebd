import React from "react";
import EditBlogPage from "../../components/admin/EditBlog/EditBlog";
import Sidebar from "../../components/admin/sidebar/Sidebar";
function EditBlog() {
  return (
    <div>
      <Sidebar/> 
      <EditBlogPage />
    </div>
  );
}

export default EditBlog;
