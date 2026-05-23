 const { verifyToken } = require("../utils/jwt");

exports.authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = decoded; // { email, role }
    next();
  } catch (err) {
    return res.status(500).json({ message: "Auth error", error: err.message });
  }
};