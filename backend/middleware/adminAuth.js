function adminAuth(req, res, next) {
  const isAdmin = req.headers["x-admin"];

  if (isAdmin !== "true") {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  next();
}

module.exports = adminAuth;