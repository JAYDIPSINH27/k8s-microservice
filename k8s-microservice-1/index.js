const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const dataDir = "./Jaydipsinh_PV_dir"; 
app.use(express.json());

app.post("/store-file", (req, res) => {
  const { file, data } = req.body;

  if (!file || file === null) {
    return res.status(400).json({
      file: null,
      error: "Invalid JSON input.",
    });
  }

  const filePath = path.join(dataDir, file);


  

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      return res.status(500).json({
        file: file,
        error: "Error while storing the file to the storage.",
      });
    }

    res.status(200).json({
      file: file,
      message: "Success.",
    });
  });
});

app.post("/calculate", (req, res) => {
  const { file, product } = req.body;

  if (!file || file=== null) {
    return res.status(400).json({
      file: null,
      error: "Invalid JSON input.",
    });
  }
  const filePath = path.join(dataDir, file);



  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      file: file,
      error: "File not found.",
    });
  }

  axios.post("http://service2:5000/calculate", {
    file,
    product,
  })
  .then((response) => {
    return res.status(200).json(response.data);
  })
  .catch((error) => {
    console.error("Error communicating with service2:", error);
    return res.status(500).json({
      file: file,
      error: "Error communicating with service2.",
      details: error.message
    });
  });
});

app.listen(6000, () => {
  console.log("Video Demo");
  console.log("Service1 is listening on port 6000");
});
