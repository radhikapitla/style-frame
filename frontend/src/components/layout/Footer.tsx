import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-14 md:grid-cols-4">
        {/* Company */}
        <div>
          <h2 className="mb-4 text-3xl font-bold text-cyan-400">
            Style Frame
          </h2>
          <p className="text-gray-400 leading-7">
            Capturing memories through creative photography,
            and with unforgettable experiences.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Contact</h3>
          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" />
              +91 9100051607
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              radhikapitla07@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              Siddipet, Hyderabad, India
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#">
              <FaInstagram className="hover:text-cyan-400 transition" /></a>
            <a href="#">
              <FaWhatsapp className="hover:text-cyan-400 transition" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 text-center text-gray-500">
        © 2026 Style Frame. All Rights Reserved.
      </div>
    </footer>
  );
}
export default Footer;