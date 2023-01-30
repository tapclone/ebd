const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const collection = require("../config/collection");
const generateToken = require("../utils/jwtToken");
const { ObjectId } = require("mongodb");
const { PROJECT_COLLECTION } = require("../config/collection");
const { BLOG_COLLECTION } = require("../config/collection");
const { uploadS3 } = require("../middelware/S3");

const Login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (username == "ebd@gmail.com" && password == "password") {
    const token = generateToken(password);
    res.status(200).json(token);
  } else {
    res.status(401).json("Invalid Details");
  }
});

const AddBlog = asyncHandler(async (req, res) => {
  const blogData = req.body;
  const addBlog = await db
    .get()
    .collection(collection.BLOG_COLLECTION)
    .insertOne(blogData);
  console.log(addBlog);
  if (addBlog) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const DeleteBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteBlog = await db
    .get()
    .collection(collection.BLOG_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  console.log(deleteBlog, "dm");
  if (deleteBlog) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const viewAllBlog = asyncHandler(async (req, res) => {
  const viewAllBlog = await db
    .get()
    .collection(collection.BLOG_COLLECTION)
    .find()
    .toArray();
  if (viewAllBlog) {
    res.status(200).send(viewAllBlog);
  } else {
    res.status(500).json("Something Went wrong");
  }
});

const AddProject = asyncHandler(async (req, res) => {
  const Project = req.body;
  const updateProject = await db
    .get()
    .collection(collection.PROJECT_COLLECTION)
    .insertOne(Project);
  console.log(updateProject);
  if (updateProject.acknowledged) {
    // Check if the operation was successful by checking the result object of the insertOne operation
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const DeleteProject = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteProject = await db
    .get()
    .collection(collection.PROJECT_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  console.log(deleteProject);
  if (deleteProject.deletedCount > 0) {
    // Check if the delete operation was successful by checking the deletedCount property of the result object returned from the deleteOne method
    res.status(200).json("success");
  } else {
    res.status(404).json("Something went wrong");
  }
});

const ViewAllProject = asyncHandler(async (req, res) => {
  const projectList = await db
    .get()
    .collection(collection.PROJECT_COLLECTION)
    .find()
    .toArray();
  if (projectList) {
    res.status(200).json(projectList);
  } else {
    res.status(201).json("No Records");
  }
});
const UploadImage = asyncHandler(async (req, res) => {
  let images = [];
  console.log(req.files);
  if (req.files.file && req.files.file.length > 0) {
    for (let i = 0; i < req.files.file.length; i++) {
      uploadS3(req.files.file[i].data)
        .then((result) => {
          const obj = {
            url: result.Location,
            key: result.Key,
          };
          images.push(obj);
          if (images.length == req.files.file.length) {
            res.status(200).json(images);
          }
        })
        .catch((error) => {
          res.status(400).json("Something went wrong");
        });
    }
  } else {
    uploadS3(req.files.file.data)
      .then((result) => {
        const obj = {
          url: result.Location,
          key: result.Key,
        };
        console.log(obj);
        res.status(200).json(obj);
      })

      .catch((error) => {
        res.status(400).json("Something went wrong");
      });
  }
});
const ViewSingleProject = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const SingleProject = await db
    .get()
    .collection(collection.PROJECT_COLLECTION)
    .findOne({ _id: ObjectId(id) });
  if (SingleProject) {
    res.status(200).json(SingleProject);
  } else {
    res.status(400).json("Something went Wrong");
  }
});
const ViewSingleBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const singleBlog = await db
    .get()
    .collection(collection.BLOG_COLLECTION)
    .findOne({ _id: ObjectId(id) });
  if (singleBlog) {
    res.status(200).json(singleBlog);
  } else {
    res.status(400).json("Something Went Wrong");
  }
});
module.exports = {
  Login,
  AddBlog,
  DeleteBlog,
  viewAllBlog,
  AddProject,
  DeleteProject,
  ViewAllProject,
  UploadImage,
  ViewSingleProject,
  ViewSingleBlog,
};
