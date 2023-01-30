const multer = require("multer");
const AWS = require("aws-sdk");
let ACCESS_KEY=process.env.ACCESS_KEY
let SECRET_ACCESS_KEY=process.env.SECRET_ACCESS_KEY
const s3 = new AWS.S3({
  accessKeyId:process.env.ACCESS_KEY,
  secretAccessKey:process.env.SECRET_ACCESS_KEY,
});

module.exports.uploadS3 = (fileData) => {
  ACCESS_KEY=process.env.ACCESS_KEY
  SECRET_ACCESS_KEY=process.env.SECRET_ACCESS_KEY
  return new Promise((resovle, reject) => {
    const params = { 
      Bucket:process.env.BUCKET,
      Key: `${Date.now().toString()}.jpg`,
      Body: fileData,
    }
    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {  
        return resovle(data);
      }
    });
  });
};
