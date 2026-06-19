 // Load environment variables FIRST
require("dotenv").config();

// Debug: Check if .env loaded correctly
console.log("📋 Environment Check:");
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI ? "✓ Set" : "✗ Missing");
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "✓ Set" : "✗ Missing");
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME ? "✓ Set" : "✗ Missing");
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY ? "✓ Set" : "✗ Missing");
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "✓ Set" : "✗ Missing");
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL ? "✓ Set" : "✗ Missing");
console.log("EMAIL:", process.env.EMAIL ? "✓ Set" : "✗ Missing");

const app = require("./app");
const connectDB = require("./config/db");

// Connect to database
connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}\n`);
});