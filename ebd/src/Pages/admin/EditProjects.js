import React from "react";
import EditProjects from "../../components/admin/EditProject/EditProject";
import Sidebar from "../../components/admin/sidebar/Sidebar";

function Project() {
  return (
    <div>
      <Sidebar />
      <EditProjects />
    </div>
  );
}

export default Project;
