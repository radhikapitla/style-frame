const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookingCount,
  getAllBookings,
} = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/count", getBookingCount);
router.get("/", getAllBookings);

module.exports = router;