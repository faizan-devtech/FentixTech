 const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

const cloudinary = require("../src/utils/cloudinary");

const uploadImage = async (filePath) => {
  try {
    console.log("Uploading:", filePath);

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "fentix/assets",
    });

    console.log("Uploaded:", result.secure_url);

    return result.secure_url;
  } catch (error) {
    console.error("Upload Error:", error);
    return null;
  }
};

const run = async () => {
  try {
    console.log(
      "Cloud Name:",
      process.env.CLOUDINARY_CLOUD_NAME
    );

    const logoUrl = await uploadImage(
      path.join(__dirname, "../assets/logo.png")
    );

    const stampUrl = await uploadImage(
      path.join(__dirname, "../assets/stamp.png")
    );

    const signnUrl = await uploadImage(
      path.join(__dirname, "../assets/signn.png")
    );

    console.log("\nUPLOAD SUCCESS:");
    console.log({
      logoUrl,
      stampUrl,
      signnUrl,
    });
  } catch (err) {
    console.error("Script Error:", err);
  }
};

run();