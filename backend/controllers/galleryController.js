const db = require("../config/db");
const fs = require("fs");
const path = require("path");

const uploadImage = (req, res) => {
  const { title } = req.body;

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No image selected",
    });
  }

  const image_url = req.file.filename;
  const sql =
    "INSERT INTO gallery(title,image_url) VALUES(?,?)";

  db.query(sql, [title, image_url], (err) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Upload Failed",
      });
    }

    res.json({
      success: true,
      message: "Image Uploaded Successfully",
    });
  });
};

const getImages = (req, res) => {
  db.query(
    "SELECT * FROM gallery ORDER BY id DESC",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
};

const getGalleryCount = (req, res) => {
  const sql = "SELECT COUNT(*) AS total FROM gallery";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      total: result[0].total,
    });
  });
};

const deleteImage = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM gallery WHERE id=?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Image not found",
        });
      }

      const imagePath = path.join(
        __dirname,
        "../uploads",
        result[0].image_url
      );

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }

      db.query(
        "DELETE FROM gallery WHERE id=?",
        [id],
        (err2) => {
          if (err2) {
            return res.status(500).json(err2);
          }

          res.json({
            success: true,
            message: "Image Deleted Successfully",
          });
        }
      );
    }
  );
};

module.exports = {
  uploadImage,
  getImages,
  deleteImage,
  getGalleryCount,
};