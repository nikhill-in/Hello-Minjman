import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../services_api/features/auth/authSlices.js";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logoutUser());
    setMenuOpen(false);
    navigate("/", { replace: true });
  };

  // Helper to highlight active links
  const isActive = (path) => location.pathname === path ? "text-white border-b-2 border-white" : "text-gray-300";

  return (
    <header className="bg-gray-700 text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Brand Logo */}
      <Link to="/" className="group flex items-center gap-2">
        <div className="text-2xl italic font-serif font-bold leading-5 tracking-tighter group-hover:text-indigo-400 transition-colors">
          Hello <br /> <span className="text-indigo-400 group-hover:text-white">Minjuaan</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center font-medium">
        {/* <Link to="/home" className={`hover:text-white transition-all ${isActive('/home')}`}>Home</Link> */}
        <Link to="/about" className={`hover:text-white transition-all ${isActive('/about')}`}>About</Link>
        <Link to="/contact" className={`hover:text-white transition-all ${isActive('/contact')}`}>Contact</Link>

        {user ? (
          <div className="flex items-center gap-6 border-l border-gray-500 pl-6">
            <Link to="/user-dashboard" className="flex items-center gap-2 hover:text-indigo-300 transition">
              <FaUserCircle size={20} />
              <span>Dashboard</span>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-5 py-1.5 rounded-full text-sm font-bold transition-transform active:scale-95"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white text-gray-800 hover:bg-indigo-50 px-6 py-1.5 rounded-full font-bold transition-all shadow-sm"
          >
            Login
          </Link>
        )}
      </nav>

      <div className="md:hidden text-2xl cursor-pointer hover:text-indigo-400 transition" onClick={() => setMenuOpen(true)}>
        <FaBars />
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-800 shadow-2xl transform transition-transform duration-500 ease-in-out z-60 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-6">
          <FaTimes className="text-3xl cursor-pointer hover:text-red-400" onClick={() => setMenuOpen(false)} />
        </div>

        <nav className="flex flex-col gap-8 items-center mt-4 text-xl font-semibold">
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          <div className="w-4/5 border-t border-gray-600 my-2"></div>

          {user ? (
            <>
              <Link to="/user-dashboard" onClick={() => setMenuOpen(false)} className="text-indigo-400">My Dashboard</Link>
              <button
                onClick={handleLogout}
                className="w-4/5 bg-red-500 text-white py-3 rounded-xl font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="w-4/5 bg-white text-gray-800 py-3 rounded-xl text-center font-bold"
            >
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Overlay for Mobile Drawer */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-55 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;