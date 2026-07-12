const db = require("../config/db");
const createBooking = (req, res) => {
  const {
    client_name,
    address,
    phone,
    email,
    booking_date,
    service,
    message,
  } = req.body;

  const sql = `
    INSERT INTO bookings
    (client_name,address,phone,email,booking_date,service,message)
    VALUES (?,?,?,?,?,?,?)`;

  db.query(sql,
    [client_name,
      address,
      phone,
      email,
      booking_date,
      service,
      message,],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Booking Failed",
        });
      }
      res.json({
        success: true,
        message: "Booking Submitted Successfully!",
      });
    }
  );
};

const getBookingCount = (req, res) => {
  db.query(
    "SELECT COUNT(*) AS total FROM bookings",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        total: result[0].total,
      });
    }
  );
};
// 

const getAllBookings = (req, res) => {
  const sql = `
    SELECT *
    FROM bookings
    ORDER BY id DESC`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch bookings",
      });
    }

    res.json({
      success: true,
      bookings: result,
    });
  });
};
module.exports = {
  createBooking,
  getBookingCount,
  getAllBookings,
};