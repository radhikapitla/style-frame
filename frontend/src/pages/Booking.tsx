import { useState } from "react";
import axios from "axios";

function Booking() {
  const [formData, setFormData] = useState({
    client_name: "",
    address: "",
    phone: "",
    email: "",
    booking_date: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
     setFormData({...formData,[e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );
      console.log(res.data)

      setFormData({
        client_name: "",
        address: "",
        phone: "",
        email: "",
        booking_date: "",
        service: "",
        message: "",
      });
     } catch (err) {
      console.error(err);
     }
     };

    return (
    <div className="min-h-screen bg-gradient-to-br from-[#6EA2B3] via-white to-[#6EA2B3] py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl text-center font-serif mb-2">
          Booking Session
        </h1>
        <h2 className="text-3xl text-center mb-10">
          Client Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-semibold"> Client Name</label>
            <input type="text"
              name="client_name"
              value={formData.client_name}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-400 p-2 outline-none"/>
          </div>
          <div>
            <label className="font-semibold">Address</label>
            <input type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-400 p-2 outline-none"/>
           </div>
           <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">Phone</label>
              <input type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-400 p-2 outline-none"/>
            </div>
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-400 p-2 outline-none"/>
            </div>
          </div>
          <div>
            <label className="font-semibold">Date of Session</label>
            <input
              type="date"
              name="booking_date"
              value={formData.booking_date}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-400 p-2 outline-none"/>
          </div>
          <div>
            <label className="font-semibold text-2xl block mb-4 text-center">Services</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3">
              <option value="">Select Service</option>
              <option value="Photography">Photography</option>
              <option value="Wedding Shoot">Wedding Shoot</option>
              <option value="Videography">Videography</option>
              <option value="Fashion Shoot">Fashion Shoot</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Message</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"/>
           </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-[#6EA2B3] py-4 text-xl font-bold text-white hover:bg-[#5b8d9d] transition">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
export default Booking;