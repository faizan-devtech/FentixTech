 const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 🔥 ensure folders exist automatically
const createFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

createFolder("uploads/cvs");
createFolder("uploads/others");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      if (file.fieldname === "resume") {
        cb(null, "uploads/cvs");
      } else {
        cb(null, "uploads/others");
      }
    } catch (err) {
      cb(err);
    }
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  // 🔥 safety check (optional but production level)
  const allowed = [
    "application/pdf",
    "image/png",
    "image/jpeg",
  ];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

module.exports = upload;