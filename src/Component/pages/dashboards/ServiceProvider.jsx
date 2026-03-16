import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTools, FaCalendarCheck, FaStar, FaArrowRight } from 'react-icons/fa';

const ServiceProvider = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-4 md:p-8">
      {/* Centered Wrapper */}
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-[2.5rem] md:rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-100 mx-auto">
        
        <div className="p-10 md:p-16 flex flex-col justify-center bg-purple-700 text-white text-center lg:text-left">
          <div className="bg-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0">
            <FaTools size={30} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Become a <br/>Verified Pro</h1>
          <p className="text-purple-100 text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
            Stop searching for leads. Let Minzwan bring the customers to you. 
            Manage your schedule and get paid via secure Escrow.
          </p>
          <ul className="space-y-4 mb-10 text-purple-200 font-bold text-sm md:text-base">
            <li className="flex items-center justify-center lg:justify-start gap-3"><FaCalendarCheck className="text-white"/> Smart Booking Calendar</li>
            <li className="flex items-center justify-center lg:justify-start gap-3"><FaStar className="text-white"/> Verified Customer Reviews</li>
            <li className="flex items-center justify-center lg:justify-start gap-3"><FaArrowRight className="text-white"/> Instant Payment Release</li>
          </ul>
        </div>

        <div className="p-10 md:p-16 flex flex-col justify-center items-center text-center bg-white">
          <h2 className="text-3xl font-black text-gray-800 mb-4">Ready to grow?</h2>
          <p className="text-gray-500 mb-10 max-w-sm">Join 500+ professionals providing 50+ services across the city.</p>
          
          <div className="flex flex-col w-full max-w-xs gap-4">
            <button 
              onClick={() => navigate("/register", { state: { role: 'professional' } })}
              className="w-full bg-purple-600 text-white py-4 rounded-2xl font-black text-xl hover:bg-purple-800 transition-all shadow-xl active:scale-95"
            >
              Start Earning Now
            </button>
            <button 
              onClick={() => navigate("/login")}
              className="w-full border-2 border-gray-100 py-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-all"
            >
              Log In to Console
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;