 const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const candidateRoutes = require("./routes/candidate.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

// =======================
// MIDDLEWARES
// =======================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// =======================
// STATIC FILES (FIXED)
// =======================
 app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// =======================
// ROUTES
// =======================
app.use("/api/candidates", candidateRoutes);
app.use("/api/admin", adminRoutes);

// =======================
// HEALTH CHECK
// =======================
app.get("/", (req, res) => {
  res.send("FentixTech Backend Running");
});

module.exports = app;