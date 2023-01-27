import React from 'react'
import Sidebar from "../../components/admin/sidebar/Sidebar";
import  AddBlogpage  from '../../components/admin/addBlog/AddBlog';
function AddBlog() {
  return (
    <div> 
        <Sidebar></Sidebar>
        <AddBlogpage/>
      
    </div>
  ) 
}

export default AddBlog
