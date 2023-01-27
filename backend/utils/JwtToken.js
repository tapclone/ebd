//generate jwt token function
const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, "asif", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
