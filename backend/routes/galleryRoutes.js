const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");

const multer = require("multer");
const path = require("path");

const {
  uploadImage,
  getImages,
  deleteImage,
  getGalleryCount,
} = require("../controllers/galleryController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

router.post("/upload", upload.single("image"), uploadImage);
router.get("/count", getGalleryCount);
router.get("/", getImages);
router.delete("/:id", adminAuth, deleteImage);
module.exports = router;