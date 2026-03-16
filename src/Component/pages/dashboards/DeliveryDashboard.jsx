import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTruck, FaWallet, FaMapMarkedAlt, FaChevronRight } from 'react-icons/fa';

const DeliveryDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-4 md:p-8">
      {/* Centered Wrapper */}
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row border border-gray-100 mx-auto">
        
        <div className="lg:w-1/2 p-10 md:p-16 bg-orange-500 text-white flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-5xl font-black mb-6 tracking-tighter italic uppercase">Drive & Earn.</h1>
          <p className="text-orange-100 text-xl font-medium mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
            Your vehicle, your time. Deliver for Minzwan vendors and earn on every kilometer.
          </p>
          <div className="space-y-6 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-5 bg-orange-600/50 p-6 rounded-3xl backdrop-blur-sm">
              <FaWallet className="text-3xl text-orange-200" />
              <div className="text-left">
                <p className="font-black text-lg">Weekly Payouts</p>
                <p className="text-orange-100 text-sm">Direct to your bank account.</p>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-orange-600/50 p-6 rounded-3xl backdrop-blur-sm">
              <FaMapMarkedAlt className="text-3xl text-orange-200" />
              <div className="text-left">
                <p className="font-black text-lg">Smart Routing</p>
                <p className="text-orange-100 text-sm">Save fuel with AI-driven maps.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center bg-white">
          <header className="text-center mb-10">
            <h2 className="text-4xl font-black text-gray-800 tracking-tight">Join the Fleet</h2>
            <p className="text-gray-400 font-bold mt-2">Sign up in less than 5 minutes.</p>
          </header>

          <div className="w-full max-w-xs space-y-4">
            <button 
              onClick={() => navigate("/register", { state: { role: 'delivery' } })}
              className="group w-full bg-gray-900 text-white py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-4 hover:bg-black transition-all shadow-2xl active:scale-95"
            >
              Register Now <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate("/login")}
              className="w-full bg-white border border-gray-200 text-gray-500 py-5 rounded-3xl font-bold hover:bg-gray-50 transition-all"
            >
              Partner Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;