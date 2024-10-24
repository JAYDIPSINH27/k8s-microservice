const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const dataDir = "./Jaydipsinh_PV_dir"; 
app.use(express.json());

app.post("/calculate", (req, res) => {
  const { file, product } = req.body;
  const filePath = path.join(dataDir, file);
  console.log(filePath);

  let sum = 0;

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      file: file,
      error: "File not found.",
    });
  }

  if (!file || file === null) {
    return res.status(400).json({
      file: null,
      error: "Invalid JSON input.",
    });
  }

  if (!isValidCSVFile(filePath)) {
    return res.json({
      file: file,
      error: "Input file not in CSV format.",
    });
  } else {
    const cleanedData = cleanFile(filePath);
    const lines = cleanedData.split('\n');
    for (let i = 1; i < lines.length; i++) {
      const fields = lines[i].split(',').map(field => field.trim());
      if (fields[0] === product) {
        sum += parseInt(fields[1], 10);
      }
    }
    res.json({ file, sum });
  }
});

function cleanFile(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const cleanedData = fileData.replace(/ +/g, '').trim();
  return cleanedData;
}

function isValidCSVFile(filePath) {
  const fileData = cleanFile(filePath);
  const lines = fileData.split('\n');
  if (lines.length < 2) {
    return false;
  }

  const headers = lines[0].split(',').map(header => header.trim());

  if (headers.length === 1 && headers[0] === '') {
    return false;
  }

  for (let i = 1; i < lines.length; i++) {
    const fields = lines[i].split(',').map(field => field.trim());
    if (fields.length !== headers.length) {
      return false;
    }
    if (fields.slice(1).some(field => isNaN(field))) {
      return false;
    }
  }

  return true;
}

app.listen(5000, () => {
  console.log("Video Demo");
  console.log("Service2 is listening on port 5000");
});
