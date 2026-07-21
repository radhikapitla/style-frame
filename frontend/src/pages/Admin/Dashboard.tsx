import { useEffect, useState } from "react";
import axios from "axios";


function Dashboard() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [bookingCount, setBookingCount] = useState(0);
  const [bookings, setBookings] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"bookings" | "messages" | null>(null);
  const [galleryCount, setGalleryCount] = useState(0);


  useEffect(() => {
   if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "/admin/login";
    return;
  }
  fetchBookingCount();
  fetchBookings();
  fetchGalleryCount();
  
  }, []);

  const fetchBookings = async () => {
  try {
    const res = await axios.get("https://style-frame-1i9s.onrender.com/api/bookings");
    setBookings(res.data.bookings);
  } catch (err) {
    console.log(err);
  }
  };

  const fetchBookingCount = async () => {
  try {
    const res = await axios.get(
      "https://style-frame-1i9s.onrender.com/api/bookings/count"
    );

    setBookingCount(res.data.total);
  } catch (err) {
    console.log(err);
  }
  };

  const fetchGalleryCount = async () => {
  try {
    const res = await axios.get(
      "https://style-frame-1i9s.onrender.com/api/gallery/count"
    );

    setGalleryCount(res.data.total);
  } catch (err) {
    console.log(err);
  }
   };

   const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
    
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "https://style-frame-1i9s.onrender.com/api/gallery/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);

      setTitle("");
      setImage(null);

      const fileInput = document.getElementById(
        "image"
      ) as HTMLInputElement;

      if (fileInput) {
        fileInput.value = "";
      }
     } catch (err) {
      console.error(err);
    
    }
    };

    return (
    <div className="min-h-screen bg-gray-950 p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold text-cyan-400"> Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <button onClick={() => setActiveTab("bookings")}
         className="rounded-xl bg-gray-800 p-6 shadow-lg text-left hover:bg-cyan-600 transition">
          <h2 className="text-xl font-semibold">Bookings</h2>
          <p className="mt-4 text-4xl font-bold text-cyan-400">
            {bookingCount}
          </p>
            </button>
      <button onClick={() => window.location.href = "/gallery"}
      className="rounded-xl bg-gray-800 p-6 shadow-lg text-left hover:bg-cyan-600 transition">
      <h2 className="text-xl font-semibold">
      Gallery 
      </h2>
        <p className="mt-4 text-4xl font-bold text-cyan-400">
        {galleryCount}</p>
       <p className="mt-4 text-gray-300">
       View / Delete Images
      </p>
      </button>
      </div>

        {activeTab === "bookings" && (
       <div className="mt-10 rounded-xl bg-gray-800 p-6 overflow-x-auto">
       <table className="w-full">
       <thead>
        <tr className="border-b border-gray-600">
          <th className="p-2">Client</th>
          <th className="p-2">Address</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Email</th>
          <th className="p-2">Date</th>
          <th className="p-2">Service</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td className="p-2">{booking.client_name}</td>
            <td className="p-2">{booking.address}</td>
            <td className="p-2">{booking.phone}</td>
            <td className="p-2">{booking.email}</td>
            <td className="p-2">{booking.booking_date}</td>
            <td className="p-2">{booking.service}</td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
        )}
      <div className="mt-10 rounded-xl bg-gray-800 p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-cyan-400">
          Upload Gallery Image
        </h2>
        <form
          onSubmit={handleUpload}
          className="space-y-5">
          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full rounded-lg bg-gray-900 p-3 outline-none"/>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }}
            required
            className="w-full rounded-lg bg-gray-900 p-3"/>
          <button
            type="submit"
            className="rounded-lg bg-cyan-500 px-8 py-3 font-bold hover:bg-cyan-600">
            Upload Image
          </button>
        </form>
        <div className="flex justify-end mb-6">
        <button
        type="button" onClick={() => {
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("admin");
        window.location.href = "/admin/login";
        }}
        className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700">
        Logout
        </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
