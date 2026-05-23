const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controllers/login.controller");

router.post("/login", loginAdmin);

module.exports = router;