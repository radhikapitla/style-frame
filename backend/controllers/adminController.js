const db = require("../config/db");

exports.login = (req, res) => {
  const { username, password } = req.body;

  const sql =
    "SELECT * FROM admins WHERE username=? AND password=?";

  db.query(sql, [username, password], (err, result) => {
    if (err)
      return res.status(500).json(err);

    if (result.length > 0) {
      return res.json({
        success: true,
        admin: result[0],
      });
    }
    res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });
  });
};