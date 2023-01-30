const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middelware/jwtToken");
const {
  Login,
  AddBlog,
  DeleteBlog,
  viewAllBlog,
  AddProject,
  DeleteProject,
  ViewAllProject,
  UploadImage,
  ViewSingleProject,
  ViewSingleBlog
} = require("../controls/adminControls");

router.route("/login").post(Login);
router.route("/add-blog").post(AddBlog);
router.route("/delete-blog/:id").delete(DeleteBlog);
router.route("/view-all-blog").get(viewAllBlog);
router.route("/add-project").post(AddProject);
router.route("/deleting-project/:id").delete(DeleteProject);
router.route("/view-all-project").get(ViewAllProject);
router.route("/view-single-project/:id").get(ViewSingleProject)
router.route("/view-single-blog/:id").get(ViewSingleBlog)
router.route("/image-uploading").post(UploadImage)

module.exports = router;
