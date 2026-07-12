import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-cyan-400">       
          Style Frame
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-cyan-400"
                  : "text-white transition hover:text-cyan-400"
              }>                
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/admin/login"
            className={({ isActive }) =>
              isActive
                ? "rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white"
                : "rounded-lg border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
            }>          
            Admin
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="space-y-2 bg-gray-800 px-6 py-4 md:hidden">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block rounded bg-cyan-500 px-4 py-2 font-semibold text-white"
                  : "block rounded px-4 py-2 text-white hover:bg-gray-700"
              }>
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/admin/login"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-lg bg-cyan-500 px-4 py-2 text-center font-semibold text-white">
            Admin Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}
export default Navbar;