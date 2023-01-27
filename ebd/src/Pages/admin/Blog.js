import React from "react";
import BlogPage from "../../components/admin/blog/Blog";
import Sidebar from "../../components/admin/sidebar/Sidebar";
function Blog() {
  return (
    <div>
      <Sidebar/> 
      <BlogPage />
    </div>
  );
}

export default Blog;
